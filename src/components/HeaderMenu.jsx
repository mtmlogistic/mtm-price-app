import React, { useEffect, useRef, useState } from 'react';

import { FaBars, FaTags, FaCarSide, FaInfoCircle, FaPhoneAlt, FaTimes, FaChevronLeft } from 'react-icons/fa';

import './HeaderMenu.css';

export default function HeaderMenu({ onOpenTitles, onOpenAbout, onOpenContact, onOpenVehicleSales }) {
  const [open, setOpen] = useState(false);

  const menuRef = useRef(null);

  const menuItems = [
    {
      id: 1,
      title: 'تمام تایتل‌ها',
      icon: <FaTags />,
      action: onOpenTitles,
    },
    {
      id: 2,
      title: 'موترهای فروشی',
      icon: <FaCarSide />,
      action: onOpenVehicleSales,
    },
    {
      id: 3,
      title: 'درباره ما',
      icon: <FaInfoCircle />,
      action: onOpenAbout,
    },
    {
      id: 4,
      title: 'تماس با ما',
      icon: <FaPhoneAlt />,
      action: onOpenContact,
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleItemClick = (item) => {
    setOpen(false);

    if (typeof item.action === 'function') {
      item.action();
    }
  };

  return (
    <div className="header-menu-wrapper" ref={menuRef}>
      <button
        type="button"
        className={`header-menu-button ${open ? 'active' : ''}`}
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? 'بستن منو' : 'باز کردن منو'}
        aria-expanded={open}
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>

      {open && (
        <div className="header-dropdown show">
          <div className="menu-top">
            <div className="menu-brand">
              <span>MTM</span>
              <small>LOGISTIC SERVICES</small>
            </div>

            <button type="button" className="menu-close" onClick={() => setOpen(false)} aria-label="بستن">
              <FaTimes />
            </button>
          </div>

          <div className="menu-list">
            {menuItems.map((item) => (
              <button type="button" key={item.id} className="menu-item" onClick={() => handleItemClick(item)}>
                <span className="menu-icon">{item.icon}</span>

                <span className="menu-title">{item.title}</span>

                <span className="menu-arrow">
                  <FaChevronLeft />
                </span>
              </button>
            ))}
          </div>

          <div className="menu-footer">MTM Logistic Services</div>
        </div>
      )}
    </div>
  );
}
