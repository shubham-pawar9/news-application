import { useEffect, useState, useRef } from "react";

const Loader = ({ number, initialNum, setInitialNum }) => {
  const loadCountr = useRef(null);
  useEffect(() => {
    loadCountr.current = setInterval(() => {
      setInitialNum((prevNum) => prevNum + 1);
    }, 100);
    return () => {
      clearInterval(loadCountr.current);
    };
  }, []);
  useEffect(() => {
    if (initialNum === number) {
      clearInterval(loadCountr.current);
    }
  }, [initialNum, number]);
  return (
    <>
      <div className="Loader">{initialNum}</div>
    </>
  );
};
export default Loader;
