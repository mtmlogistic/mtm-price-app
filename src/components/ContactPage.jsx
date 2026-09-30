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
  FaInstagram,
  FaFacebookF,
  FaTelegramPlane,
  FaTiktok,
} from 'react-icons/fa';
import './ContactPage.css';

export default function ContactPage({ onClose }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);
  const change = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', phone: '', message: '' });
    }, 3500);
  };
  const external = (url) => window.open(url, '_blank', 'noopener,noreferrer');
  const website = () => external('https://www.mtmgl.com');
  const whatsapp = () => external('https://wa.me/93774106040');
  const instagram = () => external('https://www.instagram.com/mtm.gl.af?stkn=MTFzM2hxaXB0cGgwcA%3D%3D&utm_source=qr');
  const facebook = () => external('https://facebook.com/share/1ExMLj6uUL?mibextid=wwXIfr');
  const telegram = () => external('https://t.me/93774106040');
  const map = () =>
    external(
      'https://www.google.com/maps/place/MTM+Logistic+Services/@34.5514982,69.1604909,17z/data=!3m1!4b1!4m6!3m5!1s0x38d16fc342ab024f:0x35da5318f28f6af4!8m2!3d34.5514982!4d69.1630658!16s%2Fg%2F11zymf_47l?entry=ttu&g_ep=EgoyMDI2MDkyNy4xIKXMDSoASAFQAw%3D%3D',
    );
  return (
    <div className="contact-page" dir="rtl">
      <header className="contact-header">
        <div className="contact-header-brand">
          <div className="contact-logo">
            <FaHeadset />
          </div>
          <div className="contact-header-copy">
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
      <main className="contact-content">
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
            <div className="contact-hero-actions">
              <button type="button" onClick={whatsapp} className="hero-primary-action">
                <FaWhatsapp />
                <span>پیام در واتساپ</span>
              </button>
              <button type="button" onClick={website} className="hero-secondary-action">
                <FaGlobeAmericas />
                <span>وب‌سایت رسمی</span>
              </button>
            </div>
            <div className="contact-hero-status">
              <span />
              تیم ما آماده پاسخ‌گویی به شما است
            </div>
          </div>
          <div className="contact-hero-visual">
            <div className="hero-visual-ring hero-ring-one" />
            <div className="hero-visual-ring hero-ring-two" />
            <div className="contact-hero-icon">
              <FaHeadset />
            </div>
          </div>
        </section>
        <section className="contact-methods">
          <button
            type="button"
            className="contact-method"
            onClick={() => {
              window.location.href = 'tel:+93774106040';
            }}
          >
            <div className="contact-method-icon">
              <FaPhoneAlt />
            </div>
            <div className="contact-method-content">
              <span>تماس مستقیم</span>
              <strong dir="ltr">+93 77 410 6040</strong>
              <small>افغانستان</small>
            </div>
            <FaExternalLinkAlt className="contact-method-arrow" />
          </button>
          <button type="button" className="contact-method" onClick={whatsapp}>
            <div className="contact-method-icon">
              <FaWhatsapp />
            </div>
            <div className="contact-method-content">
              <span>واتساپ</span>
              <strong dir="ltr">+93 77 410 6040</strong>
              <small>پیام مستقیم در WhatsApp</small>
            </div>
            <FaExternalLinkAlt className="contact-method-arrow" />
          </button>
          <button
            type="button"
            className="contact-method"
            onClick={() => {
              window.location.href = 'mailto:matin.tamim.af@gmail.com';
            }}
          >
            <div className="contact-method-icon">
              <FaEnvelope />
            </div>
            <div className="contact-method-content">
              <span>ایمیل</span>
              <strong dir="ltr">Support@mtmGL.com</strong>
              <small>ارسال ایمیل به تیم پشتیبانی</small>
            </div>
            <FaExternalLinkAlt className="contact-method-arrow" />
          </button>
          <button
            type="button"
            className="contact-method"
            onClick={() => {
              window.location.href = 'tel:+447347276454';
            }}
          >
            <div className="contact-method-icon">
              <FaPhoneAlt />
            </div>
            <div className="contact-method-content">
              <span>شماره بین‌المللی</span>
              <strong dir="ltr">+44 7347 276454</strong>
              <small>شماره تماس بین‌المللی</small>
            </div>
            <FaExternalLinkAlt className="contact-method-arrow" />
          </button>
        </section>
        <section className="contact-main-grid">
          <div className="contact-form-card">
            <div className="contact-card-heading">
              <div className="contact-heading-icon">
                <FaPaperPlane />
              </div>
              <div>
                <span>CONTACT US</span>
                <h2>پیام خود را ارسال کنید</h2>
                <p>معلومات خود را وارد کنید تا تیم ما با شما تماس بگیرد.</p>
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
              <form className="contact-form" onSubmit={submit}>
                <div className="contact-form-row">
                  <label>
                    <span>نام کامل</span>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={change}
                      placeholder="نام و نام خانوادگی"
                      autoComplete="name"
                      required
                    />
                  </label>
                  <label>
                    <span>ایمیل</span>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={change}
                      placeholder="example@email.com"
                      dir="ltr"
                      autoComplete="email"
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
                    onChange={change}
                    placeholder="+93 7X XXX XXXX"
                    dir="ltr"
                    autoComplete="tel"
                    required
                  />
                </label>
                <label>
                  <span>پیام شما</span>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={change}
                    placeholder="معلومات مورد نیاز خود را بنویسید..."
                    rows="6"
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
              <button type="button" className="contact-map-button" onClick={map}>
                <FaMapMarkerAlt />
                <span>مشاهده موقعیت در نقشه</span>
                <FaExternalLinkAlt />
              </button>
            </div>
            <div className="contact-response-card">
              <div className="response-icon">
                <FaClock />
              </div>
              <div>
                <strong>پاسخ‌گویی سریع</strong>
                <p>
                  درخواست‌های تماس توسط تیم لوجستیک بررسی می‌شود و سایت اعلام کرده است که به درخواست‌ها در مدت ۲۴ ساعت پاسخ داده می‌شود.
                </p>
              </div>
            </div>
            <div className="contact-services-card">
              <div className="services-card-title">
                <FaCarSide />
                <span>برای چه خدماتی تماس بگیریم؟</span>
              </div>
              <div className="contact-service-list">
                <div>
                  <FaCheckCircle />
                  <span>خریداری موتر از اکشن و لوکل</span>
                </div>
                <div>
                  <FaCheckCircle />
                  <span>انتقال موتر از امریکا، کانادا، امارات، ترکیه و چین</span>
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
        <section className="contact-bottom">
          <div className="contact-bottom-icon">
            <FaGlobeAmericas />
          </div>
          <div className="contact-bottom-copy">
            <strong>MTM Logistic Services</strong>
            <p>خدمات کامل انتقال و صادرات موتر با سرعت، دقت و شفافیت.</p>
          </div>
          <button type="button" className="contact-bottom-website" onClick={website} dir="ltr">
            <span>www.mtmgl.com</span>
            <FaExternalLinkAlt />
          </button>
          <div className="contact-bottom-route">
            <span>🇺🇸</span>
            <b>→</b>
            <span>🇦🇪</span>
            <b>→</b>
            <span>🇦🇫</span>
          </div>
        </section>
      </main>
      <footer className="contact-footer">
        <div className="contact-footer-main">
          <div className="contact-footer-brand">
            <strong>MTM Logistic Services</strong>
            <span>12th Street, Qala e Fatullah, Kabul, Afghanistan</span>
          </div>
          <div className="contact-footer-phone" dir="ltr">
            <FaPhoneAlt />
            <span>+93 77 410 6040</span>
          </div>
          <button type="button" className="contact-footer-site" onClick={website} dir="ltr">
            <FaGlobeAmericas />
            <span>www.mtmgl.com</span>
            <FaExternalLinkAlt />
          </button>
        </div>
        <div className="contact-footer-divider" />
        <div className="contact-social-section">
          <div className="contact-social-heading">
            <span>MTM SOCIAL</span>
            <strong>ما را در شبکه‌های اجتماعی دنبال کنید</strong>
          </div>
          <div className="contact-social-links">
            <button type="button" className="social-link instagram" onClick={instagram}>
              <FaInstagram />
              <span>Instagram</span>
            </button>
            <button type="button" className="social-link facebook" onClick={facebook}>
              <FaFacebookF />
              <span>Facebook</span>
            </button>
            <button type="button" className="social-link telegram" onClick={telegram}>
              <FaTelegramPlane />
              <span>Telegram</span>
            </button>
            <button type="button" className="social-link tiktok disabled" disabled title="TikTok — لینک به‌زودی">
              <FaTiktok />
              <span>TikTok</span>
            </button>
          </div>
        </div>
        <div className="contact-footer-bottom">
          <span>© {new Date().getFullYear()} MTM Logistic Services</span>
          <span>تمام حقوق محفوظ است.</span>
        </div>
      </footer>
    </div>
  );
}
