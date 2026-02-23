"use client";
import React from "react";

const Loading = () => {
  return (
    <>
      <style jsx>{`
        .spinner-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          padding: 60px 0;
        }

        .spinner {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: conic-gradient(
            rgba(255, 255, 255, 0.9),
            rgba(113, 17, 17, 0.08),
            rgba(113, 17, 17, 0.25),
            rgba(113, 17, 17, 0.6),
            #711111
          );
          -webkit-mask: radial-gradient(farthest-side, transparent 70%, black 71%);
          mask: radial-gradient(farthest-side, transparent 70%, black 71%);
          animation: spin 0.9s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>

      <div className="spinner-container">
        <div className="spinner"></div>
      </div>
    </>
  );
};

export default Loading;
