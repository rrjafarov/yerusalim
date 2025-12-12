"use client";

import React from "react";

const DeleteAddress = ({ onClose }) => {
  const handleOverlayClick = (e) => {
    // yalnız overlay-in özünə klik olunanda bağlansın
    if (e.target === e.currentTarget && onClose) {
      onClose();
    }
  };

  const handleCloseClick = () => {
    if (onClose) {
      onClose();
    }
  };

  const handleNoClick = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="deleteAddressOverlay" onClick={handleOverlayClick}>
      <div className="deleteAddress">
        <div className="deleteAddressItems">
          <div className="infoMark">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
            >
              <path
                d="M18 3.75C25.8701 3.75 32.25 10.1299 32.25 18C32.25 25.8701 25.8701 32.25 18 32.25C10.1299 32.25 3.75 25.8701 3.75 18C3.75 10.1299 10.1299 3.75 18 3.75ZM18 5.25C10.9584 5.25 5.25 10.9584 5.25 18C5.25 25.0416 10.9584 30.75 18 30.75C25.0416 30.75 30.75 25.0416 30.75 18C30.75 10.9584 25.0416 5.25 18 5.25ZM18 15.75C18.4142 15.75 18.75 16.0858 18.75 16.5V24C18.75 24.4142 18.4142 24.75 18 24.75C17.5858 24.75 17.25 24.4142 17.25 24V16.5C17.25 16.0858 17.5858 15.75 18 15.75ZM18 10.5C18.8284 10.5 19.5 11.1716 19.5 12C19.5 12.8284 18.8284 13.5 18 13.5C17.1716 13.5 16.5 12.8284 16.5 12C16.5 11.1716 17.1716 10.5 18 10.5Z"
                fill="#AB1D1D"
              />
            </svg>
          </div>
          <span>Want to delete address?</span>
          <p>If you delete this address ll be deleted we couldnt recovered.</p>
          <div className="deleteAddressButtons">
            <button
              className="deleteAddressButtonsNo"
              type="button"
              onClick={handleNoClick}
            >
              No, back
            </button>
            <button className="deleteAddressButtonsYes" type="button">
              yes, delete
            </button>
          </div>

          <button
            className="deleteAddressCloseIcon"
            type="button"
            onClick={handleCloseClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <g opacity="0.5">
                <path
                  d="M13.1465 4.14648C13.3417 3.95122 13.6583 3.95122 13.8535 4.14648C14.0487 4.34175 14.0488 4.65827 13.8535 4.85352L9.70703 9L13.8535 13.1465C14.0487 13.3417 14.0488 13.6583 13.8535 13.8535C13.6583 14.0488 13.3417 14.0487 13.1465 13.8535L9 9.70703L4.85352 13.8535C4.65827 14.0488 4.34175 14.0487 4.14648 13.8535C3.95122 13.6583 3.95122 13.3417 4.14648 13.1465L8.29297 9L4.14648 4.85352C3.95122 4.65825 3.95122 4.34175 4.14648 4.14648C4.34175 3.95122 4.65825 3.95122 4.85352 4.14648L9 8.29297L13.1465 4.14648Z"
                  fill="#22282F"
                />
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteAddress;
