import { useEffect, useMemo, useState } from 'react';
import { FaCalculator, FaTimes, FaPlus, FaTrashAlt, FaSave, FaMapMarkerAlt, FaShip } from 'react-icons/fa';
import './Calculator.css';

const isValidPrice = (value) =>
  value !== null &&
  value !== undefined &&
  value !== '' &&
  Number.isFinite(Number(value)) &&
  Number(value) > 0;

const formatPrice = (value) =>
  Math.round(Number(value || 0)).toLocaleString('en-US');

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
      : isValidPrice(port?.shipping_to_uae) && !isValidPrice(port?.shipping_to_tr)
        ? 'uae'
        : 'tr';

  const routeInfo = routeId === 'uae'
    ? {
        title: 'امارات',
        firstLabel: 'انتقال الی امارات',
        firstRoute: 'USA / Canada  →  UAE',
        secondLabel: 'انتقال امارات الی هرات',
        secondRoute: 'UAE  →  Herat',
        rawShipping: port?.shipping_to_uae,
        rawHerat: shipping_rates_to_herat?.uae,
        flag: '🇦🇪',
      }
    : {
        title: 'ترکیه',
        firstLabel: 'انتقال الی ترکیه / مرسن',
        firstRoute: 'USA / Canada  →  Turkey',
        secondLabel: 'انتقال ترکیه الی هرات',
        secondRoute: 'Turkey  →  Herat',
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

  const customsVehiclePrice = Math.round(
    Number(selectedVehiclePriceUsd || selectedVehicle?.price_usd || 0),
  );

  const [extraCosts, setExtraCosts] = useState([]);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setExtraCosts((previous) => {
      if (!selectedVehicle || customsVehiclePrice <= 0) {
        return previous.filter((item) => item.type !== 'customs');
      }

      const customsIndex = previous.findIndex((item) => item.type === 'customs');
      if (customsIndex === -1) {
        return [{
          id: 'customs-product',
          name: 'محصول گمرک',
          value: customsVehiclePrice,
          type: 'customs',
          vehicleId: selectedVehicle.id,
        }, ...previous];
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
      { id: `${Date.now()}-${Math.random()}`, name: '', value: '', type: 'extra' },
    ]);
  };

  const removeCost = (id) => {
    const item = extraCosts.find((cost) => cost.id === id);
    if (item?.type === 'customs' && typeof onRemoveVehicle === 'function') {
      onRemoveVehicle();
    }
    setExtraCosts((previous) => previous.filter((cost) => cost.id !== id));
  };

  const updateCost = (id, field, value) => {
    setExtraCosts((previous) =>
      previous.map((item) => {
        if (item.id !== id) return item;
        if (field === 'name') return { ...item, name: value };
        if (field === 'value') {
          return { ...item, value: value === '' ? '' : Math.max(0, Number(value) || 0) };
        }
        return { ...item, [field]: value };
      }),
    );
  };

  const extraTotal = useMemo(
    () => extraCosts.reduce((sum, item) => sum + Number(item.value || 0), 0),
    [extraCosts],
  );
  const grandTotal = originalTotal === null ? null : originalTotal + extraTotal;

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
        .filter((item) => item.name.trim() !== '' || Number(item.value || 0) > 0)
        .map((item) => ({
          name: item.name,
          value: Number(item.value || 0),
          type: item.type || 'extra',
        })),
      extraTotal,
      grandTotal,
    };

    try {
      const parsed = JSON.parse(localStorage.getItem('mtm_calculations') || '[]');
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
            <div className="calculator-title-icon"><FaCalculator /></div>
            <div className="calculator-heading-copy">
              <span className="calculator-eyebrow">MTM LOGISTICS</span>
              <h2 id="calculator-title">محاسبه هزینه انتقال</h2>
              <p>{location?.city || 'موقعیت نامشخص'} <span>←</span> {port?.name || 'پورت نامشخص'}</p>
            </div>
          </div>
          <button type="button" className="calculator-close" onClick={onClose} aria-label="بستن">
            <FaTimes />
          </button>
        </header>

        <div className="calculator-content">
          <section className="calculator-route-banner">
            <div className="route-banner-icon"><FaMapMarkerAlt /></div>
            <div className="route-banner-copy">
              <span>مسیر انتخاب‌شده</span>
              <strong>{routeInfo.title}</strong>
            </div>
            <span className="route-country-badge">{routeInfo.flag} {routeInfo.title}</span>
          </section>

          <section className="calculator-location" aria-label="جزئیات موقعیت">
            <div className="location-item">
              <span>ایالت</span>
              <strong>{location?.state || '—'}</strong>
            </div>
            <div className="location-item">
              <span>برنچ</span>
              <strong>{location?.branch || '—'}</strong>
            </div>
            <div className="location-item">
              <span>شهر</span>
              <strong>{location?.city || '—'}</strong>
            </div>
          </section>

          <section className="calculator-section">
            <div className="calculator-section-heading">
              <div>
                <h3>جزئیات هزینه انتقال</h3>
                <p>هزینه‌ها بر اساس مسیر انتخاب‌شده محاسبه می‌شود.</p>
              </div>
              <span className="section-heading-icon"><FaShip /></span>
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
                <strong className={`price-value ${shipAvailable ? '' : 'price-unavailable'}`}>
                  {shipAvailable ? `$${formatPrice(ship)}` : 'ناموجود'}
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
                <strong className={`price-value ${heratAvailable ? '' : 'price-unavailable'}`}>
                  {heratAvailable ? `$${formatPrice(herat)}` : 'ناموجود'}
                </strong>
              </div>
            </div>

            <div className={`base-total ${!totalAvailable ? 'total-unavailable' : ''}`}>
              <div>
                <span>مجموع هزینه انتقال</span>
                <small>
                  {totalAvailable
                    ? `مجموع مسیر ${routeInfo.title} الی هرات`
                    : 'به دلیل نبود نرخ یکی از بخش‌ها، مجموع قابل محاسبه نیست.'}
                </small>
              </div>
              <strong>{totalAvailable ? `$${formatPrice(originalTotal)}` : 'ناموجود'}</strong>
            </div>
          </section>

          <section className="calculator-section extra-section">
            <div className="calculator-section-heading">
              <div>
                <h3>مصارف اضافی</h3>
                <p>محصول گمرک و سایر هزینه‌ها را مدیریت کنید.</p>
              </div>
              <button type="button" className="add-cost-button" onClick={addCost}>
                <FaPlus /> <span>افزودن مصرف</span>
              </button>
            </div>

            {extraCosts.length === 0 ? (
              <div className="empty-costs">
                <span className="empty-costs-icon">＋</span>
                <p>تا هنوز مصرف اضافی اضافه نشده است.</p>
                <span>برای افزودن هزینه جدید، روی «افزودن مصرف» کلیک کنید.</span>
              </div>
            ) : (
              <div className="extra-costs-list">
                {extraCosts.map((cost, index) => (
                  <div className="extra-cost" key={cost.id}>
                    <span className="extra-number">{String(index + 1).padStart(2, '0')}</span>
                    <label className="extra-name-field">
                      <span>نام مصرف</span>
                      <input
                        type="text"
                        placeholder="نام مصرف"
                        value={cost.name}
                        onChange={(event) => updateCost(cost.id, 'name', event.target.value)}
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
                          onChange={(event) => updateCost(cost.id, 'value', event.target.value)}
                        />
                      </div>
                    </label>
                    <button
                      type="button"
                      className="remove-cost"
                      onClick={() => removeCost(cost.id)}
                      title={cost.type === 'customs' ? 'حذف محصول گمرک' : 'حذف مصرف'}
                      aria-label={cost.type === 'customs' ? 'حذف محصول گمرک' : 'حذف مصرف'}
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

          <section className="grand-total">
            <div className="grand-total-copy">
              <span>مجموع نهایی</span>
              <small>هزینه انتقال + تمام مصارف اضافی</small>
            </div>
            <strong>{grandTotal === null ? 'ناموجود' : `$${formatPrice(grandTotal)}`}</strong>
          </section>

          <footer className="calculator-actions">
            {/* <button
              type="button"
              className={`save-calculation ${saved ? 'saved' : ''}`}
              onClick={saveCalculation}
              disabled={!totalAvailable}
            >
              <FaSave /> {saved ? 'محاسبه ذخیره شد' : 'ذخیره محاسبه'}
            </button>
            {typeof onOpenVehicleRates === 'function' && (
              <button type="button" className="vehicle-rates-button" onClick={onOpenVehicleRates}>
                نرخ گمرک موتر
              </button>
            )} */}
            <button type="button" className="calculator-done" onClick={onClose}>بستن</button>
          </footer>
        </div>
      </section>
    </div>
  );
}
