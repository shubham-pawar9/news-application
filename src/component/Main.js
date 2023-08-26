import React, { useEffect, useRef, useState } from "react";
import Cards from "./Cards";
import Loader from "./Loader";
import NavBar from "./NavBar";
import data from "../JsonFiles/data.json";
const Main = () => {
  const [cityName, setCityName] = useState("Satara");
  const [newsData, setNewsData] = useState();
  const [status, setStatus] = useState(null);
  const [loadCount, setLoadCount] = useState(100);
  const [initialNum, setInitialNum] = useState(0);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [apiUpdate, setApiUpdate] = useState(
    "https://newsapi.org/v2/everything?q=all&apiKey=b0aea83d13bf4cd581fcbb015a974623"
  );
  const inputRef = useRef();
  useEffect(() => {
    fetch(apiUpdate)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, [apiUpdate]);

  const handleChange = () => {
    setApiUpdate(
      `https://newsapi.org/v2/everything?q=${inputRef.current.value}&apiKey=b0aea83d13bf4cd581fcbb015a974623`
    );
    setStatus(true);
    setLoadingComplete(false);
    setInitialNum(0);
    console.log(newsData);
  };

  const handleDataUpdate = (e) => {
    setNewsData(data[e.target.id]);
    setStatus(true);
    setLoadingComplete(false);
    setInitialNum(0);
  };
  // useEffect(() => {
  //   newsData != undefined
  //     ? setLoadCount(newsData.articles.length)
  //     : console.log("error");
  //   // if (newsData.articles != undefined) setLoadCount(newsData.articles.length);
  // }, [newsData]);
  return (
    <>
      <NavBar
        inputRef={inputRef}
        handleChange={handleChange}
        handleDataUpdate={handleDataUpdate}
      />
      {status && !loadingComplete && (
        <Loader
          number={loadCount}
          initialNum={initialNum}
          setInitialNum={setInitialNum}
          loadingComplete={loadingComplete}
          setLoadingComplete={setLoadingComplete}
        />
      )}
      {!loadingComplete && (
        <div className="rightSide">
          <div className="divHeading">
            {!status && "News from around the globe, at your fingertips"}
            {status && "Loading..."}
          </div>
        </div>
      )}

      {loadingComplete && <Cards data={newsData} />}
    </>
  );
};
export default Main;
