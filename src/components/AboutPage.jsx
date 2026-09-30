import React from 'react';
import {
  FaTimes,
  FaGlobeAmericas,
  FaCarSide,
  FaShip,
  FaFileAlt,
  FaShieldAlt,
  FaMapMarkerAlt,
  FaUsers,
  FaCheckCircle,
  FaTruck,
  FaWarehouse,
  FaBoxes,
  FaHandshake,
  FaBullseye,
  FaEye,
  FaStar,
  FaArrowLeft,
  FaGavel,
  FaRoute,
  FaDollarSign,
  FaClipboardCheck,
  FaCog,
  FaHeadset,
  FaBuilding,
} from 'react-icons/fa';

import './AboutPage.css';

export default function AboutPage({ onClose }) {
  return (
    <div
      className="about-page"
      dir="rtl"
      style={{
        paddingTop: '120px',
      }}
    >
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header
        className="about-header"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          zIndex: 99999,
        }}
      >
        <div className="about-header-brand">
          <div className="about-logo">
            <img src={`${import.meta.env.BASE_URL}LOGO.png`} alt="MTM" className="header-logo-image" />
          </div>

          <div className="about-header-text">
            <span className="about-header-label">MTM LOGISTIC SERVICES</span>

            <h1>درباره ما</h1>

            <p>خدمات خرید، انتقال، گمرک و تحویل موتر در مسیرهای بین‌المللی</p>
          </div>
        </div>

        {onClose && (
          <button type="button" className="about-close-button" onClick={onClose} aria-label="بستن" title="بستن">
            <FaTimes />
          </button>
        )}
      </header>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="about-hero">
        <div className="about-hero-content">
          <div className="about-badge">
            <FaGlobeAmericas />
            <span>خدمات بین‌المللی موتر و لوجستیک</span>
          </div>

          <h2>
            از <span>خریداری</span> تا
            <br />
            <span>تحویل نهایی</span> موتر
          </h2>

          <p>
            MTM Logistic Services مجموعه‌ای از خدمات خریداری، انتقال، صادرات، واردات، گمرک و تحویل موتر را ارائه می‌کند. مشتری می‌تواند تنها
            یک بخش از پروسه را به ما بسپارد یا تمام مراحل را به‌صورت کامل و Door-to-Door دریافت کند.
          </p>

          <div className="about-hero-actions">
            <div className="about-hero-feature">
              <FaGavel />
              <span>خرید از مزایده</span>
            </div>

            <div className="about-hero-feature">
              <FaShip />
              <span>انتقال بین‌المللی</span>
            </div>

            <div className="about-hero-feature">
              <FaShieldAlt />
              <span>خدمات مطمئن</span>
            </div>

            <div className="about-hero-feature">
              <FaTruck />
              <span>تحویل نهایی</span>
            </div>
          </div>
        </div>

        {/* ROUTE CARD */}

        <div className="about-route-card">
          <div className="route-card-title">
            <span>شبکه مسیرهای خدمات</span>
            <FaGlobeAmericas />
          </div>

          <div className="route-line">
            <div className="route-point">
              <div className="route-icon usa">🇺🇸</div>

              <strong>امریکا</strong>
              <small>مزایده و خریداری</small>
            </div>

            <div className="route-connector">
              <span />
              <FaShip />
              <span />
            </div>

            <div className="route-point">
              <div className="route-icon canada">🇨🇦</div>

              <strong>کانادا</strong>
              <small>خرید و انتقال</small>
            </div>

            <div className="route-connector">
              <span />
              <FaShip />
              <span />
            </div>

            <div className="route-point">
              <div className="route-icon uae">🇦🇪</div>

              <strong>امارات</strong>
              <small>بازار و انتقال</small>
            </div>

            <div className="route-connector">
              <span />
              <FaTruck className="truck-reverse" />
              <span />
            </div>

            <div className="route-point">
              <div className="route-icon af">🇦🇫</div>

              <strong>افغانستان</strong>
              <small>گمرک و تحویل</small>
            </div>
          </div>

          <div className="route-extra-countries">
            <span> 🌍 سایر مسیرها </span>
            <span> 🇹🇷 ترکیه </span>
            <span> 🇨🇳 چین </span>
          </div>
        </div>
      </section>

      {/* =====================================================
          STATS
      ===================================================== */}

      <section className="about-stats">
        <div className="about-stat">
          <div className="about-stat-icon blue">
            <FaUsers />
          </div>

          <div>
            <strong>400+</strong>
            <span>مشتریان</span>
          </div>
        </div>

        <div className="about-stat">
          <div className="about-stat-icon green">
            <FaMapMarkerAlt />
          </div>

          <div>
            <strong>02+</strong>
            <span>شعبه</span>
          </div>
        </div>

        <div className="about-stat">
          <div className="about-stat-icon orange">
            <FaCarSide />
          </div>

          <div>
            <strong>700+</strong>
            <span>موتر انتقال‌شده</span>
          </div>
        </div>

        <div className="about-stat">
          <div className="about-stat-icon purple">
            <FaGlobeAmericas />
          </div>

          <div>
            <strong>International</strong>
            <span>خدمات بین‌المللی</span>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHO WE ARE
      ===================================================== */}

      <section className="about-section about-who-section">
        <div className="about-section-heading">
          <span className="about-section-number">01</span>

          <div>
            <span>WHO WE ARE</span>
            <h2>ما کی هستیم؟</h2>
          </div>
        </div>

        <div className="about-who-modern">
          {/* MAIN INTRO CARD */}
          <div className="about-who-main-card">
            <div className="about-who-top">
              <div className="about-who-icon">
                <FaHandshake />
              </div>

              <div>
                <span className="about-who-eyebrow">MTM LOGISTIC SERVICES</span>

                <h3>یک مجموعه برای مدیریت مسیر موتر شما</h3>
              </div>
            </div>

            <div className="about-who-content">
              <p>
                MTM Logistic Services یک مجموعه خدمات لوجستیکی و موتر است که در بخش خریداری، انتقال، صادرات، واردات، گمرک و تحویل موتر
                فعالیت دارد.
              </p>

              <p>
                ما می‌توانیم موتر را برای مشتری از مزایده‌ها و بازارهای بین‌المللی خریداری کرده، مراحل انتقال آن را مدیریت کنیم و در صورت
                نیاز، پروسه را تا گمرک و تحویل نهایی در افغانستان ادامه دهیم.
              </p>

              <p>مشتری می‌تواند تنها قسمت مورد نیاز خود را انتخاب کند یا تمام پروسه را از خرید تا تحویل نهایی به MTM بسپارد.</p>
            </div>

            {/* SERVICE MODE */}
            <div className="about-service-mode-modern">
              <div className="service-mode-card">
                <div className="service-mode-icon">
                  <FaRoute />
                </div>

                <div>
                  <strong>خدمات نیمه‌راه</strong>
                  <span>فقط بخش مورد نیاز مشتری</span>
                </div>
              </div>

              <div className="service-mode-card service-mode-primary">
                <div className="service-mode-icon">
                  <FaHandshake />
                </div>

                <div>
                  <strong>خدمات کامل</strong>
                  <span>پروسه کامل Door-to-Door</span>
                </div>
              </div>
            </div>
          </div>

          {/* SERVICES */}
          <div className="about-services-modern">
            <div className="services-modern-heading">
              <span>WHAT WE DO</span>
              <h3>خدمات اصلی ما</h3>
            </div>

            <div className="modern-service-grid">
              <div className="modern-service-card">
                <div className="modern-service-icon">
                  <FaGavel />
                </div>

                <div>
                  <strong>خرید از مزایده‌ها</strong>
                  <span>Copart، IAAI، Manheim و ADESA</span>
                </div>
              </div>

              <div className="modern-service-card">
                <div className="modern-service-icon">
                  <FaCarSide />
                </div>

                <div>
                  <strong>خریداری موتر</strong>
                  <span>امریکا، کانادا، امارات متحده عربی، چین و بازارهای مورد نیاز مشتری</span>
                </div>
              </div>

              <div className="modern-service-card">
                <div className="modern-service-icon">
                  <FaShip />
                </div>

                <div>
                  <strong>انتقال بین‌المللی</strong>
                  <span>امریکا، کانادا، امارات، ترکیه و چین</span>
                </div>
              </div>

              <div className="modern-service-card">
                <div className="modern-service-icon">
                  <FaFileAlt />
                </div>

                <div>
                  <strong>اسناد و گمرک</strong>
                  <span>هماهنگی و پروسس امور گمرکی موتر</span>
                </div>
              </div>

              <div className="modern-service-card">
                <div className="modern-service-icon">
                  <FaTruck />
                </div>

                <div>
                  <strong>انتقال داخلی افغانستان</strong>
                  <span>از هرات تا شهرهای مختلف افغانستان</span>
                </div>
              </div>

              <div className="modern-service-card">
                <div className="modern-service-icon">
                  <FaDollarSign />
                </div>

                <div>
                  <strong>خرید و فروش موتر مشتری</strong>
                  <span>خرید و فروش در مزایده‌های امریکا و امارات</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
    02 — MISSION / VISION
===================================================== */}

      <section className="about-section premium-section">
        <div className="about-section-heading premium-heading">
          <span className="about-section-number">02</span>

          <div>
            <span>OUR DIRECTION</span>
            <h2>مأموریت و دیدگاه ما</h2>
          </div>
        </div>

        <div className="premium-mission-grid">
          <article className="premium-mission-card mission-blue">
            <div className="premium-card-glow"></div>

            <div className="premium-card-top">
              <div className="premium-icon-box">
                <FaBullseye />
              </div>

              <span className="premium-card-number">01</span>
            </div>

            <div className="premium-card-label">OUR MISSION</div>

            <h3>مأموریت ما</h3>

            <p>ساده‌سازی پروسه خرید و انتقال موتر برای مشتریان؛ از پیدا کردن و خریداری موتر گرفته تا انتقال، اسناد، گمرک و تحویل نهایی.</p>

            <p>هدف ما این است که مشتری بتواند متناسب با نیاز خود، از یک خدمت مشخص یا از یک راه‌حل کامل و Door-to-Door استفاده کند.</p>

            <div className="premium-card-line"></div>

            <div className="premium-card-footer">
              <span>MTM LOGISTIC SERVICES</span>
              <FaArrowLeft />
            </div>
          </article>

          <article className="premium-mission-card mission-purple">
            <div className="premium-card-glow"></div>

            <div className="premium-card-top">
              <div className="premium-icon-box">
                <FaEye />
              </div>

              <span className="premium-card-number">02</span>
            </div>

            <div className="premium-card-label">OUR VISION</div>

            <h3>دیدگاه ما</h3>

            <p>
              ایجاد یک شبکه قابل اعتماد برای خریداری و انتقال موتر میان بازارهای بین‌المللی و افغانستان و فراهم‌کردن خدمات منظم و قابل دسترس
              برای مشتریان.
            </p>

            <p>ما تلاش می‌کنیم خدمات خود را از مرحله خرید تا تحویل نهایی به یک تجربه ساده و منظم برای مشتری تبدیل کنیم.</p>

            <div className="premium-card-line"></div>

            <div className="premium-card-footer">
              <span>MTM LOGISTIC SERVICES</span>
              <FaArrowLeft />
            </div>
          </article>
        </div>
      </section>

      {/* =====================================================
    03 — SERVICES & CAPABILITIES
===================================================== */}

      <section className="about-section premium-section">
        <div className="about-section-heading premium-heading">
          <span className="about-section-number">03</span>

          <div>
            <span>OUR SERVICES & CAPABILITIES</span>
            <h2>خدمات و قابلیت‌های MTM</h2>
          </div>
        </div>

        <div className="premium-intro-card">
          <div className="premium-intro-icon">
            <FaGlobeAmericas />
          </div>

          <div className="premium-intro-content">
            <span>END-TO-END LOGISTICS</span>

            <h3>از خرید تا تحویل؛ یک مجموعه کامل لوجستیکی</h3>

            <p>
              MTM می‌تواند تنها یک مرحله از پروسه را انجام دهد یا تمام مراحل را برای مشتری مدیریت کند؛ از خریداری موتر در مزایده و بازارهای
              بین‌المللی تا انتقال، اسناد، گمرک و تحویل نهایی در افغانستان.
            </p>
          </div>

          <div className="premium-intro-badge">
            <span>MTM</span>
            <small>LOGISTICS</small>
          </div>
        </div>

        <div className="premium-services-grid">
          {/* 01 */}
          <article className="premium-service-card featured">
            <div className="service-card-top">
              <div className="premium-service-icon">
                <FaGavel />
              </div>

              <span className="service-index">01</span>
            </div>

            <div className="service-card-label">AUCTION SERVICES</div>

            <h3>خریداری از مزایده‌های بین‌المللی</h3>

            <p>خریداری موتر برای مشتریان از مزایده‌ها و بازارهای معتبر موتر.</p>

            <div className="premium-tags">
              <span>Copart</span>
              <span>IAAI</span>
              <span>Manheim</span>
              <span>ADESA</span>
            </div>
          </article>

          {/* 02 */}
          <article className="premium-service-card">
            <div className="service-card-top">
              <div className="premium-service-icon">
                <FaCarSide />
              </div>

              <span className="service-index">02</span>
            </div>

            <div className="service-card-label">VEHICLE SOURCING</div>

            <h3>خریداری موتر از امریکا و چین</h3>

            <p>پیدا کردن، خریداری و هماهنگی مراحل انتقال موتر از بازارهای امریکا و چین مطابق نیاز مشتری.</p>
          </article>

          {/* 03 */}
          <article className="premium-service-card">
            <div className="service-card-top">
              <div className="premium-service-icon">
                <FaShip />
              </div>

              <span className="service-index">03</span>
            </div>

            <div className="service-card-label">INTERNATIONAL SHIPPING</div>

            <h3>انتقال بین‌المللی موتر</h3>

            <p>هماهنگی انتقال موتر از مسیرهای بین‌المللی مختلف و مدیریت مراحل انتقال تا مقصد.</p>

            <div className="premium-tags">
              <span>امریکا</span>
              <span>کانادا</span>
              <span>امارات</span>
              <span>ترکیه</span>
              <span>چین</span>
            </div>
          </article>

          {/* 04 */}
          <article className="premium-service-card">
            <div className="service-card-top">
              <div className="premium-service-icon">
                <FaClipboardCheck />
              </div>

              <span className="service-index">04</span>
            </div>

            <div className="service-card-label">CUSTOMS</div>

            <h3>پروسس گمرکی موتر</h3>

            <p>هماهنگی و پیگیری مراحل گمرکی موتر و اسناد مربوط به آن تا تکمیل پروسه.</p>

            <div className="service-location">
              <FaMapMarkerAlt />
              <span>اسلام‌قلعه</span>
            </div>
          </article>

          {/* 05 */}
          <article className="premium-service-card wide">
            <div className="service-card-top">
              <div className="premium-service-icon">
                <FaTruck />
              </div>

              <span className="service-index">05</span>
            </div>

            <div className="service-card-label">AFGHANISTAN DELIVERY</div>

            <h3>انتقال داخلی در افغانستان</h3>

            <p>بعد از رسیدن موتر به افغانستان، امکان هماهنگی انتقال آن از هرات به شهرهای مختلف کشور وجود دارد.</p>

            <div className="destination-pills">
              <span>هرات</span>
              <span>کابل</span>
              <span>قندهار</span>
              <span>غزنی</span>
              <span>جلال‌آباد</span>
              <span>بلخ</span>
            </div>
          </article>

          {/* 06 */}
          <article className="premium-service-card">
            <div className="service-card-top">
              <div className="premium-service-icon">
                <FaWarehouse />
              </div>

              <span className="service-index">06</span>
            </div>

            <div className="service-card-label">STORAGE</div>

            <h3>گدام و نگهداری</h3>

            <p>هماهنگی نگهداری و مدیریت موتر و بار در مراحل مختلف انتقال.</p>
          </article>

          {/* 07 */}
          {/* <article className="premium-service-card">
            <div className="service-card-top">
              <div className="premium-service-icon">
                <FaBoxes />
              </div>

              <span className="service-index">07</span>
            </div>

            <div className="service-card-label">COMMERCIAL CARGO</div>

            <h3>بار تجارتی و وسایل سنگین</h3>

            <p>خدمات لوجستیکی برای بارهای تجارتی، وسایل سنگین و محموله‌های مورد نیاز مشتریان.</p>
          </article> */}

          {/* 08 */}
          <article className="premium-service-card featured">
            <div className="service-card-top">
              <div className="premium-service-icon">
                <FaDollarSign />
              </div>

              <span className="service-index">08</span>
            </div>

            <div className="service-card-label">VEHICLE SALES</div>

            <h3>خرید و فروش موتر مشتری</h3>

            <p>خریداری و فروش موتر مشتری در مزایده‌ها و بازارهای مربوط به امریکا و امارات، همراه با هماهنگی مراحل معامله و انتقال.</p>

            <div className="premium-tags">
              <span>مزایده امریکا</span>
              <span>بازار امارات</span>
            </div>
          </article>

          {/* 09 */}
          <article className="premium-service-card">
            <div className="service-card-top">
              <div className="premium-service-icon">
                <FaHeadset />
              </div>

              <span className="service-index">09</span>
            </div>

            <div className="service-card-label">CUSTOMER SUPPORT</div>

            <h3>هماهنگی و پشتیبانی</h3>

            <p>ارتباط با مشتری و پیگیری مراحل مختلف پروسه تا رسیدن موتر به مقصد.</p>
          </article>
        </div>
      </section>

      {/* =====================================================
    04 — SERVICE OPTIONS
===================================================== */}

      <section className="about-section premium-section">
        <div className="about-section-heading premium-heading">
          <span className="about-section-number">04</span>

          <div>
            <span>SERVICE OPTIONS</span>
            <h2>خدمات را مطابق نیاز خود انتخاب کنید</h2>
          </div>
        </div>

        <div className="premium-service-options">
          <article className="premium-option-card">
            <div className="option-number">01</div>

            <div className="option-icon">
              <FaRoute />
            </div>

            <span className="option-label">PARTIAL SERVICE</span>

            <h3>خدمات نیمه‌راه</h3>

            <p>اگر مشتری تنها به یک قسمت از پروسه نیاز داشته باشد، می‌تواند همان بخش را به MTM بسپارد.</p>

            <div className="option-list">
              <span>
                <b>01</b> خریداری موتر
              </span>
              <span>
                <b>02</b> انتقال بین‌المللی
              </span>
              <span>
                <b>03</b> اسناد
              </span>
              <span>
                <b>04</b> گمرک
              </span>
              <span>
                <b>05</b> انتقال داخلی
              </span>
            </div>
          </article>

          <article className="premium-option-card option-main">
            <div className="option-badge">COMPLETE SOLUTION</div>

            <div className="option-number">02</div>

            <div className="option-icon">
              <FaHandshake />
            </div>

            <span className="option-label">FULL SERVICE</span>

            <h3>خدمات کامل / Door-to-Door</h3>

            <p>تمام پروسه از خریداری موتر تا انتقال، اسناد، گمرک و تحویل نهایی در مقصد مورد نظر مشتری توسط MTM هماهنگ و مدیریت می‌شود.</p>

            <div className="option-list">
              <span>
                <b>01</b> خریداری
              </span>
              <span>
                <b>02</b> انتقال
              </span>
              <span>
                <b>03</b> اسناد
              </span>
              <span>
                <b>04</b> گمرک
              </span>
              <span>
                <b>05</b> تحویل نهایی
              </span>
            </div>
          </article>
        </div>
      </section>

      {/* =====================================================
    05 — WHO WE SERVE
===================================================== */}

      <section className="about-section premium-section">
        <div className="about-section-heading premium-heading">
          <span className="about-section-number">05</span>

          <div>
            <span>WHO WE SERVE</span>
            <h2>برای چه کسانی خدمات ارائه می‌کنیم؟</h2>
          </div>
        </div>

        <div className="premium-client-grid">
          <div className="premium-client-card">
            <span>01</span>
            <FaCarSide />
            <strong>خریداران موتر</strong>
            <small>Vehicle Buyers</small>
          </div>

          <div className="premium-client-card">
            <span>02</span>
            <FaGavel />
            <strong>خریداران مزایده</strong>
            <small>Auction Buyers</small>
          </div>

          <div className="premium-client-card">
            <span>03</span>
            <FaHandshake />
            <strong>موتر فروشان</strong>
            <small>Auto Dealers</small>
          </div>

          <div className="premium-client-card">
            <span>04</span>
            <FaGlobeAmericas />
            <strong>صادرکنندگان و واردکنندگان</strong>
            <small>Import & Export</small>
          </div>

          <div className="premium-client-card">
            <span>05</span>
            <FaTruck />
            <strong>شرکت‌های حمل‌ونقل</strong>
            <small>Transport Companies</small>
          </div>

          <div className="premium-client-card">
            <span>06</span>
            <FaBoxes />
            <strong>شرکت‌های تجارتی</strong>
            <small>Commercial Businesses</small>
          </div>

          {/* <div className="premium-client-card">
            <span>07</span>
            <FaWarehouse />
            <strong>خریداران وسایل سنگین</strong>
            <small>Heavy Equipment Buyers</small>
          </div> */}

          <div className="premium-client-card">
            <span>08</span>
            <FaUsers />
            <strong>مشتریان شخصی</strong>
            <small>Private Customers</small>
          </div>

          <div className="premium-client-card">
            <span>09</span>
            <FaBuilding />
            <strong>شرکت‌ها و سازمان‌ها</strong>
            <small>Organizations</small>
          </div>
        </div>
      </section>

      {/* =====================================================
    06 — PROCESS
===================================================== */}

      <section className="about-section premium-section">
        <div className="about-section-heading premium-heading">
          <span className="about-section-number">06</span>

          <div>
            <span>HOW IT WORKS</span>
            <h2>یک پروسه، از خرید تا تحویل</h2>
          </div>
        </div>

        <div className="premium-process">
          <div className="process-line"></div>

          <div className="premium-process-item">
            <span className="process-number">01</span>
            <div className="process-icon">
              <FaGavel />
            </div>
            <strong>خریداری</strong>
            <small>مزایده یا بازار</small>
          </div>

          <div className="premium-process-item">
            <span className="process-number">02</span>
            <div className="process-icon">
              <FaClipboardCheck />
            </div>
            <strong>اسناد</strong>
            <small>بررسی و آماده‌سازی</small>
          </div>

          <div className="premium-process-item">
            <span className="process-number">03</span>
            <div className="process-icon">
              <FaTruck />
            </div>
            <strong>انتقال</strong>
            <small>حمل داخل کشور مبدا</small>
          </div>

          <div className="premium-process-item">
            <span className="process-number">04</span>
            <div className="process-icon">
              <FaShip />
            </div>
            <strong>حمل بین‌المللی</strong>
            <small>انتقال به مقصد</small>
          </div>

          <div className="premium-process-item">
            <span className="process-number">05</span>
            <div className="process-icon">
              <FaFileAlt />
            </div>
            <strong>گمرک</strong>
            <small>پروسس اسناد</small>
          </div>

          <div className="premium-process-item">
            <span className="process-number">06</span>
            <div className="process-icon">
              <FaTruck />
            </div>
            <strong>تحویل</strong>
            <small>انتقال تا مقصد نهایی</small>
          </div>
        </div>
      </section>

      {/* =====================================================
    VALUES
===================================================== */}

      <section className="premium-values">
        <div className="premium-value-card">
          <div className="value-icon">
            <FaShieldAlt />
          </div>

          <div>
            <span>01</span>
            <strong>امنیت</strong>
            <p>مراقبت از موتر و اسناد در مراحل مختلف</p>
          </div>
        </div>

        <div className="premium-value-card">
          <div className="value-icon">
            <FaCheckCircle />
          </div>

          <div>
            <span>02</span>
            <strong>شفافیت</strong>
            <p>اطلاعات روشن و پیگیری منظم پروسه</p>
          </div>
        </div>

        <div className="premium-value-card">
          <div className="value-icon">
            <FaStar />
          </div>

          <div>
            <span>03</span>
            <strong>خدمات مشتری</strong>
            <p>ارتباط و پشتیبانی در مراحل انتقال</p>
          </div>
        </div>
      </section>

      {/* =====================================================
    CTA
===================================================== */}

      <section className="premium-cta">
        <div className="cta-pattern"></div>

        <div className="cta-content">
          <span className="cta-label">MTM LOGISTIC SERVICES</span>

          <h2>
            هر مرحله‌ای که نیاز دارید،
            <br />
            <strong>ما می‌توانیم انجام دهیم.</strong>
          </h2>

          <p>
            از خریداری موتر در مزایده‌های بین‌المللی تا انتقال، گمرک و تحویل نهایی در افغانستان؛ خدمات MTM را می‌توانید به‌صورت نیمه‌راه یا
            کامل دریافت کنید.
          </p>
        </div>

        <div className="cta-arrow">
          <FaArrowLeft />
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="about-footer">
        <strong>MTM Logistic Services</strong>

        <span>خدمات خرید، انتقال، گمرک و تحویل موتر با سرعت، دقت و شفافیت</span>

        <small>12th Street, Qala e Fatullah Kabul, AF</small>

        <small>+93 77 410 6040</small>

        <small>Support@mtmGL.com</small>
      </footer>
    </div>
  );
}
