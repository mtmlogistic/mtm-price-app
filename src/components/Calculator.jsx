
import { useEffect, useMemo, useState } from 'react';
import {
  FaCalculator,
  FaTimes,
  FaPlus,
  FaTrashAlt,
  FaMapMarkerAlt,
  FaShip,
  FaSyncAlt,
} from 'react-icons/fa';
import './Calculator.css';

const API_URL =   "https://mtm-auction-fees.mtmgl.workers.dev/";;
const DEBOUNCE_MS = 500;

const isValidPrice = (value) =>
  value !== null &&
  value !== undefined &&
  value !== '' &&
  Number.isFinite(Number(value)) &&
  Number(value) > 0;

const formatPrice = (value) =>
  Math.round(Number(value || 0)).toLocaleString('en-US');

const DEFAULT_SETTINGS = {
  auction: 'copart',
  bidType: 'online',
  bidPay: 'unsecured',
  bidVehicle: 'standard',
  volume: 'high',
};

export default function Calculator({
  location,
  port,
  onClose,
  selectedVehicle = null,
  selectedVehiclePriceUsd = 0,
  onOpenVehicleRates,
  onRemoveVehicle,
  shipping_rates_to_herat = {},
}) {
  const routeId =
    port?.route === 'uae' || port?.route === 'tr'
      ? port.route
      : isValidPrice(port?.shipping_to_uae) &&
          !isValidPrice(port?.shipping_to_tr)
        ? 'uae'
        : 'tr';

  const routeInfo =
    routeId === 'uae'
      ? {
          title: 'امارات',
          firstLabel: 'انتقال الی امارات',
          firstRoute: 'USA / Canada → UAE',
          secondLabel: 'انتقال امارات الی هرات',
          secondRoute: 'UAE → Herat',
          rawShipping: port?.shipping_to_uae,
          rawHerat: shipping_rates_to_herat?.uae,
          flag: '🇦🇪',
        }
      : {
          title: 'ترکیه',
          firstLabel: 'انتقال الی ترکیه / مرسن',
          firstRoute: 'USA / Canada → Turkey',
          secondLabel: 'انتقال ترکیه الی هرات',
          secondRoute: 'Turkey → Herat',
          rawShipping: port?.shipping_to_tr,
          rawHerat: shipping_rates_to_herat?.tr,
          flag: '🇹🇷',
        };

  const shipValue = port?.ship ?? routeInfo.rawShipping;
  const heratValue = port?.herat ?? routeInfo.rawHerat;

  const shipAvailable = isValidPrice(shipValue);
  const heratAvailable = isValidPrice(heratValue);

  const ship = shipAvailable ? Number(shipValue) : null;
  const herat = heratAvailable ? Number(heratValue) : null;

  const totalAvailable =
    isValidPrice(port?.total) || (shipAvailable && heratAvailable);

  const originalTotal = totalAvailable
    ? isValidPrice(port?.total)
      ? Number(port.total)
      : Number(ship) + Number(herat)
    : null;

  // -----------------------------
  // Auction Fees API
  // -----------------------------

  const [bidAmount, setBidAmount] = useState('');
  const [auctionSettings, setAuctionSettings] =
    useState(DEFAULT_SETTINGS);

  const [auctionFee, setAuctionFee] = useState(null);
  const [auctionFeeStatus, setAuctionFeeStatus] = useState('idle');
  const [auctionFeeError, setAuctionFeeError] = useState('');

  const [extraCosts, setExtraCosts] = useState([]);
  const [saved, setSaved] = useState(false);

  const bidNumber =
    bidAmount !== '' && isValidPrice(bidAmount)
      ? Number(bidAmount)
      : 0;

  const updateAuctionSetting = (field, value) => {
    setAuctionSettings((previous) => {
      const next = { ...previous, [field]: value };

      // Payment options differ between Copart and IAAI.
      if (field === 'auction') {
        if (value === 'copart') {
          next.bidPay = 'unsecured';
          next.bidVehicle = 'standard';
        } else {
          next.bidPay = 'high';
          next.bidVehicle = 'licensed';
        }
      }

      return next;
    });
  };

  useEffect(() => {
    if (!bidNumber) {
      setAuctionFee(null);
      setAuctionFeeError('');
      setAuctionFeeStatus('idle');
      return undefined;
    }

    let cancelled = false;
    const controller = new AbortController();

    setAuctionFeeStatus('loading');
    setAuctionFeeError('');
    setAuctionFee(null);

    const timer = window.setTimeout(async () => {
      try {
        const body = {
          bidAmount: bidNumber,
          auction: auctionSettings.auction,
          bidType: auctionSettings.bidType,
          bidPay: auctionSettings.bidPay,
          bidVehicle: auctionSettings.bidVehicle,
        };

        if (auctionSettings.auction === 'copart') {
          body.volume = auctionSettings.volume;
        }

        const response = await fetch(API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
          signal: controller.signal,
        });

        if (!response.ok) {
          if (response.status === 429) {
            throw new Error(
              'تعداد درخواست‌ها زیاد است. کمی بعد دوباره تلاش کنید.',
            );
          }

          throw new Error(
            `خطای سرور API (${response.status})`,
          );
        }

        const data = await response.json();

        const apiFee = data?.quote?.auctionFees?.auctionFee;

if (
  apiFee === null ||
  apiFee === undefined ||
  apiFee === '' ||
  !Number.isFinite(Number(apiFee)) ||
  Number(apiFee) < 0
) {
  throw new Error(
    'مبلغ فیس اکشن در پاسخ API موجود نیست.',
  );
}

// برای IAAI مبلغ 20 دالر اضافه می‌شود.
const fee =
  Number(apiFee) +
  (auctionSettings.auction === 'iaai' ? 20 : 0);

        if (!Number.isFinite(Number(fee)) || Number(fee) < 0) {
          throw new Error(
            'مبلغ فیس اکشن در پاسخ API موجود نیست.',
          );
        }

        if (!cancelled) {
          setAuctionFee(Number(fee));
          setAuctionFeeStatus('success');
          setAuctionFeeError('');
        }
      } catch (error) {
        if (cancelled || error?.name === 'AbortError') {
          return;
        }

        console.error('Auction Fees API error:', error);

        setAuctionFee(null);
        setAuctionFeeStatus('error');
        setAuctionFeeError(
          error?.message === 'Failed to fetch'
            ? 'اتصال به API برقرار نشد. احتمال دارد سرور درخواست مرورگر را به دلیل CORS رد کرده باشد.'
            : error?.message || 'دریافت فیس اکشن ناموفق بود.',
        );
      }
    }, DEBOUNCE_MS);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      controller.abort();
    };
  }, [bidNumber, auctionSettings]);

  const retryAuctionFee = () => {
    // Re-trigger the effect for the same bid and settings.
    setAuctionFeeStatus('retry');
    setAuctionSettings((previous) => ({ ...previous }));
  };

  // -----------------------------
  // Customs and extra costs
  // -----------------------------

  const customsVehiclePrice = Math.round(
    Number(selectedVehiclePriceUsd || selectedVehicle?.price_usd || 0),
  );

  useEffect(() => {
    setExtraCosts((previous) => {
      if (!selectedVehicle || customsVehiclePrice <= 0) {
        return previous.filter((item) => item.type !== 'customs');
      }

      const customsIndex = previous.findIndex(
        (item) => item.type === 'customs',
      );

      if (customsIndex === -1) {
        return [
          {
            id: 'customs-product',
            name: 'محصول گمرک',
            value: customsVehiclePrice,
            type: 'customs',
            vehicleId: selectedVehicle.id,
          },
          ...previous,
        ];
      }

      const current = previous[customsIndex];

      if (
        current.vehicleId !== selectedVehicle.id ||
        Number(current.value) !== customsVehiclePrice
      ) {
        const updated = [...previous];

        updated[customsIndex] = {
          ...current,
          name: 'محصول گمرک',
          value: customsVehiclePrice,
          vehicleId: selectedVehicle.id,
        };

        return updated;
      }

      return previous;
    });
  }, [selectedVehicle, customsVehiclePrice]);

  const addCost = () => {
    setExtraCosts((previous) => [
      ...previous,
      {
        id: `${Date.now()}-${Math.random()}`,
        name: '',
        value: '',
        type: 'extra',
      },
    ]);
  };

  const removeCost = (id) => {
    const item = extraCosts.find((cost) => cost.id === id);

    if (
      item?.type === 'customs' &&
      typeof onRemoveVehicle === 'function'
    ) {
      onRemoveVehicle();
    }

    setExtraCosts((previous) =>
      previous.filter((cost) => cost.id !== id),
    );
  };

  const updateCost = (id, field, value) => {
    setExtraCosts((previous) =>
      previous.map((item) => {
        if (item.id !== id) return item;

        if (field === 'name') {
          return { ...item, name: value };
        }

        if (field === 'value') {
          return {
            ...item,
            value:
              value === ''
                ? ''
                : Math.max(0, Number(value) || 0),
          };
        }

        return { ...item, [field]: value };
      }),
    );
  };

  const extraTotal = useMemo(
    () =>
      extraCosts.reduce(
        (sum, item) => sum + Number(item.value || 0),
        0,
      ),
    [extraCosts],
  );

  // Bid and auction fee are counted only when the API
  // has successfully returned the fee for the current bid.
  const auctionTotal =
    bidNumber > 0 && auctionFeeStatus === 'success'
      ? bidNumber + Number(auctionFee)
      : null;

  const grandTotal =
    originalTotal !== null
      ? originalTotal +
        extraTotal +
        (auctionTotal !== null ? auctionTotal : 0)
      : null;

  const saveCalculation = () => {
    const calculation = {
      id: Date.now(),
      date: new Date().toISOString(),

      location: {
        state: location?.state || '',
        branch: location?.branch || '',
        city: location?.city || '',
      },

      port: {
        name: port?.name || '',
        route: routeId,
        routeTitle: routeInfo.title,
        ship: ship ?? null,
        herat: herat ?? null,
        total: originalTotal,
      },

      auction: {
        bidAmount: bidNumber,
        settings: auctionSettings,
        auctionFee:
          auctionFeeStatus === 'success' ? auctionFee : null,
        auctionTotal,
      },

      customsVehicle: selectedVehicle
        ? {
            id: selectedVehicle.id,
            name: selectedVehicle.name || '',
            year: selectedVehicle.year || '',
            price_afn: Number(selectedVehicle.price_afn || 0),
            price_usd: Number(selectedVehicle.price_usd || 0),
            dollar_rate: Number(selectedVehicle.dollar_rate || 0),
          }
        : null,

      extraCosts: extraCosts
        .filter(
          (item) =>
            item.name.trim() !== '' ||
            Number(item.value || 0) > 0,
        )
        .map((item) => ({
          name: item.name,
          value: Number(item.value || 0),
          type: item.type || 'extra',
        })),

      extraTotal,
      grandTotal,
    };

    try {
      const parsed = JSON.parse(
        localStorage.getItem('mtm_calculations') || '[]',
      );

      const oldCalculations = Array.isArray(parsed) ? parsed : [];

      localStorage.setItem(
        'mtm_calculations',
        JSON.stringify([calculation, ...oldCalculations]),
      );

      setSaved(true);
      window.setTimeout(() => setSaved(false), 2500);
    } catch (error) {
      console.error('ذخیره محاسبه موفق نشد:', error);
    }
  };

  return (
    <div className="calculator-overlay" onClick={onClose}>
      <section
        className="calculator"
        role="dialog"
        aria-modal="true"
        aria-labelledby="calculator-title"
        onClick={(event) => event.stopPropagation()}
      >
        <header className="calculator-header">
          <div className="calculator-header-info">
            <div className="calculator-title-icon">
              <FaCalculator />
            </div>

            <div className="calculator-heading-copy">
              <span className="calculator-eyebrow">
                MTM LOGISTICS
              </span>
              <h2 id="calculator-title">محاسبه هزینه موتر</h2>
              <p>
                {location?.city || 'موقعیت نامشخص'}
                {' ← '}
                {port?.name || 'پورت نامشخص'}
              </p>
            </div>
          </div>

          <button
            type="button"
            className="calculator-close"
            onClick={onClose}
            aria-label="بستن"
          >
            <FaTimes />
          </button>
        </header>

        <div className="calculator-content">
          <section className="calculator-route-banner">
            <div className="route-banner-icon">
              <FaMapMarkerAlt />
            </div>

            <div className="route-banner-copy">
              <span>مسیر انتخاب‌شده</span>
              <strong>{routeInfo.title}</strong>
            </div>

            <span className="route-country-badge">
              {routeInfo.flag} {routeInfo.title}
            </span>
          </section>

         

          {/* Shipping */}
          <section className="calculator-section">
            <div className="calculator-section-heading">
              <div>
                <h3>جزئیات هزینه انتقال</h3>
                <p>
                  هزینه‌ها بر اساس مسیر انتخاب‌شده محاسبه می‌شود.
                </p>
              </div>
              <span className="section-heading-icon">
                <FaShip />
              </span>
            </div>

            <div className="price-card">
              <div className="price-row">
                <div className="price-label">
                  <span className="price-icon">🚢</span>
                  <div>
                    <strong>{routeInfo.firstLabel}</strong>
                    <small>{routeInfo.firstRoute}</small>
                  </div>
                </div>

                <strong
                  className={`price-value ${
                    shipAvailable ? '' : 'price-unavailable'
                  }`}
                >
                  {shipAvailable
                    ? `$${formatPrice(ship)}`
                    : 'ناموجود'}
                </strong>
              </div>

              <div className="price-row">
                <div className="price-label">
                  <span className="price-icon">{routeInfo.flag}</span>
                  <div>
                    <strong>{routeInfo.secondLabel}</strong>
                    <small>{routeInfo.secondRoute}</small>
                  </div>
                </div>

                <strong
                  className={`price-value ${
                    heratAvailable ? '' : 'price-unavailable'
                  }`}
                >
                  {heratAvailable
                    ? `$${formatPrice(herat)}`
                    : 'ناموجود'}
                </strong>
              </div>
            </div>

            <div
              className={`base-total ${
                !totalAvailable ? 'total-unavailable' : ''
              }`}
            >
              <div>
                <span>مجموع هزینه انتقال</span>
                <small>
                  {totalAvailable
                    ? `مجموع مسیر ${routeInfo.title} الی هرات`
                    : 'به دلیل نبود نرخ یکی از بخش‌ها، مجموع قابل محاسبه نیست.'}
                </small>
              </div>

              <strong>
                {totalAvailable
                  ? `$${formatPrice(originalTotal)}`
                  : 'ناموجود'}
              </strong>
            </div>
          </section>

          {/* Extra costs */}
          <section className="calculator-section extra-section">
            <div className="calculator-section-heading">
              <div>
                <h3>مصارف اضافی</h3>
                <p>محصول گمرک و سایر هزینه‌ها را مدیریت کنید.</p>
              </div>

              <button
                type="button"
                className="add-cost-button"
                onClick={addCost}
              >
                <FaPlus /> <span>افزودن مصرف</span>
              </button>
            </div>

            {extraCosts.length === 0 ? (
              <div className="empty-costs">
                <span className="empty-costs-icon">＋</span>
                <p>تا هنوز مصرف اضافی اضافه نشده است.</p>
                <span>
                  برای افزودن هزینه جدید، روی «افزودن مصرف» کلیک کنید.
                </span>
              </div>
            ) : (
              <div className="extra-costs-list">
                {extraCosts.map((cost, index) => (
                  <div className="extra-cost" key={cost.id}>
                    <span className="extra-number">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <label className="extra-name-field">
                      <span>نام مصرف</span>
                      <input
                        type="text"
                        placeholder="نام مصرف"
                        value={cost.name}
                        onChange={(event) =>
                          updateCost(cost.id, 'name', event.target.value)
                        }
                      />
                    </label>

                    <label className="extra-price-field">
                      <span>قیمت (دالر)</span>
                      <div className="extra-price-input">
                        <span>$</span>
                        <input
                          type="number"
                          inputMode="decimal"
                          min="0"
                          placeholder="0"
                          value={cost.value === 0 ? '' : cost.value}
                          onChange={(event) =>
                            updateCost(cost.id, 'value', event.target.value)
                          }
                        />
                      </div>
                    </label>

                    <button
                      type="button"
                      className="remove-cost"
                      onClick={() => removeCost(cost.id)}
                      title={
                        cost.type === 'customs'
                          ? 'حذف محصول گمرک'
                          : 'حذف مصرف'
                      }
                      aria-label={
                        cost.type === 'customs'
                          ? 'حذف محصول گمرک'
                          : 'حذف مصرف'
                      }
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                ))}
              </div>
            )}

            <div className="extra-total">
              <span>مجموع مصارف اضافی</span>
              <strong>${formatPrice(extraTotal)}</strong>
            </div>
          </section>

          {/* Final total */}
          <section className="grand-total">
            <div className="grand-total-copy">
              <span>مجموع نهایی</span>
              <small>
                {`انتقال + مصارف اضافی${
                  bidNumber > 0
                    ? ' + قیمت بیت و فیس اکشن'
                    : ''
                }`}
              </small>
            </div>

            <strong>
              {grandTotal === null
                ? 'ناموجود'
                : `$${formatPrice(grandTotal)}`}
            </strong>
          </section>

 {/* Auction Fees API */}
          <section className="calculator-section auction-section">
            <div className="calculator-section-heading">
              <div>
                <h3>قیمت بیت و فیس اکشن</h3>
                <p>
                  مبلغ بیت را وارد کنید تا فیس اکشن به‌صورت خودکار
                  از API دریافت شود.
                </p>
              </div>
              <span className="section-heading-icon">🔨</span>
            </div>

            <div className="auction-fields">
              <label className="auction-field">
                <span>مبلغ بیت (دالر)</span>
                <div className="auction-input-wrap">
                  <span>$</span>
                  <input
                    type="number"
                    min="0"
                      step="50"
                    inputMode="decimal"
                    placeholder="مثلاً 2500"
                    value={bidAmount}
                    onChange={(event) => {
                      const value = event.target.value;

                      setBidAmount(
                        value === ''
                          ? ''
                          : Math.max(0, Number(value) || 0),
                      );
                    }}
                  />
                </div>
              </label>

              <label className="auction-field">
                <span>فیس اکشن (دالر)</span>
                <div className="auction-input-wrap auction-fee-display">
                  <span>$</span>
                  <input
                    type="text"
                    readOnly
                    value={
                      auctionFeeStatus === 'success'
                        ? formatPrice(auctionFee)
                        : auctionFeeStatus === 'loading' ||
                            auctionFeeStatus === 'retry'
                          ? 'در حال محاسبه...'
                          : auctionFeeStatus === 'error'
                            ? 'خطا'
                            : '—'
                    }
                    aria-label="فیس اکشن دریافت‌شده از API"
                  />
                  {auctionFeeStatus === 'loading' && (
                    <FaSyncAlt className="auction-loading-icon" />
                  )}
                </div>
              </label>
            </div>

            <div className="auction-settings">
              <label>
                <span>نوع اکشن</span>
                <select
                  value={auctionSettings.auction}
                  onChange={(event) =>
                    updateAuctionSetting('auction', event.target.value)
                  }
                >
                  <option value="copart">Copart</option>
                  <option value="iaai">IAAI</option>
                </select>
              </label>

              <label>
                <span>نوع بیت</span>
                <select
                  value={auctionSettings.bidType}
                  onChange={(event) =>
                    updateAuctionSetting('bidType', event.target.value)
                  }
                >
                  <option value="online">Online</option>
                  <option value="kiosk">Kiosk</option>
                  <option value="non-kiosk">Non-Kiosk</option>
                </select>
              </label>

              <label>
                <span>نوع پرداخت</span>
                <select
                  value={auctionSettings.bidPay}
                  onChange={(event) =>
                    updateAuctionSetting('bidPay', event.target.value)
                  }
                >
                  {auctionSettings.auction === 'copart' ? (
                    <>
                      <option value="unsecured">Unsecured</option>
                      <option value="secured">Secured</option>
                    </>
                  ) : (
                    <>
                      <option value="high">High</option>
                      <option value="standard">Standard</option>
                    </>
                  )}
                </select>
              </label>

              <label>
                <span>نوع موتر</span>
                <select
                  value={auctionSettings.bidVehicle}
                  onChange={(event) =>
                    updateAuctionSetting(
                      'bidVehicle',
                      event.target.value,
                    )
                  }
                >
                  {auctionSettings.auction === 'copart' ? (
                    <>
                      <option value="standard">Standard</option>
                      <option value="heavy">Heavy</option>
                      <option value="crashedToys">Crashed Toys</option>
                    </>
                  ) : (
                    <>
                      <option value="licensed">Licensed</option>
                      <option value="non-licensed">Non-Licensed</option>
                      <option value="recRides">Rec Rides</option>
                      <option value="heavy">Heavy</option>
                    </>
                  )}
                </select>
              </label>

              {auctionSettings.auction === 'copart' && (
                <label>
                  <span>حجم خرید (Volume)</span>
                  <select
                    value={auctionSettings.volume}
                    onChange={(event) =>
                      updateAuctionSetting('volume', event.target.value)
                    }
                  >
                    <option value="low">Low</option>
                    <option value="high">High</option>
                  </select>
                </label>
              )}
            </div>

            {auctionFeeStatus === 'loading' && (
              <p className="auction-status auction-status-loading">
                در حال دریافت فیس اکشن...
              </p>
            )}

            {auctionFeeStatus === 'error' && (
              <div className="auction-error">
                <p>{auctionFeeError}</p>
                <button
                  type="button"
                  onClick={retryAuctionFee}
                >
                  تلاش دوباره
                </button>
              </div>
            )}

            {auctionFeeStatus === 'success' && (
              <div className="auction-success">
                <span>مجموع قیمت بیت و فیس اکشن</span>
                <strong>${formatPrice(auctionTotal)}</strong>
              </div>
            )}

            {bidNumber > 0 && auctionFeeStatus !== 'success' && (
              <p className="auction-status">
                تا دریافت فیس اکشن، مجموع اکشن محاسبه نشده است.
              </p>
            )}
          </section>

          <footer className="calculator-actions">
            <button
              type="button"
              className={`save-calculation ${saved ? 'saved' : ''}`}
              onClick={saveCalculation}
              disabled={
                !totalAvailable ||
                (bidNumber > 0 && auctionFeeStatus !== 'success')
              }
            >
              {saved ? 'محاسبه ذخیره شد' : 'ذخیره محاسبه'}
            </button>

            {typeof onOpenVehicleRates === 'function' && (
              <button
                type="button"
                className="vehicle-rates-button"
                onClick={onOpenVehicleRates}
              >
                نرخ گمرک موتر
              </button>
            )}

            <button
              type="button"
              className="calculator-done"
              onClick={onClose}
            >
              بستن
            </button>
          </footer>
        </div>
      </section>
    </div>
  );
}
