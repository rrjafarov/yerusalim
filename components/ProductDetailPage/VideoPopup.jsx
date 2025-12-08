import React from "react";

const VideoPopup = ({ onClose }) => {
  const handleOverlayClick = (e) => {
    // Yalnız overlay-in özünə klik olanda bağlansın, iç kontente klik olanda yox
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="videoPopupOverlay" onClick={handleOverlayClick}>
      <div className="videoPopupContent">
        <button
          type="button"
          className="videoPopupCloseBtn"
          onClick={onClose}
          aria-label="Close video"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="#161616"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Buraya videonu əlavə edərsən (iframe, video tag və s.) */}
        <div className="videoPopupInner">
          {/* Məs: <iframe ... /> və ya <video ... /> */}
        </div>
      </div>
    </div>
  );
};

export default VideoPopup;
