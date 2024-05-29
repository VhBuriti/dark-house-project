import { GetPost } from "../../utils/getPost";
import { useEffect, useState } from "react";

import "../../styles/postPage.scss";

export default function PostPage() {
  const [post, setPost]: any = useState({});

  const regex = /[^-]+$/;
  const match = window.location.href.match(regex);
  const postId = match ? match[0] : "";

  const { author, title, content, postDate, category, _id, postThumb } = post;

  useEffect(() => {
    (async function () {
      const currentPost = await GetPost(postId);
      console.log("currentPost", currentPost);
      setPost(currentPost);
    })();
  }, []);

  const paragraphs = content?.split(/\n\n/);
  console.log("content", paragraphs);

  return (
    <div className="post-page__container">
      <div className="post-page__inner-container">
        <div>
          <div className="post-page__title-container">
            <h2>{title}</h2>
          </div>
          <div>
            <span>Written by: {author}</span>
          </div>
          <div>
          <span>{postDate}·</span>
          <span>{category}</span>
        </div>
        </div>
        <img src={postThumb} />


        {paragraphs?.map((paragraph: string) => (
          <p>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
