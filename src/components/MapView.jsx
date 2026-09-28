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
 
export default function MapView({ locations = [], selectedLocation = null, selectedPort = null, onSelectLocation, onSelectPort, popupCloseKey }) {


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

  <span className="rust-toggle-text">
   خطر زنگ‌زدگی
  </span>

  <span className="rust-toggle-switch">
    <span className="rust-toggle-knob" />
  </span>
</button>

        <TileLayer attribution="&copy; OpenStreetMap contributors" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" maxZoom={19} />
       
       {/* =================================================
    RUST / CORROSION AREAS
================================================= */}
{/* =================================================
    RUST / CORROSION AREAS
================================================= */}

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
          const isSelectedPort = selectedPortName && normalizePortName(destination.name) === selectedPortName;

          return (
            <div key={`port-${destination.id}`}>
              {/* =========================================
                  COLORED PORT CIRCLE
              ========================================= */}

              <CircleMarker
                center={[destination.lat, destination.lng]}
                radius={isSelectedPort ? 13 : 10}
                pathOptions={{
                  color: isSelectedPort ? '#941e26' : '#2563eb',

                  weight: isSelectedPort ? 4 : 3,

                  opacity: 1,

                  fillColor: isSelectedPort ? '#dc3838' : '#3b82f6',

                  fillOpacity: isSelectedPort ? 0.55 : 0.45,
                }}
              />

              {/* =========================================
                  PORT ICON + POPUP
              ========================================= */}

             {String(destination.port?.avill).toLowerCase() === 'false' ? (
  <div
    style={{
      color: '#dc2626',
      fontWeight: 800,
      fontSize: '13px',
      textAlign: 'center',
      direction: 'rtl',
      lineHeight: '1.8',
      padding: '10px 5px',
    }}
  >
    انتقالات در حال حاضر از این پورت قابل دسترس نیست!
  </div>
) : (
  <Marker
    position={[destination.lat, destination.lng]}
    icon={isSelectedPort ? selectedPortIcon : portIcon}
  >
    <Popup
      maxWidth={320}
      minWidth={280}
      maxHeight={420}
      className="port-popup"
    >
      <div
        className="map-popup"
        dir="rtl"
        style={{
          width: '100%',
          maxHeight: '380px',
          overflowY: 'auto',
          overflowX: 'hidden',
          boxSizing: 'border-box',
          paddingLeft: '5px',
          direction: 'rtl',
          textAlign: 'right',
        }}
      >
        {/* PORT NAME */}
        <div
          className="popup-title"
          style={{
            fontWeight: 900,
            fontSize: '16px',
          }}
        >
          {destination.name}
        </div>

        <div
          className="popup-state"
          style={{
            textAlign: 'right',
          }}
        >
          پورت مقصد
        </div>

        <div className="popup-divider" />

        {/* SHIP */}
        <div
          className="popup-price"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            direction: 'rtl',
            width: '100%',
          }}
        >
          <span
            style={{
              textAlign: 'right',
              fontWeight: 700,
            }}
          >
            {destination.port?.country === 'Canada'
              ? 'کرایه انتقال کانادا الی امارات'
              : 'کرایه انتقال امریکا الی ترکیه'}
          </span>

          <strong
            dir="ltr"
            style={{
              direction: 'ltr',
              textAlign: 'left',
              fontWeight: 900,
            }}
          >
            ${Number(destination.port?.ship || 0).toLocaleString()}
          </strong>
        </div>

        {/* HERAT */}
        <div
          className="popup-price"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            direction: 'rtl',
            width: '100%',
          }}
        >
          <span
            style={{
              textAlign: 'right',
              fontWeight: 700,
            }}
          >
            {destination.port?.country === 'Canada'
              ? 'امارات الی افغانستان (اسلام قلعه)'
              : 'ترکیه الی افغانستان (اسلام قلعه)'}
          </span>

          <strong
            dir="ltr"
            style={{
              direction: 'ltr',
              textAlign: 'left',
              fontWeight: 900,
            }}
          >
            ${Number(destination.port?.herat || 0).toLocaleString()}
          </strong>
        </div>

        {/* TOTAL */}
        <div
          className="popup-total"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            direction: 'rtl',
            width: '100%',
            marginTop: '5px',
            paddingTop: '7px',
            borderTop: '1px solid rgba(0,0,0,0.08)',
          }}
        >
          <span
            style={{
              textAlign: 'right',
              fontWeight: 900,
            }}
          >
            مجموع
          </span>

          <strong
            dir="ltr"
            style={{
              direction: 'ltr',
              textAlign: 'left',
              fontWeight: 950,
              fontSize: '15px',
            }}
          >
            ${Number(destination.port?.total || 0).toLocaleString()}
          </strong>
        </div>

        {/* SELECT BUTTON */}
        <button
          type="button"
          style={{
            width: '100%',
            marginTop: '10px',
            padding: '9px',
            border: 'none',
            borderRadius: '10px',
            background: '#2563eb',
            color: '#fff',
            fontWeight: 800,
            cursor: 'pointer',
          }}
          onClick={() => {
            if (onSelectPort && selectedLocation) {
              onSelectPort(selectedLocation, destination.port);
            }
          }}
        >
          انتخاب پورت
        </button>
      </div>
    </Popup>
  </Marker>
)}
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

          const isSelected = selectedLocation && selectedLocation.id === location.id;

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

                  // Popup همین Location را باز نگه می‌داریم
                  setTimeout(() => {
                    e.target.openPopup();
                  }, 50);
                },
              }}
            >
              <Popup>
                <div className="map-popup">
                  {/* =================================
                      LOCATION
                  ================================= */}

                  {location.branch && (
                    <div className="popup-branch">
                      <div className="popup-title">{location.branch}</div>
                    </div>
                  )}

                  <div className="popup-state">{location.city || location.branch || 'Location'}</div>

                  {location.state && <div className="popup-state">{location.state}</div>}

                  <div className="popup-divider" />

                  {/* =================================
                      PORTS LIST
                  ================================= */}

                  {Array.isArray(location.ports) && location.ports.length > 0 && (
                    <div
                      style={{
                        maxHeight: '180px',
                        overflowY: 'auto',
                        overflowX: 'hidden',
                        paddingLeft: '2px',
                        paddingRight: '1px',
                        marginTop: '8px',
                        direction: 'rtl',
                      }}
                    >
                      {location.ports.map((port, index) => {
                        const isSelectedPort = selectedPortName && normalizePortName(port?.name) === selectedPortName;

                       const isUnavailable =
  String(port?.avill).toLowerCase() === 'false';

return isUnavailable ? (
  <div
    key={`${location.id}-${index}`}
    style={{
      color: '#dc2626',
      fontWeight: 800,
      fontSize: '13px',
      textAlign: 'center',
      direction: 'rtl',
      padding: '8px 4px',
      lineHeight: '1.8',
    }}
  >
    انتقالات از این برنچ فعلاً در دسترس نیست!
  </div>
) : (
  <div
    className="popup-port"
    key={`${location.id}-${index}`}
    style={{
      cursor: 'pointer',
      border: isSelectedPort
        ? '2px solid #2563eb'
        : '1px solid rgba(0,0,0,0.08)',
      background: isSelectedPort ? '#eff6ff' : '#ffffff',
      borderRadius: '10px',
      padding: '9px',
      marginBottom: '7px',
      direction: 'rtl',
      textAlign: 'right',
    }}
    onClick={() => {
      if (onSelectPort) {
        onSelectPort(location, port);
      }
    }}
  >
    {/* PORT NAME */}
    <div
      className="popup-port-name"
      style={{
        color: isSelectedPort ? '#2563eb' : '#111827',
        fontWeight: 800,
        fontSize: '13px',
        marginBottom: '7px',
        textAlign: 'right',
      }}
    >
      {isSelectedPort && '🔵 '}
      🚢 {port?.name || 'پورت نامعلوم'}
    </div>

    {/* SHIP */}
    <div
      className="popup-price"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        direction: 'rtl',
      }}
    >
      <span
        style={{
          textAlign: 'right',
          fontWeight: 700,
        }}
      >
        {port?.country === 'Canada'
          ? 'کانادا ← امارات'
          : 'آمریکا ← ترکیه'}
      </span>

      <strong
        dir="ltr"
        style={{
          direction: 'ltr',
          textAlign: 'left',
        }}
      >
        ${Number(port?.ship || 0).toLocaleString()}
      </strong>
    </div>

    {/* HERAT */}
    <div
      className="popup-price"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        direction: 'rtl',
      }}
    >
      <span
        style={{
          textAlign: 'right',
          fontWeight: 700,
        }}
      >
        {port?.country === 'Canada'
          ? 'امارات ← اسلام قلعه'
          : 'ترکیه ← اسلام قلعه'}
      </span>

      <strong
        dir="ltr"
        style={{
          direction: 'ltr',
          textAlign: 'left',
        }}
      >
        ${Number(port?.herat || 0).toLocaleString()}
      </strong>
    </div>

    {/* TOTAL */}
    <div
      className="popup-total"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        direction: 'rtl',
        marginTop: '5px',
        paddingTop: '6px',
        borderTop: '1px solid rgba(0,0,0,0.08)',
      }}
    >
      <span
        style={{
          textAlign: 'right',
          fontWeight: 900,
        }}
      >
        مجموع
      </span>

      <strong
        dir="ltr"
        style={{
          direction: 'ltr',
          textAlign: 'left',
          fontWeight: 900,
        }}
      >
        ${Number(port?.total || 0).toLocaleString()}
      </strong>
    </div>
  </div>
);
                      })}
                    </div>
                  )}

                  {/* =================================
                      COORDINATES
                  ================================= */}

                  <div className="popup-coordinates">
                    {Number(location.lat).toFixed(5)}
                    {' , '}
                    {Number(location.lng).toFixed(5)}
                  </div>
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
