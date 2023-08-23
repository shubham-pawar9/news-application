import { useEffect, useState } from "react";

const Cards = ({ data }) => {
  return (
    <>
      <div className="Main">
        {data.articles &&
          data.articles.map((value, index) => {
            if (value.urlToImage != null)
              return (
                <div className="cards" key={index}>
                  <span className="heading">{value.title}</span>
                  <button className="readMoreBtn">Read More</button>
                  <img
                    className="headingImg"
                    src={value.urlToImage}
                    alt="News-Source-Image"
                  />
                  <div className="details">
                    <span className="sourceName">{value.source.name}</span>

                    <span className="publishedAt">{value.publishedAt}</span>
                  </div>
                </div>
              );
          })}
      </div>
    </>
  );
};
export default Cards;
