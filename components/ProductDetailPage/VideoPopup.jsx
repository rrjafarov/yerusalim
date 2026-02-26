import React from "react";

const VideoPopup = ({ onClose, youtubeUrl }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // YouTube linkini embed formatına çevir
  const getEmbedUrl = (url) => {
    if (!url) return "";

    // watch?v= olan linklər üçün
    const videoIdMatch = url.match(
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/,
    );

    const videoId = videoIdMatch ? videoIdMatch[1] : null;

    return videoId
      ? `https://www.youtube.com/embed/${videoId}?autoplay=1`
      : url;
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

        <div className="videoPopupInner">
          {youtubeUrl && (
            <iframe
              width="100%"
              height="500"
              src={getEmbedUrl(youtubeUrl)}
              title="Product Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoPopup;