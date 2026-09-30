import React, { useState } from 'react';
import {
  FaTimes,
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaClock,
  FaGlobeAmericas,
  FaCarSide,
  FaHeadset,
  FaCheckCircle,
  FaExternalLinkAlt,
} from 'react-icons/fa';

import './ContactPage.css';

export default function ContactPage({ onClose }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSent(true);

    setTimeout(() => {
      setSent(false);

      setForm({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    }, 3500);
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/93774106040', '_blank', 'noopener,noreferrer');
  };

  const callAfghanistan = () => {
    window.location.href = 'tel:+93774106040';
  };

  const callUK = () => {
    window.location.href = 'tel:+447347276454';
  };

  const sendEmail = () => {
      window.location.href = 'mailto:matin.tamim.af@gmail.com';
  };

  const openMap = () => {
    window.open(
      'https://www.google.com/maps/place/MTM+Logistic+Services/@34.5514982,69.1604909,17z/data=!3m1!4b1!4m6!3m5!1s0x38d16fc342ab024f:0x35da5318f28f6af4!8m2!3d34.5514982!4d69.1630658!16s%2Fg%2F11zymf_47l?entry=ttu&g_ep=EgoyMDI2MDkyNy4xIKXMDSoASAFQAw%3D%3D',
      '_blank',
      'noopener,noreferrer',
    );
  };

  return (
    <div className="contact-page" dir="rtl" 
     style={{
    paddingTop: '120px',
  }}
    >
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="contact-header"  style={{
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    zIndex: 99999,
  }}>
        <div className="contact-header-brand">
          <div className="contact-logo">
            <FaHeadset />
          </div>

          <div>
            <span>MTM LOGISTIC SERVICES</span>

            <h1>تماس با ما</h1>

            <p>برای دریافت معلومات و خدمات انتقال موتر با ما در تماس شوید</p>
          </div>
        </div>

        {onClose && (
          <button type="button" className="contact-close-button" onClick={onClose} aria-label="بستن">
            <FaTimes />
          </button>
        )}
      </header>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="contact-hero">
        <div className="contact-hero-content">
          <div className="contact-hero-badge">
            <FaGlobeAmericas />
            <span>MTM SUPPORT</span>
          </div>

          <h2>
            با تیم MTM
            <br />
            در تماس باشید
          </h2>

          <p>برای معلومات درباره انتقال موتر، صادرات، گمرک، خرید موتر و خدمات لوجستیکی با تیم ما تماس بگیرید.</p>

          <div className="contact-hero-status">
            <span />
            تیم ما آماده پاسخ‌گویی به شما است
          </div>
        </div>

        <div className="contact-hero-icon">
          <FaHeadset />
        </div>
      </section>

      {/* =====================================================
          CONTACT CARDS
      ===================================================== */}

      <section className="contact-methods">
        <button type="button" className="contact-method phone" onClick={callAfghanistan}>
          <div className="contact-method-icon">
            <FaPhoneAlt />
          </div>

          <div>
            <span>تماس مستقیم</span>
            <strong>+93 77 410 6040</strong>
            <small>افغانستان</small>
          </div>

          <FaExternalLinkAlt className="contact-method-arrow" />
        </button>

        <button type="button" className="contact-method whatsapp" onClick={openWhatsApp}>
          <div className="contact-method-icon">
            <FaWhatsapp />
          </div>

          <div>
            <span>واتساپ</span>
            <strong>+93 77 410 6040</strong>
            <small>پیام مستقیم در WhatsApp</small>
          </div>

          <FaExternalLinkAlt className="contact-method-arrow" />
        </button>

        <button type="button" className="contact-method email" onClick={sendEmail}>
          <div className="contact-method-icon">
            <FaEnvelope />
          </div>

          <div>
            <span>ایمیل</span>
            <strong>Support@mtmGL.com</strong>
            <small>ارسال ایمیل به تیم پشتیبانی</small>
          </div>

          <FaExternalLinkAlt className="contact-method-arrow" />
        </button>

        <button type="button" className="contact-method phone" onClick={callUK}>
          <div className="contact-method-icon">
            <FaPhoneAlt />
          </div>

          <div>
            <span>شماره تماس</span>
            <strong>+44 7347 276454</strong>
            <small>شماره بین‌المللی</small>
          </div>

          <FaExternalLinkAlt className="contact-method-arrow" />
        </button>
      </section>

      {/* =====================================================
          MAIN GRID
      ===================================================== */}

      <section className="contact-main-grid">
        {/* FORM */}

        <div className="contact-form-card">
          <div className="contact-card-heading">
            <div className="contact-heading-icon">
              <FaPaperPlane />
            </div>

            <div>
              <span>CONTACT US</span>
              <h2>پیام خود را ارسال کنید</h2>
            </div>
          </div>

          {sent ? (
            <div className="contact-success">
              <div className="contact-success-icon">
                <FaCheckCircle />
              </div>

              <h3>درخواست شما ثبت شد</h3>

              <p>معلومات شما ثبت گردید. تیم لوجستیک MTM در اولین فرصت با شما تماس خواهد گرفت.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-row">
                <label>
                  <span>نام کامل</span>

                  <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="نام و نام خانوادگی" required />
                </label>

                <label>
                  <span>ایمیل</span>

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="example@email.com"
                    dir="ltr"
                    required
                  />
                </label>
              </div>

              <label>
                <span>شماره تماس</span>

                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+93 7X XXX XXXX"
                  dir="ltr"
                  required
                />
              </label>

              <label>
                <span>پیام شما</span>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="معلومات مورد نیاز خود را بنویسید..."
                  rows="5"
                  required
                />
              </label>

              <button type="submit" className="contact-submit">
                <FaPaperPlane />
                <span>ارسال درخواست</span>
              </button>

              <small className="contact-form-note">معلومات شما برای پاسخ‌گویی به درخواست شما استفاده می‌شود.</small>
            </form>
          )}
        </div>

        {/* LOCATION */}

        <div className="contact-info-column">
          <div className="contact-location-card">
            <div className="contact-location-top">
              <div className="contact-location-icon">
                <FaMapMarkerAlt />
              </div>

              <div>
                <span>VISIT US</span>
                <h2>آدرس دفتر</h2>
              </div>
            </div>

            <div className="contact-address">
              <strong>12th Street</strong>

              <span>Qala e Fatullah</span>

              <span>Kabul, Afghanistan</span>
            </div>

            <button type="button" className="contact-map-button" onClick={openMap}>
              <FaMapMarkerAlt />
              <span>مشاهده موقعیت در نقشه</span>
              <FaExternalLinkAlt />
            </button>
          </div>

          {/* RESPONSE */}

          <div className="contact-response-card">
            <div className="response-icon">
              <FaClock />
            </div>

            <div>
              <strong>پاسخ‌گویی سریع</strong>

              <p>درخواست‌های تماس توسط تیم لوجستیک بررسی می‌شود و سایت اعلام کرده است که به درخواست‌ها در مدت ۲۴ ساعت پاسخ داده می‌شود.</p>
            </div>
          </div>

          {/* SERVICES */}

          <div className="contact-services-card">
            <div className="services-card-title">
              <FaCarSide />
              <span>برای چه خدماتی تماس بگیریم؟</span>
            </div>

            <div className="contact-service-list">
              <div>
                <FaCheckCircle />
                <span>انتقال موتر از امریکا</span>
              </div>

              <div>
                <FaCheckCircle />
                <span>صادرات موتر</span>
              </div>

              <div>
                <FaCheckCircle />
                <span>انتقال بحری</span>
              </div>

              <div>
                <FaCheckCircle />
                <span>گمرک و انتقال به افغانستان</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BOTTOM
      ===================================================== */}

      <section className="contact-bottom">
        <div className="contact-bottom-icon">
          <FaGlobeAmericas />
        </div>

        <div>
          <strong>MTM Logistic Services</strong>

          <p>خدمات کامل انتقال و صادرات موتر با سرعت، دقت و شفافیت.</p>
        </div>

        <div className="contact-bottom-route">
          🇺🇸
          <span>→</span>
          🇦🇪
          <span>→</span>
          🇦🇫
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="contact-footer">
        <strong>MTM Logistic Services</strong>

        <span>12th Street, Qala e Fatullah Kabul, AF</span>

        <span dir="ltr">+93 77 410 6040</span>
      </footer>
    </div>
  );
}
