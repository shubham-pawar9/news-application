import React, { useEffect, useState, useRef } from "react";

const Loader = ({
  number,
  initialNum,
  setInitialNum,
  loadingComplete,
  setLoadingComplete,
}) => {
  const loadCountr = useRef(null);

  useEffect(() => {
    loadCountr.current = setInterval(() => {
      setInitialNum((prevNum) => prevNum + 1);
    }, 30);

    return () => {
      clearInterval(loadCountr.current);
    };
  }, []);

  useEffect(() => {
    if (initialNum === number) {
      clearInterval(loadCountr.current);
      setLoadingComplete(true);
    }
  }, [initialNum, number]);

  const loaderStyles = {
    animation: loadingComplete ? "none" : `spin 3s linear infinite`,
    borderTopColor: loadingComplete ? "transparent" : "#3498db",
    clip: loadingComplete
      ? "rect(0, 100px, 100px, 0)"
      : "rect(0, 50px, 100px, 0)",
  };

  return (
    <div className="LoaderContainer">
      <>
        {/* <div className="countShow">{initialNum}</div> */}
        <div className="circle-loader">
          <div className="circle"></div>
        </div>
      </>
    </div>
  );
};

export default Loader;
