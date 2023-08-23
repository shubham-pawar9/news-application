import React, { useEffect, useRef, useState } from "react";
import Cards from "./Cards";
import Loader from "./Loader";

const Main = () => {
  const [cityName, setCityName] = useState("Satara");
  const [newsData, setNewsData] = useState();
  const [status, setStatus] = useState(null);
  const [loadCount, setLoadCount] = useState(null);
  const [initialNum, setInitialNum] = useState(0);
  const inputRef = useRef();
  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=${cityName}&apiKey=b0aea83d13bf4cd581fcbb015a974623`
    )
      .then((response) => response.json())
      .then((data) => setNewsData(data));
  }, [cityName]);
  const handleChange = () => {
    setStatus(true);
    setCityName(inputRef.current.value);

    // setLoadCount(newsData.articles.length);
  };
  useEffect(() => {
    newsData != undefined
      ? setLoadCount(newsData.articles.length)
      : console.log("error");
    // if (newsData.articles != undefined) setLoadCount(newsData.articles.length);
  }, [newsData]);
  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={handleChange}>Submit</button>
      {status && (
        <Loader
          number={loadCount}
          initialNum={initialNum}
          setInitialNum={setInitialNum}
        />
      )}
      {initialNum == loadCount && <Cards data={newsData} />}
    </>
  );
};
export default Main;
