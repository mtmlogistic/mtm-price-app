import React, { useMemo, useState } from 'react';
import { FaSearch, FaTimes, FaFileAlt, FaCheckCircle, FaExclamationTriangle, FaClock, FaDollarSign, FaShieldAlt } from 'react-icons/fa';

import titlesData from '../data/titlesData';
import './TitlesPage.css';

export default function TitlesPage({ onClose }) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');

  /* =========================================
     ALL TITLES
  ========================================= */

  const allTitles = useMemo(() => {
    const exportable = Array.isArray(titlesData?.exportable)
      ? titlesData.exportable.map((item) => ({
          ...item,
          exportable: true,
          permanentlyNotExportable: false,
        }))
      : [];

    const nonExportable = Array.isArray(titlesData?.nonExportable)
      ? titlesData.nonExportable.map((item) => ({
          ...item,
          exportable: false,
          permanentlyNotExportable: false,
        }))
      : [];

    const permanentlyNotExportable = Array.isArray(titlesData?.permanentlyNotExportable)
      ? titlesData.permanentlyNotExportable.map((item) => ({
          ...item,
          exportable: false,
          permanentlyNotExportable: true,
        }))
      : [];

    return [...exportable, ...nonExportable, ...permanentlyNotExportable];
  }, []);

  /* =========================================
     FILTER
  ========================================= */

  const filteredTitles = useMemo(() => {
    const value = search.trim().toLowerCase();

    return allTitles.filter((item) => {
      /* -------------------------------
         CATEGORY
      -------------------------------- */

      if (category === 'exportable' && !item.exportable) {
        return false;
      }

      if (category === 'nonExportable' && item.exportable) {
        return false;
      }

      /* -------------------------------
         SEARCH
      -------------------------------- */

      if (!value) {
        return true;
      }

      const searchableText = [item.titleEn, item.titleFa, item.description, item.code, item.state, item.id, item.title]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();

      return searchableText.includes(value);
    });
  }, [allTitles, search, category]);

  /* =========================================
     COUNTS
  ========================================= */

  const exportableCount = allTitles.filter((item) => item.exportable).length;

  const nonExportableCount = allTitles.filter((item) => !item.exportable).length;

  /* =========================================
     RENDER
  ========================================= */

  return (
    <div className="titles-page" dir="rtl">
      {/* =========================================
          HEADER
      ========================================= */}

      <header className="titles-page-header">
        <div className="titles-header-info">
          <div className="titles-header-icon">
            <FaFileAlt />
          </div>

          <div className="titles-header-text">
            <h1>تایتل‌های موتر</h1>

            <p>بررسی معلومات تایتل و شرایط صادرات موتر</p>
          </div>
        </div>

        {onClose && (
          <button type="button" className="titles-close-button" onClick={onClose} aria-label="بستن">
            <FaTimes />
          </button>
        )}
      </header>

      {/* =========================================
          SEARCH + FILTER
      ========================================= */}

      <section className="titles-controls">
        <div className="titles-search">
          {search && (
            <button type="button" className="titles-search-clear" onClick={() => setSearch('')} aria-label="پاک کردن جستجو">
              <FaTimes />
            </button>
          )}

          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="جستجوی تایتل، ایالت یا کد..."
            style={{
              direction: 'ltr',
              textAlign: 'left',
            }}
          />

          <FaSearch className="titles-search-icon" />
        </div>

        <div className="titles-filters">
          <button type="button" className={category === 'all' ? 'active' : ''} onClick={() => setCategory('all')}>
            همه
          </button>

          <button type="button" className={category === 'exportable' ? 'active' : ''} onClick={() => setCategory('exportable')}>
            قابل صادرات
          </button>

          <button type="button" className={category === 'nonExportable' ? 'active' : ''} onClick={() => setCategory('nonExportable')}>
            غیرقابل صادرات
          </button>
        </div>
      </section>

      {/* =========================================
          RESULT BAR
      ========================================= */}

      <div className="titles-result-bar">
        <span>
          تعداد تایتل‌ها:
          <strong>{filteredTitles.length}</strong>
        </span>

        <div className="titles-result-summary">
          <span>
            قابل صادرات:
            <strong>{exportableCount}</strong>
          </span>

          <span >
            غیرقابل صادرات:
            <strong>{nonExportableCount}</strong>
          </span>
        </div>
      </div>

      {/* =========================================
          CARDS
      ========================================= */}

      <main className="titles-grid">
        {filteredTitles.map((item, index) => {
          /* =====================================
             STATE CODE
          ===================================== */

          const stateCode = item.code || item.state || item.titleEn?.match(/^[A-Z]{2}/)?.[0] || '—';

          /* =====================================
             TITLES
          ===================================== */

          const titleEnglish = item.titleEn || item.title || 'Unknown Title';

          const titlePersian = item.titleFa || 'عنوان تایتل';

          /* =====================================
             TIMES
          ===================================== */

          const urgentTime = item.urgentTime || (item.exportable ? '—' : '۱ هفته');

          const normalTime = item.normalTime || (item.exportable ? '—' : '۳ تا ۴ هفته');

          /* =====================================
             PRICES
          ===================================== */

          const urgent = item.urgent ?? (item.exportable ? '$0' : '$450');

          const normal = item.normal ?? (item.exportable ? '$0' : '$350');

          /* =====================================
             PERMANENT STATUS
          ===================================== */

          const isPermanent = item.permanentlyNotExportable === true;

          /* =====================================
             CARD CLASS
          ===================================== */

          const cardClass = [
            'title-card',
            item.exportable ? 'title-card-exportable' : 'title-card-nonexportable',
            isPermanent ? 'title-card-permanent' : '',
          ]
            .filter(Boolean)
            .join(' ');

          return (
            <article key={`${item.exportable ? 'export' : 'non'}-${item.id}-${index}`} className={cardClass}>
              {/* =================================
                  TOP
              ================================= */}

              <div className="title-card-top">
                <div className="title-number">#{item.id}</div>

                {/* -------------------------------
                    PERMANENTLY NOT EXPORTABLE
                -------------------------------- */}

                {isPermanent ? (
                  <div className="title-status title-status-danger">
                    <div className="title-status-icon">
                      <FaExclamationTriangle />
                    </div>

                    <div className="title-status-content">
                      <strong>اصلاً قابل خروج نیست</strong>

                      <p>{item.description}</p>

                      <small>پرداخت مصرف اضافی باعث قابل صادرات شدن این سند نمی‌شود.</small>
                    </div>
                  </div>
                ) : item.exportable ? (
                  /* -------------------------------
                     EXPORTABLE
                  -------------------------------- */

                  <div className="title-status title-status-success">
                    <div className="title-status-icon">
                      <FaCheckCircle />
                    </div>

                    <div className="title-status-content">
                      <strong>قابل صادرات</strong>

                      <p>این تایتل در فهرست تایتل‌های قابل صادرات قرار دارد.</p>

                      {/* <small>معلومات اختصاصی این تایتل در بخش پایین نمایش داده شده است.</small> */}
                    </div>
                  </div>
                ) : (
                  /* -------------------------------
                     EXTRA COST
                  -------------------------------- */

                  <div className="title-status title-status-warning">
                    <div className="title-status-icon">
                      <FaDollarSign />
                    </div>

                    <div className="title-status-content">
                      <strong>دارای مصرف اضافی</strong>

                      <p>{item.description}</p>
                    </div>

                    <div className="title-prices">
                      <div className="title-price-item">
                        <span>عاجل</span>

                        <b>{urgent}</b>

                        <small>{urgentTime}</small>
                      </div>

                      <div className="title-price-item">
                        <span>عادی</span>

                        <b>{normal}</b>

                        <small>{normalTime}</small>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* =================================
                  STATE
              ================================= */}

              <div className="title-state-row">
                <span className="title-state-label">STATE</span>

                <span className="title-state-code">{stateCode}</span>
              </div>

              {/* =================================
                  ENGLISH + DARI TITLE
              ================================= */}

              <div className="title-card-name">
                <div className="title-english">{titleEnglish}</div>

                <h2>{titlePersian}</h2>
              </div>

              {/* =================================
                  TITLE INFORMATION
              ================================= */}

              <div
                className={`title-description ${
                  isPermanent ? 'title-description-danger' : item.exportable ? 'title-description-success' : 'title-description-warning'
                }`}
              >
                <div className="title-description-icon">
                  {isPermanent ? <FaExclamationTriangle /> : item.exportable ? <FaFileAlt /> : <FaDollarSign />}
                </div>

                <div className="title-description-content">
                  <strong>معلومات این تایتل</strong>

                  <p>{item.description || 'برای این تایتل معلومات ثبت نشده است.'}</p>
                </div>
              </div>

              {/* =================================
                  EXPORTABLE STATUS
              ================================= */}

              {item.exportable && (
                <div className="title-clear-status">
                  <div className="title-clear-icon">
                    <FaShieldAlt />
                  </div>

                  <div className="title-clear-content">
                    <strong>قابل صادرات — بدون مصرف اضافی</strong>

                    <span>این تایتل در فهرست تایتل‌های قابل صادرات قرار دارد و برای صادرات آن مصرف اضافی در نظر گرفته نشده است.</span>
                  </div>

                  <div className="title-clear-check">
                    <FaCheckCircle />
                  </div>
                </div>
              )}

              {/* =================================
                  PERMANENTLY NOT EXPORTABLE
              ================================= */}

              {isPermanent && (
                <div className="title-extra-cost title-permanent-warning">
                  <div className="title-extra-header">
                    <div className="title-extra-icon">
                      <FaExclamationTriangle />
                    </div>

                    <div>
                      <strong>غیرقابل خروج</strong>

                      <span>برای این تایتل هیچ مصرف پردازشی نمایش داده نمی‌شود؛ پرداخت مصرف نیز وضعیت آن را تغییر نمی‌دهد.</span>
                    </div>
                  </div>
                </div>
              )}

              {/* =================================
                  NORMAL NON EXPORTABLE
              ================================= */}

              {!item.exportable && !isPermanent && (
                <div className="title-extra-cost">
                  <div className="title-extra-header">
                    <div className="title-extra-icon">
                      <FaDollarSign />
                    </div>

                    <div>
                      <strong>دارای مصرف اضافی</strong>

                      <span>برای آماده‌سازی این تایتل مصرف جداگانه در نظر گرفته شده است.</span>
                    </div>
                  </div>

                  <div className="title-cost-options">
                    <div className="title-cost-box">
                      <span>
                        <FaClock />
                        عاجل
                      </span>

                      <strong>{urgentTime}</strong>

                      <b>{urgent}</b>
                    </div>

                    <div className="title-cost-box">
                      <span>
                        <FaClock />
                        عادی
                      </span>

                      <strong>{normalTime}</strong>

                      <b>{normal}</b>
                    </div>
                  </div>
                </div>
              )}

              {/* =================================
                  FOOTER
              ================================= */}

              <div className="title-card-footer">
                <span>
                  <FaFileAlt />
                  وضعیت سند
                </span>

                <span className="title-code">{stateCode}</span>
              </div>
            </article>
          );
        })}
      </main>

      {/* =========================================
          EMPTY
      ========================================= */}

      {filteredTitles.length === 0 && (
        <div className="titles-empty">
          <div className="titles-empty-icon">
            <FaSearch />
          </div>

          <h3>تایتلی پیدا نشد</h3>

          <p>نام تایتل، کد ایالت یا نوع سند را بررسی کنید.</p>

          <button
            type="button"
            onClick={() => {
              setSearch('');
              setCategory('all');
            }}
          >
            نمایش همه تایتل‌ها
          </button>
        </div>
      )}
    </div>
  );
}
