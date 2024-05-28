import React from "react";
import "../../../styles/postCard.scss";

export default function PostCard({ postContent }: any) {
  const { author, title, content, postDate, category, _id, postThumb } =
    postContent;
  const postUrl = title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");

  return (
    <div className="post-card__container">
      <a href={`/story/${postUrl}-${_id}`}>
        <div className="post-card__author-details">
          <img
            src={require("../../../assets/placeholder.webp")}
            alt=""
            className="post-card__avatar"
          />
          <p className="post-card__author">{author}</p>
        </div>
        <div>
          <p className="post-card__title">{title}</p>
        </div>
        <div>
          <p className="post-card__description">{content}</p>
        </div>
        <div className="post-card__additional-properties">
          <p className="post-card__read-time">5 min read</p>
          <span>.</span>
          <p className="post-card__publish-date">{postDate}</p>
          <span>.</span>
          {category && <p className="post-card__article-type">{category}</p>}
        </div>
      </a>

      <div>
        <img src={postThumb} />
      </div>
    </div>
  );
}
