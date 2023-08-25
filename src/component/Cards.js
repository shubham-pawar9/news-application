import { useEffect, useState } from "react";

const Cards = ({ data }) => {
  return (
    <>
      <div className="outOfMain">
        <div className="main">
          {data.articles &&
            data.articles.map((value, index) => {
              if (value.urlToImage != null) {
                const date = new Date(value.publishedAt);
                return (
                  <div className="cards" key={index}>
                    <span className="heading">{value.title}</span>
                    <div className="middleInfo">
                      <span className="descriptionText">
                        {value.description}
                      </span>
                      <img
                        className="headingImg"
                        src={value.urlToImage}
                        alt="News-Source-Image"
                      />
                      <a
                        className="sourceName"
                        href={value.url}
                        target="_blank"
                      >
                        source: {value.source.name}
                      </a>
                      <span className="publishedAt">{`Published At : ${date.toDateString()} ${date.toLocaleTimeString()}`}</span>
                    </div>
                    {/* <button className="readMoreBtn">Read More</button> */}
                  </div>
                );
              }
            })}
        </div>
      </div>
    </>
  );
};
export default Cards;
