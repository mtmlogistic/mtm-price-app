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
    <div className="about-page" dir="rtl">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="about-header">
        <div className="about-header-brand">
          <div className="about-logo">
            <span>MTM</span>
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
              <FaTruck />
              <span />
            </div>

            <div className="route-point">
              <div className="route-icon af">🇦🇫</div>

              <strong>افغانستان</strong>
              <small>گمرک و تحویل</small>
            </div>
          </div>

          <div className="route-extra-countries">
            <span>🇹🇷 ترکیه</span>
            <span>🇨🇳 چین</span>
            <span>🌍 سایر مسیرها</span>
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
            <strong>200+</strong>
            <span>مشتریان</span>
          </div>
        </div>

        <div className="about-stat">
          <div className="about-stat-icon green">
            <FaMapMarkerAlt />
          </div>

          <div>
            <strong>03+</strong>
            <span>شعبه</span>
          </div>
        </div>

        <div className="about-stat">
          <div className="about-stat-icon orange">
            <FaCarSide />
          </div>

          <div>
            <strong>4000+</strong>
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

      <section className="about-section">
        <div className="about-section-heading">
          <span className="about-section-number">01</span>

          <div>
            <span>WHO WE ARE</span>
            <h2>ما کی هستیم؟</h2>
          </div>
        </div>

        <div className="about-who-grid">
          <div className="about-text-card">
            <div className="about-card-icon">
              <FaHandshake />
            </div>

            <h3>MTM Logistic Services</h3>

            <p>
              MTM Logistic Services یک مجموعه خدمات لوجستیکی و موتر است که در بخش خریداری، انتقال، صادرات، واردات، گمرک و تحویل موتر فعالیت
              دارد.
            </p>

            <p>
              ما می‌توانیم موتر را برای مشتری از مزایده‌ها و بازارهای بین‌المللی خریداری کرده، مراحل انتقال آن را مدیریت کنیم و در صورت
              نیاز، پروسه را تا گمرک و تحویل نهایی در افغانستان ادامه دهیم.
            </p>

            <p>
              خدمات MTM محدود به یک مسیر یا یک مرحله نیست. مشتری می‌تواند تنها قسمت مورد نیاز خود را انتخاب کند یا تمام پروسه را از خرید تا
              تحویل نهایی به MTM بسپارد.
            </p>

            <div className="about-service-mode">
              <div>
                <FaRoute />
                <strong>خدمات نیمه‌راه </strong>
                <span> فقط بخش مورد نیاز مشتری </span>
              </div>

              <div>
                <FaHandshake />
                <strong>خدمات کامل </strong>
                <span> پروسه کامل Door-to-Door </span>
              </div>
            </div>
          </div>

          <div className="about-services-mini">
            <div className="mini-service">
              <FaGavel />

              <div>
                <strong> خرید از مزایده‌ها </strong>
                <span>Copart، IAAI، Manheim و ADESA</span>
              </div>
            </div>

            <div className="mini-service">
              <FaCarSide />

              <div>
                <strong> خریداری موتر </strong>
                <span>امریکا، چین و بازارهای مورد نیاز مشتری</span>
              </div>
            </div>

            <div className="mini-service">
              <FaShip />

              <div>
                <strong>انتقال بین‌المللی </strong>
                <span>امریکا، کانادا، امارات، ترکیه و چین</span>
              </div>
            </div>

            <div className="mini-service">
              <FaFileAlt />

              <div>
                <strong>اسناد و گمرک </strong>
                <span>هماهنگی و پروسس امور گمرکی موتر</span>
              </div>
            </div>

            <div className="mini-service">
              <FaTruck />

              <div>
                <strong>انتقال داخلی افغانستان </strong>
                <span>از هرات تا شهرهای مختلف افغانستان</span>
              </div>
            </div>

            <div className="mini-service">
              <FaDollarSign />

              <div>
                <strong>خرید و فروش موتر مشتری </strong>
                <span>خرید و فروش در مزایده‌های امریکا و امارات</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MISSION / VISION
      ===================================================== */}

      <section className="about-section">
        <div className="about-section-heading">
          <span className="about-section-number">02</span>

          <div>
            <span>OUR DIRECTION</span>
            <h2>مأموریت و دیدگاه ما</h2>
          </div>
        </div>

        <div className="about-mission-grid">
          <div className="mission-card mission-card-blue">
            <div className="mission-icon">
              <FaBullseye />
            </div>

            <div>
              <span>OUR MISSION</span>

              <h3>مأموریت ما</h3>

              <p>
                ساده‌سازی پروسه خرید و انتقال موتر برای مشتریان؛ از پیدا کردن و خریداری موتر گرفته تا انتقال، اسناد، گمرک و تحویل نهایی.
              </p>

              <p>هدف ما این است که مشتری بتواند متناسب با نیاز خود، از یک خدمت مشخص یا از یک راه‌حل کامل و Door-to-Door استفاده کند.</p>
            </div>
          </div>

          <div className="mission-card mission-card-purple">
            <div className="mission-icon">
              <FaEye />
            </div>

            <div>
              <span>OUR VISION</span>

              <h3>دیدگاه ما</h3>

              <p>
                ایجاد یک شبکه قابل اعتماد برای خریداری و انتقال موتر میان بازارهای بین‌المللی و افغانستان و فراهم‌کردن خدمات منظم و قابل
                دسترس برای مشتریان.
              </p>

              <p>ما تلاش می‌کنیم خدمات خود را از مرحله خرید تا تحویل نهایی به یک تجربه ساده و منظم برای مشتری تبدیل کنیم.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES & CAPABILITIES
      ===================================================== */}

      <section className="about-section">
        <div className="about-section-heading">
          <span className="about-section-number">03</span>

          <div>
            <span>OUR SERVICES & CAPABILITIES</span>
            <h2>خدمات و قابلیت‌های MTM</h2>
          </div>
        </div>

        <div className="about-intro-card">
          <div className="about-card-icon">
            <FaGlobeAmericas />
          </div>

          <div>
            <h3>از خرید تا تحویل؛ یک مجموعه کامل لوجستیکی</h3>

            <p>
              MTM می‌تواند تنها یک مرحله از پروسه را انجام دهد یا تمام مراحل را برای مشتری مدیریت کند؛ از خریداری موتر در مزایده و بازارهای
              بین‌المللی تا انتقال، اسناد، گمرک و تحویل نهایی در افغانستان.
            </p>
          </div>
        </div>

        <div className="about-capabilities">
          {/* AUCTION */}

          <div className="capability-card capability-featured">
            <div className="capability-icon">
              <FaGavel />
            </div>

            <h3>خریداری از مزایده‌های بین‌المللی</h3>

            <p>خریداری موتر برای مشتریان از مزایده‌ها و بازارهای معتبر موتر.</p>

            <div className="capability-tags">
              <span>Copart </span>
              <span>IAAI </span>
              <span>Manheim </span>
              <span>ADESA </span>
            </div>
          </div>

          {/* USA & CHINA */}

          <div className="capability-card">
            <div className="capability-icon">
              <FaCarSide />
            </div>

            <h3>خریداری موتر از امریکا و چین</h3>

            <p>پیدا کردن، خریداری و هماهنگی مراحل انتقال موتر از بازارهای امریکا و چین مطابق نیاز مشتری.</p>
          </div>

          {/* INTERNATIONAL SHIPPING */}

          <div className="capability-card">
            <div className="capability-icon">
              <FaShip />
            </div>

            <h3>انتقال بین‌المللی موتر</h3>

            <p>هماهنگی انتقال موتر از مسیرهای بین‌المللی مختلف و مدیریت مراحل انتقال تا مقصد.</p>

            <div className="capability-tags">
              <span>امریکا </span>
              <span>کانادا </span>
              <span>امارات </span>
              <span>ترکیه </span>
              <span>چین </span>
            </div>
          </div>

          {/* CUSTOMS */}

          <div className="capability-card">
            <div className="capability-icon">
              <FaClipboardCheck />
            </div>

            <h3>پروسس گمرکی موتر</h3>

            <p>هماهنگی و پیگیری مراحل گمرکی موتر و اسناد مربوط به آن تا تکمیل پروسه.</p>

            <div className="capability-location">
              <FaMapMarkerAlt />

              <span>اسلام‌قلعه</span>
            </div>
          </div>

          {/* AFGHANISTAN */}

          <div className="capability-card capability-wide">
            <div className="capability-icon">
              <FaTruck />
            </div>

            <h3>انتقال داخلی در افغانستان</h3>

            <p>بعد از رسیدن موتر به افغانستان، امکان هماهنگی انتقال آن از هرات به شهرهای مختلف کشور وجود دارد.</p>

            <div className="destination-list">
              <span>هرات </span>
              <span>کابل </span>
              <span>قندهار </span>
              <span>غزنی </span>
              <span>جلال‌آباد </span>
              <span>بلخ </span>
            </div>
          </div>

          {/* WAREHOUSE */}

          <div className="capability-card">
            <div className="capability-icon">
              <FaWarehouse />
            </div>

            <h3>گدام و نگهداری</h3>

            <p>هماهنگی نگهداری و مدیریت موتر و بار در مراحل مختلف انتقال.</p>
          </div>

          {/* COMMERCIAL CARGO */}

          <div className="capability-card">
            <div className="capability-icon">
              <FaBoxes />
            </div>

            <h3>بار تجارتی و وسایل سنگین</h3>

            <p>خدمات لوجستیکی برای بارهای تجارتی، وسایل سنگین و محموله‌های مورد نیاز مشتریان.</p>
          </div>

          {/* CUSTOMER VEHICLE */}

          <div className="capability-card capability-featured">
            <div className="capability-icon">
              <FaDollarSign />
            </div>

            <h3>خرید و فروش موتر مشتری</h3>

            <p>خریداری و فروش موتر مشتری در مزایده‌ها و بازارهای مربوط به امریکا و امارات، همراه با هماهنگی مراحل معامله و انتقال.</p>

            <div className="capability-tags">
              <span>مزایده امریکا </span>
              <span>بازار امارات </span>
            </div>
          </div>

          {/* SUPPORT */}

          <div className="capability-card">
            <div className="capability-icon">
              <FaHeadset />
            </div>

            <h3>هماهنگی و پشتیبانی</h3>

            <p>ارتباط با مشتری و پیگیری مراحل مختلف پروسه تا رسیدن موتر به مقصد.</p>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICE LEVELS
      ===================================================== */}

      <section className="about-section">
        <div className="about-section-heading">
          <span className="about-section-number">04</span>

          <div>
            <span>SERVICE OPTIONS</span>
            <h2>خدمات را مطابق نیاز خود انتخاب کنید</h2>
          </div>
        </div>

        <div className="service-levels">
          {/* PARTIAL */}

          <div className="service-level-card">
            <div className="service-level-number">01</div>

            <div className="service-level-icon">
              <FaRoute />
            </div>

            <span className="service-level-label">PARTIAL SERVICE</span>

            <h3>خدمات نیمه‌راه</h3>

            <p>اگر مشتری تنها به یک قسمت از پروسه نیاز داشته باشد، می‌تواند همان بخش را به MTM بسپارد.</p>

            <div className="service-level-list">
              <span>خریداری موتر</span>
              <span>انتقال بین‌المللی</span>
              <span>اسناد</span>
              <span>گمرک</span>
              <span>انتقال داخلی</span>
            </div>
          </div>

          {/* FULL */}

          <div className="service-level-card service-level-main">
            <div className="service-level-number">02</div>

            <div className="service-level-icon">
              <FaHandshake />
            </div>

            <span className="service-level-label">FULL SERVICE</span>

            <h3>خدمات کامل / Door-to-Door</h3>

            <p>تمام پروسه از خریداری موتر تا انتقال، اسناد، گمرک و تحویل نهایی در مقصد مورد نظر مشتری توسط MTM هماهنگ و مدیریت می‌شود.</p>

            <div className="service-level-list">
              <span>خریداری</span>
              <span>انتقال</span>
              <span>اسناد</span>
              <span>گمرک</span>
              <span>تحویل نهایی</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHO WE SERVE
      ===================================================== */}

      <section className="about-section">
        <div className="about-section-heading">
          <span className="about-section-number">05</span>

          <div>
            <span>WHO WE SERVE</span>
            <h2>برای چه کسانی خدمات ارائه می‌کنیم؟</h2>
          </div>
        </div>

        <div className="about-clients">
          <div>
            <FaCarSide />
            <span>خریداران موتر</span>
          </div>

          <div>
            <FaGavel />
            <span>خریداران مزایده</span>
          </div>

          <div>
            <FaHandshake />
            <span>دیلران موتر</span>
          </div>

          <div>
            <FaGlobeAmericas />
            <span>صادرکنندگان و واردکنندگان</span>
          </div>

          <div>
            <FaTruck />
            <span>شرکت‌های حمل‌ونقل</span>
          </div>

          <div>
            <FaBoxes />
            <span>شرکت‌های تجارتی</span>
          </div>

          <div>
            <FaWarehouse />
            <span>خریداران وسایل سنگین</span>
          </div>

          <div>
            <FaUsers />
            <span>مشتریان شخصی</span>
          </div>

          <div>
            <FaBuilding />
            <span>شرکت‌ها و سازمان‌ها</span>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="about-section">
        <div className="about-section-heading">
          <span className="about-section-number">06</span>

          <div>
            <span>HOW IT WORKS</span>
            <h2>یک پروسه، از خرید تا تحویل</h2>
          </div>
        </div>

        <div className="about-process">
          <div className="process-item">
            <span> 01 </span>
            <FaGavel />
            <strong> خریداری </strong>
            <small>مزایده یا بازار</small>
          </div>

          <div className="process-item">
            <span> 02 </span>
            <FaClipboardCheck />
            <strong> اسناد </strong>
            <small>بررسی و آماده‌سازی</small>
          </div>

          <div className="process-item">
            <span> 03 </span>
            <FaTruck />
            <strong> انتقال </strong>
            <small>حمل داخل کشور مبدا</small>
          </div>

          <div className="process-item">
            <span> 04 </span>
            <FaShip />
            <strong> حمل بین‌المللی </strong>
            <small>انتقال به مقصد</small>
          </div>

          <div className="process-item">
            <span> 05 </span>
            <FaFileAlt />
            <strong> گمرک </strong>
            <small>پروسس اسناد</small>
          </div>

          <div className="process-item">
            <span> 06 </span>
            <FaTruck />
            <strong> تحویل </strong>
            <small>انتقال تا مقصد نهایی</small>
          </div>
        </div>
      </section>

      {/* =====================================================
          VALUES
      ===================================================== */}

      <section className="about-values">
        <div className="value-item">
          <FaShieldAlt />

          <div>
            <strong> امنیت </strong>
            <span>مراقبت از موتر و اسناد در مراحل مختلف</span>
          </div>
        </div>

        <div className="value-item">
          <FaCheckCircle />

          <div>
            <strong> شفافیت </strong>
            <span>اطلاعات روشن و پیگیری منظم پروسه</span>
          </div>
        </div>

        <div className="value-item">
          <FaStar />

          <div>
            <strong> خدمات مشتری </strong>
            <span>ارتباط و پشتیبانی در مراحل انتقال</span>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="about-cta">
        <div>
          <span>MTM LOGISTIC SERVICES</span>

          <h2>هر مرحله‌ای که نیاز دارید، ما می‌توانیم انجام دهیم.</h2>

          <p>
            از خریداری موتر در مزایده‌های بین‌المللی تا انتقال، گمرک و تحویل نهایی در افغانستان؛ خدمات MTM را می‌توانید به‌صورت نیمه‌راه یا
            کامل دریافت کنید.
          </p>
        </div>

        <FaArrowLeft className="about-cta-arrow" />
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
