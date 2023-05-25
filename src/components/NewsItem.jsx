import React from "react";

function NewsItem(props) {
  const { title, description, imageUrl, newsUrl, author, date } = props;
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small>
              By {author ? author : "Unknown"} on{" "}
              {date ? new Date(date).toGMTString() : "Unknown"}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-primary"
            rel="noreferrer"
          >
            Read more
          </a>
        </div>
      </div>
    </>
  );
}

export default NewsItem;
