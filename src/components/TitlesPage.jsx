import React, { useMemo, useState, useRef } from 'react';
import { FaSearch, FaTimes, FaFileAlt, FaCheckCircle, FaExclamationTriangle, FaClock, FaDollarSign, FaShieldAlt } from 'react-icons/fa';

import titlesData from '../data/titlesData';
import './TitlesPage.css';

export default function TitlesPage({ onClose }) {

  const searchInputRef = useRef(null);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');

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

  const filteredTitles = useMemo(() => {
    const value = search.trim().toLowerCase();

    return allTitles.filter((item) => {
      if (category === 'exportable' && !item.exportable) return false;

      if (category === 'nonExportable' && (item.exportable || item.permanentlyNotExportable)) {
        return false;
      }

      if (category === 'permanent' && !item.permanentlyNotExportable) {
        return false;
      }

      if (!value) return true;

      const searchableText = [item.titleEn, item.titleFa, item.description, item.info, item.id].filter(Boolean).join(' ').toLowerCase();

      return searchableText.includes(value);
    });
  }, [allTitles, search, category]);

  const exportableCount = allTitles.filter((item) => item.exportable).length;
  const nonExportableCount = allTitles.filter((item) => !item.exportable && !item.permanentlyNotExportable).length;
  const permanentCount = allTitles.filter((item) => item.permanentlyNotExportable).length;

  const getDescription = (item) => item.info || item.description || 'برای این تایتل معلومات ثبت نشده است.';

  const clearFilters = () => {
    setSearch('');
    setCategory('all');
  };

  return (
    <div
      className="titles-page"
      dir="rtl"
      style={{
        paddingTop: '130px',
      }}
    >
      <header
        className="titles-page-header"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          zIndex: 99999,
        }}
      >
        <div className="titles-header-info">
          <div className="titles-header-icon">
            <FaFileAlt />
          </div>

          <div className="titles-header-text">
            <div className="titles-header-eyebrow">MTM TITLE DATABASE</div>
            <h1>معلومات تایتل‌ های موتر</h1>
            <p>معلومات انواع اسناد موتر و وضعیت آن‌ها برای صادرات</p>
          </div>
        </div>

        {onClose && (
          <button type="button" className="titles-close-button" onClick={onClose} aria-label="بستن" title="بستن">
            <FaTimes />
          </button>
        )}
      </header>

      <section className="titles-controls">
        <div className="titles-search">
          {search && (
            <button
              type="button"
              className="titles-search-clear"
              onClick={() => setSearch('')}
              aria-label="پاک کردن جستجو"
              title="پاک کردن"
            >
              <FaTimes />
            </button>
          )}
          <input
            ref={searchInputRef}
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="جستجوی نام تایتل یا نوع سند..."
            aria-label="جستجوی تایتل"
            enterKeyHint="search"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();

                setTimeout(() => {
                  e.currentTarget.blur();
                }, 50);
              }
            }}
          />
          <FaSearch className="titles-search-icon" />
        </div>

        <div className="titles-filters" role="tablist" aria-label="دسته‌بندی تایتل‌ها">
          <button type="button" className={category === 'all' ? 'active' : ''} onClick={() => setCategory('all')}>
            همه
          </button>

          <button type="button" className={category === 'exportable' ? 'active' : ''} onClick={() => setCategory('exportable')}>
            قابل صادرات
          </button>

          <button type="button" className={category === 'nonExportable' ? 'active' : ''} onClick={() => setCategory('nonExportable')}>
            مصرف اضافی
          </button>

          <button type="button" className={category === 'permanent' ? 'active' : ''} onClick={() => setCategory('permanent')}>
            غیرقابل خروج
          </button>
        </div>
      </section>

      <section className="titles-summary">
        <div className="titles-result-count">
          <span>نمایش</span>
          <strong>{filteredTitles.length}</strong>
          <span>نوع تایتل</span>
        </div>

        <div className="titles-summary-items">
          <div className="titles-summary-item summary-exportable">
            <span className="summary-dot" />
            <span>قابل صادرات</span>
            <strong>{exportableCount}</strong>
          </div>

          <div className="titles-summary-item summary-extra">
            <span className="summary-dot" />
            <span>مصرف اضافی</span>
            <strong>{nonExportableCount}</strong>
          </div>

          <div className="titles-summary-item summary-permanent">
            <span className="summary-dot" />
            <span>غیرقابل خروج</span>
            <strong>{permanentCount}</strong>
          </div>
        </div>
      </section>

      <main className="titles-grid">
        {filteredTitles.map((item, index) => {
          const isPermanent = item.permanentlyNotExportable === true;
          const isExportable = item.exportable === true;
          const description = getDescription(item);

          const urgentTime = item.urgentTime || (isExportable ? '—' : '۱ هفته');
          const normalTime = item.normalTime || (isExportable ? '—' : '۳ تا ۴ هفته');

          const urgent = item.urgent ?? (isExportable ? '$0' : '$450');
          const normal = item.normal ?? (isExportable ? '$0' : '$350');

          const cardClass = [
            'title-card',
            isExportable ? 'title-card-exportable' : isPermanent ? 'title-card-permanent' : 'title-card-nonexportable',
          ].join(' ');

          return (
            <article key={`${item.id}-${index}`} className={cardClass}>
              <div className="title-card-header">
                <div className="title-card-index">
                  <span>MTM</span>
                  <b>{String(item.id).padStart(2, '0')}</b>
                </div>

                <div
                  className={
                    isPermanent
                      ? 'title-badge title-badge-danger'
                      : isExportable
                        ? 'title-badge title-badge-success'
                        : 'title-badge title-badge-warning'
                  }
                >
                  {isPermanent ? (
                    <>
                      <FaExclamationTriangle />
                      <span>غیرقابل خروج</span>
                    </>
                  ) : isExportable ? (
                    <>
                      <FaCheckCircle />
                      <span>قابل صادرات</span>
                    </>
                  ) : (
                    <>
                      <FaDollarSign />
                      <span>مصرف اضافی</span>
                    </>
                  )}
                </div>
              </div>

              <div className="title-card-name">
                <div className="title-type-label">TITLE TYPE</div>
                <div className="title-english">{item.titleEn || 'UNKNOWN TITLE'}</div>
                <h2>{item.titleFa || 'عنوان تایتل'}</h2>
              </div>

              <div
                className={
                  isPermanent
                    ? 'title-description title-description-danger'
                    : isExportable
                      ? 'title-description title-description-success'
                      : 'title-description title-description-warning'
                }
              >
                <div className="title-description-icon">
                  {isPermanent ? <FaExclamationTriangle /> : isExportable ? <FaFileAlt /> : <FaDollarSign />}
                </div>

                <div className="title-description-content">
                  <strong>معلومات تایتل</strong>
                  <p>{description}</p>
                </div>
              </div>

              {isExportable && (
                <div className="title-clear-status">
                  <div className="title-clear-icon">
                    <FaShieldAlt />
                  </div>

                  <div className="title-clear-content">
                    <strong>قابل صادرات</strong>
                    <span>طبق دسته‌بندی فعلی MTM، برای این نوع تایتل مصرف اضافی در نظر گرفته نشده است.</span>
                  </div>

                  <FaCheckCircle className="title-clear-check" />
                </div>
              )}

              {!isExportable && !isPermanent && (
                <div className="title-extra-cost">
                  <div className="title-extra-header">
                    <div className="title-extra-icon">
                      <FaDollarSign />
                    </div>

                    <div>
                      <strong>نیازمند پروسه اضافی</strong>
                      <span>برای آماده‌سازی این نوع سند، هزینه و زمان پردازش جداگانه در نظر گرفته شده است.</span>
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

              {isPermanent && (
                <div className="title-permanent-box">
                  <div className="title-permanent-icon">
                    <FaExclamationTriangle />
                  </div>

                  <div>
                    <strong>این نوع سند قابل تبدیل نیست</strong>
                    <span>پرداخت هزینه اضافی وضعیت این سند را به تایتل قابل صادرات تبدیل نمی‌کند.</span>
                  </div>
                </div>
              )}

              <div className="title-card-footer">
                <span>
                  <FaFileAlt />
                  MTM TITLE DATABASE
                </span>
                <span className="title-card-number">#{String(item.id).padStart(2, '0')}</span>
              </div>
            </article>
          );
        })}
      </main>

      {filteredTitles.length === 0 && (
        <div className="titles-empty">
          <div className="titles-empty-icon">
            <FaSearch />
          </div>

          <h3>تایتلی پیدا نشد</h3>
          <p>نام انگلیسی، نام فارسی یا نوع سند را بررسی کنید.</p>

          <button type="button" onClick={clearFilters}>
            نمایش همه تایتل‌ها
          </button>
        </div>
      )}
    </div>
  );
}
