import React, { useEffect, useRef, useState } from "react";
import Cards from "./Cards";
import Loader from "./Loader";
import NavBar from "./NavBar";

const Main = () => {
  const [cityName, setCityName] = useState("Satara");
  const [newsData, setNewsData] = useState();
  const [status, setStatus] = useState(null);
  const [loadCount, setLoadCount] = useState(null);
  const [initialNum, setInitialNum] = useState(0);
  const [loadingComplete, setLoadingComplete] = useState(false);
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
    setLoadingComplete(false);
    setCityName(inputRef.current.value);
    setInitialNum(0);
    console.log(newsData);
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
      <NavBar inputRef={inputRef} handleChange={handleChange} />
      {status && !loadingComplete && (
        <Loader
          number={loadCount}
          initialNum={initialNum}
          setInitialNum={setInitialNum}
          loadingComplete={loadingComplete}
          setLoadingComplete={setLoadingComplete}
        />
      )}
      {loadingComplete && <Cards data={newsData} />}
    </>
  );
};
export default Main;
