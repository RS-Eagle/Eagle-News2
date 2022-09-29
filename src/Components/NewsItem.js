import { getByTitle } from "@testing-library/react";
import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, publishedAt, sorce } =
      this.props;
    return (
      <div className="card my-2 sd">
        <span
          className="position-absolute top-0  translate-middle badge rounded-pill bg-danger"
          style={{ left: "90%", zIndex: "1" }}
        >
          {sorce}
        </span>
        <img
          src={
            !imageUrl
              ? "https://images.moneycontrol.com/static-mcnews/2022/09/stocks_sensex_nifty_stockmarket1-1-770x433.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />

        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-muted">
              By {author} On {new Date(publishedAt).toGMTString()}
            </small>
          </p>
          <a href={newsUrl} target="_blank" className="btn btn-outline-warning">
            Read More
          </a>
        </div>
      </div>
    );
  }
}
