import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, date, author, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <span
            className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
            style={{
              left: "50%",
              zIndex: "1",
              height: "24px",
              fontSize: "14px",
            }}
          >
            Source : {source}
          </span>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://i.dailymail.co.uk/1s/2023/03/20/09/68879861-0-image-a-70_1679304962152.jpg"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            {/* <p className="card-text">
              <small className="text-muted">Published at {publishedAt}</small>
            </p> */}

            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
