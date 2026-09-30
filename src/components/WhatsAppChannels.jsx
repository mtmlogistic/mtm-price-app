import React from 'react';

import {
  FaWhatsapp,
  FaCarSide,
  FaBullhorn,
  FaGavel,
  FaTag,
  FaExternalLinkAlt,
  FaClock,
  FaShippingFast,
  FaChevronLeft,
  FaTimes,
  FaCar,
} from 'react-icons/fa';

import './WhatsAppChannels.css';


/* =========================================================
   WHATSAPP CHANNELS
========================================================= */

const whatsappChannels = [
  {
    id: 1,
    title: 'MTM AUTO UPDATE',
    subtitle: 'اخبار و اطلاعیه‌های MTM',
    description:
      'در این چینل آخرین اخبار، تغییرات ریت شیپنگ، هزینه‌های انتقالات، وضعیت گمرکات و اطلاعیه‌های مهم مربوط به خدمات MTM منتشر می‌شود.',
    type: 'اخبار و اطلاعیه‌ها',
    icon: <FaBullhorn />,
    link: 'https://whatsapp.com/channel/0029Vb9QNB6InlqOYZHOka02',
    badge: 'MTM NEWS',
  },

  {
    id: 2,
    title: 'TOYOTA COROLLA',
    subtitle: 'کرولا 2005 تا 2026',
    description:
      'در این چینل موترهای Toyota Corolla از سال 2005 الی 2026 که در مزایده‌ها موجود می‌باشند معرفی و منتشر می‌شوند.',
    type: 'موترهای مزایده',
    icon: <FaCarSide />,
    link: 'https://whatsapp.com/channel/0029Vb7kQci4o7qDmcz5hO0h',
    badge: 'AUCTION',
    years: '2005 — 2026',
  },

  {
    id: 3,
    title: 'TOYOTA 4RUNNER',
    subtitle: 'فورنر 2005 تا 2026',
    description:
      'این چینل مخصوص Toyota 4Runner از سال 2005 الی 2026 است. موترهای موجود در مزایده‌ها در این بخش منتشر می‌شوند.',
    type: 'موترهای مزایده',
    icon: <FaCarSide />,
    link: 'https://whatsapp.com/channel/0029VbDQ1aRISTkH4hrn6g17',
    badge: 'AUCTION',
    years: '2005 — 2026',
  },

  {
    id: 4,
    title: 'TOYOTA PRIUS',
    subtitle: 'پریوس 2010 تا 2026',
    description:
      'در این چینل Toyota Prius از سال 2010 الی 2026 که در مزایده‌ها موجود هستند منتشر می‌شوند.',
    type: 'موترهای مزایده',
    icon: <FaCar />,
    link: 'https://whatsapp.com/channel/0029Vb8M0NP4Y9lhH6cn0Q3l',
    badge: 'AUCTION',
    years: '2010 — 2026',
  },

  {
    id: 5,
    title: 'LEXUS',
    subtitle: 'تمام مدل‌های لکسس',
    description:
      'این چینل برای تمام موترهای Lexus اختصاص داده شده است. مدل‌های مختلف Lexus که در مزایده‌ها موجود باشند در این بخش معرفی می‌شوند.',
    type: 'موترهای مزایده',
    icon: <FaCarSide />,
    link: 'https://whatsapp.com/channel/0029VbCtHBx6LwHuL4Bnsz2k',
    badge: 'AUCTION',
    years: 'ALL MODELS',
  },

  {
    id: 6,
    title: 'MERCEDES-BENZ',
    subtitle: 'موترهای بنز',
    description:
      'در این چینل موترهای Mercedes-Benz موجود در مزایده‌ها منتشر می‌شوند. مدل‌های مختلف بنز در این بخش معرفی خواهند شد.',
    type: 'موترهای مزایده',
    icon: <FaCarSide />,
    link: 'https://whatsapp.com/channel/0029Vb7xlw7I7Be8IzysVl3n',
    badge: 'AUCTION',
    years: 'ALL MODELS',
  },

  {
    id: 7,
    title: 'MTM CARS FOR SALE',
    subtitle: 'موترهای آماده فروش',
    description:
      'در این چینل موترهایی که برای فروش موجود هستند منتشر می‌شوند. برای معلومات بیشتر می‌توانید با MTM تماس بگیرید.',
    type: 'موترهای فروشی',
    icon: <FaTag />,
    link: 'https://whatsapp.com/channel/0029Vb8TnLXBfxnzGvs9QV14',
    badge: 'FOR SALE',
  },
];


/* =========================================================
   COMPONENT
========================================================= */

const WhatsAppChannels = ({ onClose }) => {

  const openChannel = (link) => {
    if (!link) return;

    window.open(
      link,
      '_blank',
      'noopener,noreferrer'
    );
  };


  return (
    <div
      className="whatsapp-channels-page"
      dir="rtl"
       style={{
    paddingTop: '120px',
  }}
    >

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="whatsapp-header"   
      style={{
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    zIndex: 99999,
  }}
  >

        <div className="whatsapp-header-brand">

          <div className="whatsapp-header-logo">
            <FaWhatsapp />
          </div>

          <div className="whatsapp-header-content">

            <span className="header-overline">
              MTM LOGISTIC SERVICES
            </span>

            <h1>
              چینل‌ های واتساپ MTM
            </h1>

            <p>
              آخرین اخبار، موترهای مزایده و موترهای آماده فروش
              را از طریق چینل‌های رسمی MTM دنبال کنید.
            </p>

          </div>

        </div>


        {onClose && (
          <button
            type="button"
            className="whatsapp-close-button"
            onClick={onClose}
            aria-label="بستن"
            title="بستن"
          >
            <FaTimes />
          </button>
        )}

      </header>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="whatsapp-hero">

        <div className="whatsapp-hero-pattern"></div>


        <div className="whatsapp-hero-content">

          <div className="whatsapp-main-icon">
            <FaWhatsapp />
          </div>


          <div className="whatsapp-hero-text">

            <span className="whatsapp-overline">
              MTM WHATSAPP
            </span>

            <h2>
              چینل مورد نظر خود را دنبال کنید
            </h2>

            <p>
              برای دریافت آخرین اخبار، موترهای مزایده و
              موترهای آماده فروش، چینل رسمی مورد نظر خود
              را انتخاب کنید.
            </p>

          </div>

        </div>


        {/* HERO STATS */}

        <div className="whatsapp-hero-stats">

          <div className="hero-stat">
            <strong>07</strong>
            <span>چینل فعال</span>
          </div>

          <div className="hero-stat">
            <strong>05</strong>
            <span>چینل موتر های اکشن/مزایده </span>
          </div>

          <div className="hero-stat">
            <strong>01</strong>
            <span>اخبار و آپدیت</span>
          </div>

          <div className="hero-stat">
            <strong>01</strong>
            <span>موترهای فروشی</span>
          </div>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="channels-intro">

        <div className="intro-text">

          <span className="section-kicker">
            MTM WHATSAPP
          </span>

          <h2>
            چینل مناسب خود را انتخاب کنید
          </h2>

          <p>
            برای دسترسی سریع‌تر به معلومات، چینل‌ها بر اساس
            نوع موتر و نوع محتوا دسته‌بندی شده‌اند.
          </p>

        </div>


        <div className="auction-note">

          <FaGavel />

          <div>

            <strong>
              نکته مهم
            </strong>

            <span>
              چینل‌های شماره ۲ الی ۶ مربوط به موترهای
              مزایده می‌باشند.
            </span>

          </div>

        </div>

      </section>


      {/* =====================================================
          CHANNELS
      ===================================================== */}

      <section className="channels-grid">

        {whatsappChannels.map((channel, index) => (

          <article
            key={channel.id}
            className={`whatsapp-channel-card ${
              channel.id === 1
                ? 'news-card'
                : channel.id === 7
                  ? 'sale-card'
                  : 'auction-card'
            }`}
          >

            {/* CARD TOP */}

            <div className="channel-card-top">

              <div className="channel-number">
                {String(index + 1).padStart(2, '0')}
              </div>


              <div className="channel-icon">
                {channel.icon}
              </div>


              <div className="channel-badge">
                {channel.badge}
              </div>

            </div>


            {/* TITLE */}

            <div className="channel-heading">

              <h3 dir="ltr">
                {channel.title}
              </h3>

              <span>
                {channel.subtitle}
              </span>

            </div>


            {/* META */}

            <div className="channel-meta">

              <div>

                {channel.id >= 2 && channel.id <= 6 ? (
                  <>
                    <FaGavel />
                    <span>
                      مزایده
                    </span>
                  </>
                ) : channel.id === 7 ? (
                  <>
                    <FaTag />
                    <span>
                      فروش
                    </span>
                  </>
                ) : (
                  <>
                    <FaBullhorn />
                    <span>
                      اطلاعیه
                    </span>
                  </>
                )}

              </div>


              {channel.years && (
                <div dir="ltr">

                  <FaClock />

                  <span>
                    {channel.years}
                  </span>

                </div>
              )}

            </div>


            {/* DESCRIPTION */}

            <div className="channel-description">

              <p>
                {channel.description}
              </p>

            </div>


            {/* FOOTER */}

            <div className="channel-card-footer">

              <div className="channel-status">

                <span className="status-dot"></span>

                {channel.link
                  ? 'چینل آماده مشاهده'
                  : 'لینک به‌زودی اضافه می‌شود'}

              </div>


              <button
                type="button"
                className={`channel-button ${
                  !channel.link ? 'disabled' : ''
                }`}
                onClick={() => openChannel(channel.link)}
                disabled={!channel.link}
              >

                {channel.link ? (
                  <>
                    <span>
                      مشاهده چینل
                    </span>

                    <FaExternalLinkAlt />
                  </>
                ) : (
                  <>
                    <span>
                      به‌زودی
                    </span>

                    <FaClock />
                  </>
                )}

              </button>

            </div>

          </article>

        ))}

      </section>


      {/* =====================================================
          INFORMATION
      ===================================================== */}

      <section className="channel-info-section">

        <div className="info-icon">
          <FaShippingFast />
        </div>


        <div className="info-content">

          <span className="section-kicker">
            MTM LOGISTICS
          </span>

          <h2>
            چرا چینل‌های MTM را دنبال کنیم؟
          </h2>


          <div className="info-points">

            <div>
              <span>01</span>

              <p>
                اطلاع از تغییرات ریت شیپنگ و هزینه‌های انتقالات
              </p>
            </div>


            <div>
              <span>02</span>

              <p>
                مشاهده موترهای جدید موجود در مزایده‌ها
              </p>
            </div>


            <div>
              <span>03</span>

              <p>
                دریافت اطلاعیه‌های مربوط به گمرکات و خدمات
              </p>
            </div>


            <div>
              <span>04</span>

              <p>
                مشاهده موترهای موجود برای فروش
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          BOTTOM
      ===================================================== */}

      <section className="whatsapp-bottom">

        <div className="bottom-whatsapp-icon">
          <FaWhatsapp />
        </div>


        <div className="bottom-content">

          <h3>
            همیشه از آخرین معلومات MTM باخبر باشید
          </h3>

          <p>
            چینل مورد نظر خود را انتخاب کرده و برای دریافت
            جدیدترین اطلاعات MTM آن را دنبال کنید.
          </p>

        </div>


        <FaChevronLeft className="bottom-arrow" />

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="whatsapp-footer">

        <strong>
          MTM Logistic Services
        </strong>

        <span>
          12th Street, Qala e Fatullah Kabul, AF
        </span>

        <span dir="ltr">
          +93 77 410 6040
        </span>

      </footer>

    </div>
  );
};


export default WhatsAppChannels;