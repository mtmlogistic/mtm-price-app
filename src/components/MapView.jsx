 import { MapContainer, TileLayer, Marker, Popup, Polyline, CircleMarker, Circle, useMap } from 'react-leaflet';
import { FaCalculator } from 'react-icons/fa';
import { useEffect, useMemo, useState } from 'react';
import L from 'leaflet';
import {  useRef } from 'react';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { FaExpand, FaCompress } from 'react-icons/fa';

/* =====================================================
   LEAFLET BRANCH ICONS
===================================================== */

const defaultIcon = new L.Icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,

  iconSize: [17, 28],
  iconAnchor: [8.5, 28],
  popupAnchor: [1, -23],
  shadowSize: [28, 28],
});

/*
  برنچ انتخاب شده
*/

const selectedIcon = new L.Icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,

  iconSize: [34, 52],
  iconAnchor: [17, 52],
  popupAnchor: [0, -46],
  shadowSize: [52, 52],

  className: 'selected-map-marker',
});

/* =====================================================
   PORT ICONS
===================================================== */

/*
  آیکن پورت عادی
  آیکن ⚓ داخل دایره آبی
*/

const portIcon = new L.DivIcon({
  className: 'port-pin-wrapper',

  html: `
    <div class="port-pin">
      <div class="port-pin-icon">⚓</div>
    </div>
  `,

  iconSize: [30, 30],
  iconAnchor: [15, 15],
  popupAnchor: [0, -15],
});

/*
  آیکن پورت انتخاب شده
  آیکن ⚓ داخل دایره سرخ
*/

const selectedPortIcon = new L.DivIcon({
  className: 'port-pin-wrapper',

  html: `
    <div class="port-pin selected">
      <div class="port-pin-icon">⚓</div>
    </div>
  `,

  iconSize: [34, 34],
  iconAnchor: [17, 17],
  popupAnchor: [0, -17],
});

/* =====================================================
   PORT COORDINATES
===================================================== */

const PORT_COORDINATES = {
  'SAVANNAH, GA': {
    lat: 32.0809,
    lng: -81.0912,
  },

  'NEW YORK, NY': {
    lat: 40.7128,
    lng: -74.006,
  },

  'BALTIMORE, MD': {
    lat: 39.2904,
    lng: -76.6122,
  },

  'NEWARK, NJ': {
    lat: 40.7357,
    lng: -74.1724,
  },

  'JACKSONVILLE, FL': {
    lat: 30.3322,
    lng: -81.6557,
  },

  'MIAMI, FL': {
    lat: 25.7617,
    lng: -80.1918,
  },

  'HOUSTON, TX': {
    lat: 29.7604,
    lng: -95.3698,
  },

  'LOS ANGELES, CA': {
    lat: 34.0522,
    lng: -118.2437,
  },
};

/* =====================================================
   RUST / CORROSION AREAS
===================================================== */

const RUST_AREAS = [

  /* =====================================================
     USA — VERY HIGH RUST / SALT BELT
     Core areas with strong winter + road-salt exposure
  ===================================================== */

  {
    name: 'Western New York / Great Lakes',
    lat: 43.0,
    lng: -78.7,
    radius: 230000,
    opacity: 0.22,
  },

  {
    name: 'Northern Ohio / Lake Erie',
    lat: 41.7,
    lng: -81.2,
    radius: 220000,
    opacity: 0.22,
  },

  {
    name: 'Southeast Michigan',
    lat: 42.6,
    lng: -83.2,
    radius: 220000,
    opacity: 0.22,
  },

  {
    name: 'Wisconsin / Lake Michigan',
    lat: 43.5,
    lng: -88.2,
    radius: 230000,
    opacity: 0.20,
  },

  {
    name: 'Northern Illinois / Chicago',
    lat: 42.0,
    lng: -88.0,
    radius: 180000,
    opacity: 0.18,
  },

  {
    name: 'Western Pennsylvania',
    lat: 41.0,
    lng: -80.0,
    radius: 220000,
    opacity: 0.19,
  },

  {
    name: 'Central / Northern Pennsylvania',
    lat: 41.0,
    lng: -77.5,
    radius: 230000,
    opacity: 0.18,
  },

  /* =====================================================
     USA — HIGH RUST RISK
  ===================================================== */

  {
    name: 'Minnesota',
    lat: 45.2,
    lng: -93.5,
    radius: 280000,
    opacity: 0.17,
  },

  {
    name: 'Northern Indiana',
    lat: 41.0,
    lng: -86.2,
    radius: 200000,
    opacity: 0.16,
  },

  {
    name: 'Iowa',
    lat: 42.0,
    lng: -93.5,
    radius: 250000,
    opacity: 0.13,
  },

  {
    name: 'Northern New Jersey',
    lat: 40.9,
    lng: -74.5,
    radius: 150000,
    opacity: 0.15,
  },

  {
    name: 'Connecticut',
    lat: 41.6,
    lng: -72.7,
    radius: 160000,
    opacity: 0.15,
  },

  {
    name: 'Massachusetts',
    lat: 42.3,
    lng: -71.8,
    radius: 200000,
    opacity: 0.16,
  },

  {
    name: 'Rhode Island',
    lat: 41.7,
    lng: -71.5,
    radius: 90000,
    opacity: 0.14,
  },

  {
    name: 'New Hampshire',
    lat: 43.9,
    lng: -71.6,
    radius: 160000,
    opacity: 0.15,
  },

  {
    name: 'Vermont',
    lat: 44.0,
    lng: -72.7,
    radius: 160000,
    opacity: 0.15,
  },

  {
    name: 'Maine',
    lat: 45.1,
    lng: -69.0,
    radius: 250000,
    opacity: 0.15,
  },

  /* =====================================================
     NEW YORK — HIGH SNOW / SALT AREAS
  ===================================================== */

  {
    name: 'Buffalo / Rochester',
    lat: 43.1,
    lng: -77.6,
    radius: 170000,
    opacity: 0.22,
  },

  {
    name: 'Syracuse / Central New York',
    lat: 43.1,
    lng: -76.1,
    radius: 170000,
    opacity: 0.21,
  },

  {
    name: 'Watertown / North Country',
    lat: 44.0,
    lng: -75.9,
    radius: 180000,
    opacity: 0.20,
  },

  /* =====================================================
     MICHIGAN — HIGH
  ===================================================== */

  {
    name: 'West Michigan',
    lat: 42.9,
    lng: -85.7,
    radius: 200000,
    opacity: 0.19,
  },

  {
    name: 'Central Michigan',
    lat: 43.7,
    lng: -84.6,
    radius: 220000,
    opacity: 0.18,
  },

  {
    name: 'Northern Michigan',
    lat: 45.2,
    lng: -85.5,
    radius: 230000,
    opacity: 0.18,
  },

  /* =====================================================
     OHIO — HIGH
  ===================================================== */

  {
    name: 'Cleveland / Lake Erie',
    lat: 41.5,
    lng: -81.7,
    radius: 170000,
    opacity: 0.21,
  },

  {
    name: 'Northeast Ohio',
    lat: 41.2,
    lng: -81.0,
    radius: 170000,
    opacity: 0.18,
  },

  /* =====================================================
     MIDWEST — MODERATE / HIGH
  ===================================================== */

  {
    name: 'Northern Missouri',
    lat: 39.5,
    lng: -94.5,
    radius: 150000,
    opacity: 0.08,
  },

  {
    name: 'Northern Kentucky',
    lat: 39.1,
    lng: -84.5,
    radius: 120000,
    opacity: 0.07,
  },

  /* =====================================================
     NEW ENGLAND COAST
     Winter + salt + marine chloride
  ===================================================== */

  {
    name: 'Maine Coast',
    lat: 44.3,
    lng: -69.0,
    radius: 180000,
    opacity: 0.17,
  },

  {
    name: 'New Hampshire Coast',
    lat: 43.1,
    lng: -70.8,
    radius: 90000,
    opacity: 0.17,
  },

  {
    name: 'Massachusetts Coast',
    lat: 42.2,
    lng: -70.8,
    radius: 150000,
    opacity: 0.16,
  },

  /* =====================================================
     MID-ATLANTIC
  ===================================================== */

  {
    name: 'Eastern Pennsylvania',
    lat: 40.3,
    lng: -75.3,
    radius: 180000,
    opacity: 0.13,
  },

  {
    name: 'Maryland / Washington DC',
    lat: 39.1,
    lng: -76.8,
    radius: 150000,
    opacity: 0.09,
  },

  /* =====================================================
     ALASKA
     Winter severe, but NOT equivalent to Salt Belt
  ===================================================== */

  {
    name: 'Southcentral Alaska',
    lat: 61.3,
    lng: -149.0,
    radius: 180000,
    opacity: 0.10,
  },

  {
    name: 'Interior Alaska',
    lat: 64.8,
    lng: -147.7,
    radius: 250000,
    opacity: 0.07,
  },

  /* =====================================================
     CANADA — VERY HIGH
  ===================================================== */

  {
    name: 'Southern Ontario',
    lat: 43.7,
    lng: -79.8,
    radius: 280000,
    opacity: 0.22,
  },

  {
    name: 'Golden Horseshoe',
    lat: 43.5,
    lng: -79.5,
    radius: 150000,
    opacity: 0.23,
  },

  {
    name: 'Southern Quebec',
    lat: 46.5,
    lng: -72.0,
    radius: 280000,
    opacity: 0.21,
  },

  /* =====================================================
     CANADA — HIGH
  ===================================================== */

  {
    name: 'New Brunswick',
    lat: 46.6,
    lng: -66.4,
    radius: 190000,
    opacity: 0.18,
  },

  {
    name: 'Nova Scotia',
    lat: 45.1,
    lng: -63.2,
    radius: 180000,
    opacity: 0.18,
  },

  {
    name: 'Prince Edward Island',
    lat: 46.35,
    lng: -63.2,
    radius: 90000,
    opacity: 0.17,
  },

  {
    name: 'Newfoundland',
    lat: 48.5,
    lng: -56.0,
    radius: 230000,
    opacity: 0.16,
  },

  /* =====================================================
     CANADA — MODERATE
  ===================================================== */

  {
    name: 'Southern Manitoba',
    lat: 49.8,
    lng: -97.1,
    radius: 200000,
    opacity: 0.11,
  },

  {
    name: 'Southern Saskatchewan',
    lat: 50.8,
    lng: -106.5,
    radius: 220000,
    opacity: 0.09,
  },

  {
    name: 'Southern Alberta',
    lat: 51.2,
    lng: -114.5,
    radius: 220000,
    opacity: 0.08,
  },

  {
    name: 'British Columbia Interior',
    lat: 50.7,
    lng: -119.0,
    radius: 250000,
    opacity: 0.06,
  },
];

/* =====================================================
   MIDDLE EAST / AFGHANISTAN TRANSPORT LOCATIONS
===================================================== */

const TRANSPORT_LOCATIONS = [
  {
    id: 'mersin',
    name: 'بندر مرسین',
    country: 'ترکیه',
    lat: 36.785,
    lng: 34.633,
    flag: '🇹🇷',
    type: 'port',
    description: 'بندر دریایی مرسین در ترکیه',
  },
  {
    id: 'bandar-abbas',
    name: 'بندرعباس',
    country: 'ایران',
    lat: 27.1832,
    lng: 56.2666,
    flag: '🇮🇷',
    type: 'port',
    description: 'بندر دریایی بندرعباس در ایران',
  },

  {
    id: 'jebel-ali',
    name: 'بندر جبل علی',
    country: 'امارات متحده عربی',
    lat: 24.9857,
    lng: 55.0272,
    flag: '🇦🇪',
    type: 'port',
    description: 'بندر دریایی جبل علی در امارات متحده عربی',
  },

  {
    id: 'khorfakkan',
    name: 'بندر خورفکان',
    country: 'امارات متحده عربی',
    lat: 25.3397,
    lng: 56.3568,
    flag: '🇦🇪',
    type: 'port',
    description: 'بندر دریایی خورفکان در امارات متحده عربی',
  },

  {
    id: 'bazargan',
    name: 'مرز بازرگان',
    country: 'ایران',
    lat: 39.3917,
    lng: 44.3847,
    flag: '🇮🇷',
    type: 'border',
    description: 'نقطه مرزی بازرگان میان ایران و ترکیه',
  },

  {
    id: 'islam-qala',
    name: 'گمرک اسلام‌قلعه',
    country: 'افغانستان',
    lat: 34.6526,
    lng: 61.1087,
    flag: '🇦🇫',
    type: 'border',
    description: 'گمرک اسلام قلعه در ولایت هرات',
  },
];

const HORMUZ_STRAIT = {
  lat: 26.5667,
  lng: 56.2500,
  radius: 55000,
};

/* =====================================================
   TRANSPORT LOCATION ICONS
===================================================== */

const transportLocationIcon = (countryFlag, type = 'port') => {
  const isLandBorder = type === 'border';

  return new L.DivIcon({
    className: 'transport-location-pin-wrapper',

    html: `
      <div class="transport-location-pin ${isLandBorder ? 'land-border' : 'sea-port'}">

        <div class="transport-location-flag">
          ${countryFlag}
        </div>

        <div class="transport-location-symbol">
          ${isLandBorder ? '🛃' : '⚓'}
        </div>

      </div>
    `,

    iconSize: [42, 42],
    iconAnchor: [21, 21],
    popupAnchor: [0, -21],
  });
};

/* =====================================================
   HORMUZ STRAIT ICON
===================================================== */

const hormuzIcon = new L.DivIcon({
  className: 'hormuz-pin-wrapper',

  html: `
    <div class="hormuz-pin">

      <div class="hormuz-strait-icon">
        <div class="hormuz-strait-glow"></div>

        <div class="hormuz-land land-top"></div>
        <div class="hormuz-land land-bottom"></div>

        <div class="hormuz-water">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div class="hormuz-arrow">➜</div>
      </div>

      <div class="hormuz-title">
        <span>تنگه هرمز</span>
      </div>

    </div>
  `,

  iconSize: [95, 27],
  iconAnchor: [47, 13],
  popupAnchor: [0, -16],
});

/* =====================================================
   NORMALIZE PORT NAME
===================================================== */

function normalizePortName(name) {
  return String(name || '')
    .trim()
    .toUpperCase();
}

/* =====================================================
   GET PORT COORDINATES
===================================================== */

function getPortCoordinates(port) {
  if (!port) return null;

  /*
    اولویت با مختصات موجود در JSON
  */

  const lat = Number(port.lat);
  const lng = Number(port.lng);

  if (Number.isFinite(lat) && Number.isFinite(lng)) {
    return {
      lat,
      lng,
    };
  }

  /*
    در غیر آن صورت از مختصات داخلی استفاده می‌کنیم
  */

  const name = normalizePortName(port.name);

  return PORT_COORDINATES[name] || null;
}

/* =====================================================
   MAP CONTROLLER
===================================================== */

function MapController({ locations, selectedLocation }) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    /*
      برنچ انتخاب شده
    */

    if (selectedLocation && Number.isFinite(Number(selectedLocation.lat)) && Number.isFinite(Number(selectedLocation.lng))) {
      map.flyTo([Number(selectedLocation.lat), Number(selectedLocation.lng)], 3.8, {
        duration: 0.8,
      });

      return;
    }

    /*
      فقط یک نتیجه
    */

    if (locations.length === 1 && Number.isFinite(Number(locations[0].lat)) && Number.isFinite(Number(locations[0].lng))) {
      map.flyTo([Number(locations[0].lat), Number(locations[0].lng)], 8, {
        duration: 0.8,
      });

      return;
    }

    /*
      چند نتیجه
    */

    if (locations.length > 1) {
      const validLocations = locations.filter((location) => Number.isFinite(Number(location.lat)) && Number.isFinite(Number(location.lng)));

      if (validLocations.length > 1) {
        const bounds = L.latLngBounds(validLocations.map((location) => [Number(location.lat), Number(location.lng)]));

        map.fitBounds(bounds, {
          padding: [40, 40],
          maxZoom: 7,
        });
      }
    }
  }, [map, locations, selectedLocation]);

  return null;
}

/* =====================================================
   MAIN MAP
===================================================== */
 
export default function MapView({
  locations = [],
  selectedLocation = null,
  selectedPort = null,
  onSelectLocation,
  onSelectPort,
  popupCloseKey,
  onClearSelectedLocation,
  shipping_rates_to_herat,
}) {
  const [showRustAreas, setShowRustAreas] = useState(false);

  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen((prev) => !prev);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 150);

    return () => clearTimeout(timer);
  }, [isFullscreen]);

  function ClosePopups({ popupCloseKey }) {
    const map = useMap();

    useEffect(() => {
      map.closePopup();
    }, [map, popupCloseKey]);

    return null;
  }
  /* ===================================================
     SELECTED LOCATION PORTS
  =================================================== */

  const selectedLocationPorts = useMemo(() => {
    if (!selectedLocation) {
      return [];
    }

    if (!Array.isArray(selectedLocation.ports)) {
      return [];
    }

    return selectedLocation.ports;
  }, [selectedLocation]);

  /* ===================================================
     PORT DESTINATIONS
  =================================================== */

  const portDestinations = useMemo(() => {
    if (!selectedLocation) {
      return [];
    }

    return selectedLocationPorts
      .map((port, index) => {
        const coords = getPortCoordinates(port);

        if (!coords) {
          return null;
        }

        return {
          id: `${selectedLocation.id}-port-${index}`,

          name: port.name || 'Unknown Port',

          lat: coords.lat,
          lng: coords.lng,

          port,
        };
      })
      .filter(Boolean);
  }, [selectedLocation, selectedLocationPorts]);

  /* ===================================================
     ROUTE LINES
  =================================================== */

  const routeLines = useMemo(() => {
    if (!selectedLocation) {
      return [];
    }

    const sourceLat = Number(selectedLocation.lat);
    const sourceLng = Number(selectedLocation.lng);

    if (!Number.isFinite(sourceLat) || !Number.isFinite(sourceLng)) {
      return [];
    }

    return portDestinations.map((destination) => ({
      id: destination.id,

      positions: [
        [sourceLat, sourceLng],
        [destination.lat, destination.lng],
      ],
    }));
  }, [selectedLocation, portDestinations]);

  /* ===================================================
     SELECTED PORT NAME
  =================================================== */

  const selectedPortName = normalizePortName(selectedPort?.name);

  /* ===================================================
     RENDER
  =================================================== */

  return (
    <div className={`map-wrapper ${isFullscreen ? 'map-wrapper-fullscreen' : ''}`}>
      <button
        type="button"
        className="map-fullscreen-button"
        onClick={toggleFullscreen}
        title={isFullscreen ? 'خروج از حالت تمام صفحه' : 'تمام صفحه'}
        aria-label={isFullscreen ? 'خروج از حالت تمام صفحه' : 'تمام صفحه'}
      >
        {isFullscreen ? <FaCompress /> : <FaExpand />}
      </button>

      {isFullscreen && selectedLocation && (
        <div className="map-fullscreen-location-floating">
          <div className="map-fullscreen-location-floating-info">
            <span className="map-fullscreen-location-floating-icon">📍</span>

            <div className="map-fullscreen-location-floating-text">
              <strong>{selectedLocation.city || selectedLocation.branch}</strong>

              {selectedLocation.branch && selectedLocation.city && selectedLocation.branch !== selectedLocation.city && (
                <span>{selectedLocation.branch}</span>
              )}
            </div>
          </div>

          <button
            type="button"
            className="map-fullscreen-location-floating-clear"
            onClick={onClearSelectedLocation}
            aria-label="حذف Location انتخاب شده"
          >
            ×
          </button>
        </div>
      )}

      <MapContainer center={[35.5, -95.7]} zoom={4} className="map" scrollWheelZoom={true} attributionControl={false}>
        {/* =================================================
            OPEN STREET MAP
        ================================================= */}
        <ClosePopups popupCloseKey={popupCloseKey} />
        <button
          type="button"
          className={`rust-toggle-button ${showRustAreas ? 'active' : ''}`}
          onClick={() => setShowRustAreas((prev) => !prev)}
          title={showRustAreas ? 'مخفی کردن مناطق زنگ‌زدگی' : 'نمایش مناطق زنگ‌زدگی'}
          aria-label={showRustAreas ? 'مخفی کردن مناطق زنگ‌زدگی' : 'نمایش مناطق زنگ‌زدگی'}
        >
          <span className="rust-toggle-icon">⚠</span>

          <span className="rust-toggle-text">خطر زنگ‌زدگی</span>

          <span className="rust-toggle-switch">
            <span className="rust-toggle-knob" />
          </span>
        </button>

        <TileLayer attribution="&copy; OpenStreetMap contributors" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" maxZoom={19} />

        {/* =================================================
    RUST / CORROSION AREAS
================================================= */}

        {showRustAreas &&
          RUST_AREAS.map((area) => (
            <Circle
              key={area.name}
              center={[area.lat, area.lng]}
              radius={area.radius}
              pathOptions={{
                color: '#dc2626',
                weight: 1.5,
                opacity: 0.35,
                fillColor: '#ef4444',
                fillOpacity: area.opacity,
              }}
            />
          ))}
        {/* =================================================
    STRAIT OF HORMUZ
================================================= */}

        <Circle
          center={[HORMUZ_STRAIT.lat, HORMUZ_STRAIT.lng]}
          radius={HORMUZ_STRAIT.radius}
          pathOptions={{
            color: '#dc2626',
            weight: 3,
            opacity: 0.9,
            fillOpacity: 0,
            dashArray: '8 6',
          }}
        />

        <Marker position={[HORMUZ_STRAIT.lat, HORMUZ_STRAIT.lng]} icon={hormuzIcon} zIndexOffset={1000}>
          <Popup maxWidth={340} minWidth={300} className="hormuz-popup">
            <div className="hormuz-popup-card" dir="rtl">
              {/* Header */}
              <div className="hormuz-popup-header">
                <div className="hormuz-popup-flag">🇮🇷</div>

                <div className="hormuz-popup-title">
                  <div>تنگه هرمز</div>
                  <span>Hormuz Strait</span>
                </div>

                <div className="hormuz-popup-anchor">⚓</div>
              </div>

              {/* Red line */}
              <div className="hormuz-popup-line">
                <span></span>
              </div>

              {/* Description */}
              <div className="hormuz-popup-description">
                مسیر دریایی مهم میان
                <strong> خلیج فارس </strong>و<strong> دریای عمان </strong>
              </div>

              {/* Info */}
              <div className="hormuz-popup-info">
                <div className="hormuz-info-item">
                  <div className="hormuz-info-icon">🌊</div>
                  <div>
                    <span>نوع موقعیت</span>
                    <strong>تنگه دریایی</strong>
                  </div>
                </div>

                <div className="hormuz-info-item">
                  <div className="hormuz-info-icon">📍</div>
                  <div>
                    <span>منطقه</span>
                    <strong>خلیج فارس</strong>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="hormuz-popup-footer">
                <span>🇮🇷 ایران</span>
                <span>•</span>
                <span>مسیر ترانزیتی دریایی</span>
              </div>
            </div>
          </Popup>
        </Marker>

        {/* =================================================
    MIDDLE EAST TRANSPORT LOCATIONS
================================================= */}

        {TRANSPORT_LOCATIONS.map((location) => (
          <Marker key={location.id} position={[location.lat, location.lng]} icon={transportLocationIcon(location.flag, location.type)}>
            <Popup maxWidth={300} minWidth={160} className="transport-location-popup">
              <div
                dir="rtl"
                style={{
                  width: '100%',
                  textAlign: 'right',
                  padding: '6px 4px',
                  boxSizing: 'border-box',
                  fontFamily: 'inherit',
                }}
              >
                {/* عنوان */}
                <div
                  style={{
                    width: '100%',
                    minWidth: '120px',
                    maxWidth: '280px',
                    textAlign: 'right',
                    padding: '4px 3px',
                    boxSizing: 'border-box',
                    fontFamily: 'inherit',
                  }}
                >
                  <span
                    style={{
                      fontSize: '20px',
                      lineHeight: 1,
                    }}
                  >
                    {location.flag}
                  </span>

                  <div>
                    <div
                      style={{
                        fontSize: '16px',
                        fontWeight: 900,
                        lineHeight: 1.5,
                      }}
                    >
                      {location.name}
                    </div>

                    <div
                      style={{
                        fontSize: '12px',
                        color: '#6b7280',
                        fontWeight: 700,
                        marginTop: '1px',
                      }}
                    >
                      {location.country}
                    </div>
                  </div>
                </div>

                {/* خط جداکننده */}
                <div
                  style={{
                    height: '1px',
                    background: 'rgba(0,0,0,0.10)',
                    margin: '7px 0',
                  }}
                />

                {/* نوع موقعیت */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '6px',
                  }}
                >
                  <span
                    style={{
                      fontWeight: 800,
                      fontSize: '13px',
                    }}
                  >
                    نوع موقعیت
                  </span>

                  <strong
                    style={{
                      fontSize: '13px',
                      color: location.type === 'border' ? '#b45309' : '#2563eb',
                    }}
                  >
                    {location.type === 'border' ? 'نقطه مرزی' : 'بندر دریایی'}
                  </strong>
                </div>

                {/* توضیحات */}
                <div
                  style={{
                    fontSize: '12px',
                    lineHeight: 1.8,
                    color: '#374151',
                    background: location.type === 'border' ? '#fffbeb' : '#eff6ff',
                    borderRadius: '8px',
                    padding: '7px 8px',
                    fontWeight: 700,
                  }}
                >
                  {location.description}
                </div>
              </div>
            </Popup>
          </Marker>
        ))}

        {/* =================================================
            MAP CONTROLLER
        ================================================= */}

        <MapController locations={locations} selectedLocation={selectedLocation} />

        {/* =================================================
            GREEN ROUTES
        ================================================= */}

        {routeLines.map((route) => (
          <Polyline
            key={route.id}
            positions={route.positions}
            pathOptions={{
              color: '#16a34a',
              weight: 5,
              opacity: 0.9,
              dashArray: '10 7',
              lineCap: 'round',
              lineJoin: 'round',
            }}
          />
        ))}

        {/* =================================================
            PORT DESTINATIONS
        ================================================= */}

 
{portDestinations.map((destination) => {
  const port = destination.port ?? {};

  const portName = destination.name || port.name || 'پورت نامعلوم';

  const isSelectedPort =
    Boolean(selectedPortName) &&
    normalizePortName(portName) === selectedPortName;

  const isUnavailable =
    String(port.avill ?? '').trim().toLowerCase() === 'false';

  // نرخ‌های عمومی از JSON
  const rates = shipping_rates_to_herat ?? {};

  // اعتبارسنجی قیمت؛ null، خالی و صفر قیمت معتبر نیستند
  const isValidPrice = (value) => {
    if (
      value === null ||
      value === undefined ||
      String(value).trim() === ''
    ) {
      return false;
    }

    const number = Number(value);
    return Number.isFinite(number) && number > 0;
  };

  // مسیرهای انتقال از قیمت‌های پورت در JSON جدید
  const routes = [
    {
      id: 'tr',
      name: 'ترکیه',
      shippingLabel: 'انتقال تا ترکیه',
      heratLabel: 'ترکیه تا هرات',
      shippingPrice: port.shipping_to_tr,
      heratPrice: rates.tr,
    },
    {
      id: 'uae',
      name: 'امارات',
      shippingLabel: 'انتقال تا امارات',
      heratLabel: 'امارات تا هرات',
      shippingPrice: port.shipping_to_uae,
      heratPrice: rates.uae,
    },
  ].filter((route) => isValidPrice(route.shippingPrice));

  // انتخاب پورت
  const handleSelectPort = () => {
    if (onSelectPort && selectedLocation) {
      onSelectPort(selectedLocation, port);
    }
  };

  return (
    <div key={`port-${destination.id}`}>
      {/* دایرهٔ کوچک پورت */}
      <CircleMarker
        center={[destination.lat, destination.lng]}
        radius={isSelectedPort ? 8 : 5}
        pathOptions={{
          color: isSelectedPort ? '#941e26' : '#2563eb',
          weight: isSelectedPort ? 2 : 1.5,
          opacity: 1,
          fillColor: isSelectedPort ? '#dc3838' : '#3b82f6',
          fillOpacity: 0.65,
        }}
      />

      {/* نشانگر و پنجرهٔ پورت */}
      <Marker
        position={[destination.lat, destination.lng]}
        icon={isSelectedPort ? selectedPortIcon : portIcon}
        eventHandlers={{
          click: () => {
            handleSelectPort();
          },
        }}
      >
        <Popup
          maxWidth={250}
          minWidth={200}
          className="port-popup"
        >
          <div
            className="map-popup"
            dir="rtl"
            style={{
              width: '100%',
              maxHeight: '240px',
              overflowY: 'auto',
              overflowX: 'hidden',
              boxSizing: 'border-box',
              padding: '12px',
              paddingTop: '20px',
              textAlign: 'right',
              fontSize: '11px',
              lineHeight: 1.5,
            }}
          >
            {/* عنوان پورت */}
            <div
              style={{
  fontSize: '13px',
  fontWeight: 900,
  color: isSelectedPort ? '#2563eb' : '#111827',
  direction: 'ltr',
  textAlign: 'left',
}}
            >
              🚢 {portName}
            </div>

            <div
              style={{
                color: '#6b7280',
                fontSize: '10px',
                marginTop: '1px',
              }}
            >
              پورت مقصد
            </div>

            <div
              style={{
                borderTop: '1px solid #e5e7eb',
                margin: '5px 0',
              }}
            />

            {/* وضعیت پورت */}
            {isUnavailable ? (
              <div
                style={{
                  padding: '6px',
                  borderRadius: '5px',
                  background: '#fef2f2',
                  color: '#dc2626',
                  fontSize: '11px',
                  fontWeight: 800,
                  textAlign: 'center',
                }}
              >
                انتقال از این پورت فعلاً در دسترس نیست.
              </div>
            ) : routes.length > 0 ? (
              routes.map((route) => {
                const shippingPrice = Number(route.shippingPrice);

                const hasHeratRate = isValidPrice(route.heratPrice);

                const heratPrice = hasHeratRate
                  ? Number(route.heratPrice)
                  : null;

                const total = hasHeratRate
                  ? shippingPrice + heratPrice
                  : null;

                return (
                  <div
                    key={route.id}
                    style={{
                      borderTop: '1px solid #eee',
                      paddingTop: '5px',
                      marginTop: '5px',
                    }}
                  >
                    {/* نام مسیر */}
                    <div
                      style={{
                        color: '#1d4ed8',
                        fontSize: '11px',
                        fontWeight: 900,
                        marginBottom: '3px',
                      }}
                    >
                      📍 مسیر {route.name}
                    </div>

                    {/* نرخ تا کشور مقصد */}
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '5px',
                        marginBottom: '3px',
                      }}
                    >
                      <span>{route.shippingLabel}</span>

                      <strong
                        dir="ltr"
                        style={{ whiteSpace: 'nowrap' }}
                      >
                        ${shippingPrice.toLocaleString()}
                      </strong>
                    </div>

                    {/* نرخ تا هرات */}
                    {hasHeratRate ? (
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          gap: '5px',
                          marginBottom: '3px',
                        }}
                      >
                        <span>{route.heratLabel}</span>

                        <strong
                          dir="ltr"
                          style={{ whiteSpace: 'nowrap' }}
                        >
                          ${heratPrice.toLocaleString()}
                        </strong>
                      </div>
                    ) : (
                      <div
                        style={{
                          color: '#b45309',
                          background: '#fffbeb',
                          borderRadius: '4px',
                          padding: '3px 5px',
                          fontSize: '10px',
                        }}
                      >
                        نرخ {route.name} تا هرات ثبت نشده است.
                      </div>
                    )}

                    {/* مجموع */}
                    {hasHeratRate && (
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          gap: '5px',
                          borderTop: '1px solid #eee',
                          paddingTop: '4px',
                          marginTop: '4px',
                          fontWeight: 900,
                        }}
                      >
                        <span>مجموع تا هرات</span>

                        <strong
                          dir="ltr"
                          style={{
                            color: '#15803d',
                            fontSize: '12px',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          ${total.toLocaleString()}
                        </strong>
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div
                style={{
                  color: '#b45309',
                  background: '#fffbeb',
                  borderRadius: '5px',
                  padding: '5px',
                  fontSize: '10px',
                }}
              >
                نرخ انتقال برای این پورت ثبت نشده است.
              </div>
            )}

            {/* دکمهٔ انتخاب */}
            <button
              type="button"
              style={{
                width: '100%',
                marginTop: '7px',
                padding: '6px',
                border: 'none',
                borderRadius: '6px',
                background: isSelectedPort ? '#15803d' : '#2563eb',
                color: '#fff',
                fontSize: '11px',
                fontWeight: 800,
                cursor: 'pointer',
              }}
              onClick={handleSelectPort}
            >
              {isSelectedPort ? '✓ پورت انتخاب شده' : 'انتخاب پورت'}
            </button>
          </div>
        </Popup>
      </Marker>
    </div>
  );
})}
 


        {/* =================================================
            LOCATION / BRANCH MARKERS
        ================================================= */}

        {locations.map((location) => {
          const lat = Number(location.lat);
          const lng = Number(location.lng);

          if (!Number.isFinite(lat) || !Number.isFinite(lng)) {
            return null;
          }

         

   
 
const isSelected =
  selectedLocation && selectedLocation.id === location.id;

// نرخ‌های عمومی انتقال تا هرات از JSON
const shippingRatesToHerat = shipping_rates_to_herat ?? {};




return (
  <Marker
    key={location.id}
    position={[lat, lng]}
    icon={isSelected ? selectedIcon : defaultIcon}
    eventHandlers={{
      click: (e) => {
        if (onSelectLocation) {
          onSelectLocation(location);
        }

        setTimeout(() => {
          e.target.openPopup();
        }, 50);
      },
    }}
  >
    <Popup>
      <div className="map-popup">
        {/* LOCATION INFORMATION */}
        {location.branch && (
          <div className="popup-branch">
            <div className="popup-title">{location.branch}</div>
          </div>
        )}

        <div className="popup-state">
          {location.city || location.branch || 'Location'}
        </div>

        {location.state && (
          <div className="popup-state">{location.state}</div>
        )}

        <div className="popup-divider" />

        {/* PORTS AND SHIPPING PRICES */}
 
 
{/* PORTS AND SHIPPING PRICES */}
{Array.isArray(location.ports) && location.ports.length > 0 && (
  <div
    style={{
      maxHeight: '220px',
      overflowY: 'auto',
      overflowX: 'hidden',
      padding: '2px',
      marginTop: '4px',
      direction: 'rtl',
    }}
  >
    {location.ports.map((port, index) => {
      const isUnavailable =
        String(port?.avill ?? '').trim().toLowerCase() === 'false';

      const isSelectedPort =
        Boolean(selectedPortName) &&
        normalizePortName(port?.name) === selectedPortName;

      const rates = shipping_rates_to_herat ?? {};

      const shippingToTurkey = port?.shipping_to_tr;
      const shippingToUAE = port?.shipping_to_uae;

      const turkeyToHerat = rates.tr;
      const uaeToHerat = rates.uae;

      const isValidPrice = (value) => {
        if (
          value === null ||
          value === undefined ||
          String(value).trim() === ''
        ) {
          return false;
        }

        const number = Number(value);
        return Number.isFinite(number) && number > 0;
      };

      const destinations = [];

      if (isValidPrice(shippingToTurkey)) {
        destinations.push({
          id: 'tr',
          name: 'ترکیه',
          firstLabel: 'الی ترکیه',
          secondLabel: 'ترکیه الی هرات',
          shippingPrice: Number(shippingToTurkey),
          heratPrice: isValidPrice(turkeyToHerat)
            ? Number(turkeyToHerat)
            : null,
        });
      }

      if (isValidPrice(shippingToUAE)) {
        destinations.push({
          id: 'uae',
          name: 'امارات',
          firstLabel: 'الی امارات',
          secondLabel: 'امارات الی هرات',
          shippingPrice: Number(shippingToUAE),
          heratPrice: isValidPrice(uaeToHerat)
            ? Number(uaeToHerat)
            : null,
        });
      }

      return (
        <div
          key={`${location.id}-${port?.id ?? index}`}
          className="popup-port"
          style={{
            border: isSelectedPort
              ? '1px solid #2563eb'
              : '1px solid #e5e7eb',
            background: isSelectedPort ? '#eff6ff' : '#fff',
            borderRadius: '7px',
            padding: '6px 7px',
            marginBottom: '5px',
            direction: 'rtl',
            textAlign: 'right',
            cursor: 'pointer',
            fontSize: '11px',
            lineHeight: 1.5,
          }}
          onClick={() => onSelectPort?.(location, port)}
        >
          {/* نام پورت */}
          <div
            style={{
              color: isSelectedPort ? '#2563eb' : '#111827',
              fontWeight: 800,
              fontSize: '11px',
              marginBottom: '3px',
            }}
          >
            {isSelectedPort ? '🔵 ' : '🚢 '}
            {port?.name || 'پورت نامعلوم'}
          </div>

          {isUnavailable ? (
            <div
              style={{
                color: '#dc2626',
                fontWeight: 700,
                fontSize: '11px',
                textAlign: 'center',
                padding: '4px 0',
              }}
            >
              انتقال فعلاً در دسترس نیست!
            </div>
          ) : destinations.length > 0 ? (
            destinations.map((destination) => {
              const hasHeratRate = isValidPrice(destination.heratPrice);

              const totalPrice = hasHeratRate
                ? destination.shippingPrice + destination.heratPrice
                : null;

              return (
                <div
                  key={destination.id}
                  style={{
                    borderTop: '1px solid #eee',
                    paddingTop: '4px',
                    marginTop: '4px',
                  }}
                >
                  <div
                    style={{
                      fontWeight: 800,
                      color: '#1d4ed8',
                      fontSize: '11px',
                      marginBottom: '3px',
                    }}
                  >
                    📍 {destination.name}
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      gap: '6px',
                      fontSize: '11px',
                    }}
                  >
                    <span>{destination.firstLabel}</span>
                    <strong dir="ltr">
                      ${destination.shippingPrice.toLocaleString()}
                    </strong>
                  </div>

                  {hasHeratRate ? (
                    <>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          gap: '6px',
                          fontSize: '11px',
                        }}
                      >
                        <span>{destination.secondLabel}</span>
                        <strong dir="ltr">
                          ${destination.heratPrice.toLocaleString()}
                        </strong>
                      </div>

                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          gap: '6px',
                          borderTop: '1px solid #eee',
                          paddingTop: '3px',
                          marginTop: '3px',
                          fontSize: '11px',
                        }}
                      >
                        <strong>مجموع تا هرات</strong>
                        <strong
                          dir="ltr"
                          style={{
                            color: '#15803d',
                            fontSize: '12px',
                          }}
                        >
                          ${totalPrice.toLocaleString()}
                        </strong>
                      </div>
                    </>
                  ) : (
                    <div
                      style={{
                        color: '#b45309',
                        fontSize: '10px',
                        marginTop: '2px',
                      }}
                    >
                      نرخ انتقال تا هرات ثبت نشده است.
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div
              style={{
                color: '#b45309',
                fontSize: '10px',
                padding: '3px 0',
              }}
            >
              نرخ انتقال ثبت نشده است.
            </div>
          )}
        </div>
      );
    })}
  </div>
)}
 

 

      </div>
    </Popup>
  </Marker>
);

 
        })}

        {/* =================================================
            SELECTED LOCATION HIGHLIGHT
        ================================================= */}

        {selectedLocation && Number.isFinite(Number(selectedLocation.lat)) && Number.isFinite(Number(selectedLocation.lng)) && (
          <CircleMarker
            center={[Number(selectedLocation.lat), Number(selectedLocation.lng)]}
            radius={24}
            pathOptions={{
              color: '#16a34a',
              weight: 4,
              opacity: 1,
              fillColor: '#22c55e',
              fillOpacity: 0.22,
            }}
          />
        )}
      </MapContainer>
    </div>
  );
}
