"use client";
import React, { useState, useEffect } from "react";

const Preloader = ({ onClose }) => {
  const [isPreloaderVisible, setIsPreloaderVisible] = useState(true);
  const [isPreloaderClosed, setIsPreloaderClosed] = useState(false);
  const handleCloseClick = () => {
    setIsPreloaderClosed(true); // Set a state variable to track that the preloader is closed
    onClose(); // Call the onClose function passed from the parent component
  };

  useEffect(() => {
    // Hide the preloader after a delay (1600 milliseconds)
    const timeoutId = setTimeout(() => {
      setIsPreloaderVisible(false);
    }, 4000);

    // Cleanup the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);

  // Define the class names for the egns-preloader element
  const preloaderClassNames = `egns-preloader ${
    isPreloaderClosed ? "close" : ""
  }`;
  return (
    isPreloaderVisible && (
      <div className={preloaderClassNames} >
        {/* <div className="preloader-close-btn" onClick={handleCloseClick}>
          <span>
            <i className="bi bi-x-lg" /> Close
          </span>
        </div> */}
        <div className="container h-full w-full flex justify-center items-center">
          <div className="row d-flex justify-content-center">
            <div className="col-6">
              <div className="circle-border">
                <div className="moving-circle" />
                <div className="moving-circle" />
                <div className="moving-circle" />
                <svg
                  width="180px"
                  height="150px"
                  viewBox="0 0 187.3 93.7"
                  preserveAspectRatio="xMidYMid meet"
                  style={{
                    left: "50%",
                    top: "50%",
                    position: "absolute",
                    transform: "translate(-50%, -50%) matrix(1, 0, 0, 1, 0, 0)",
                  }}
                >
                  <path
                    stroke="#D90A2C"
                    id="outline"
                    fill="none"
                    strokeWidth={4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit={10}
                    d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"
                  />
                  <path
                    id="outline-bg"
                    opacity="0.05"
                    fill="none"
                    stroke="#959595"
                    strokeWidth={4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit={10}
                    d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Preloader;
