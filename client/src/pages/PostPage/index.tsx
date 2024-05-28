import { GetPost } from "../../utils/getPost";
import { useEffect, useState } from "react";

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
    <>
      <h2>{title}</h2>
      <img src={postThumb} />
      <div>
        <span>{author}·</span>
        <span>{postDate}·</span>
        <span>{category}</span>
      </div>

      {paragraphs?.map((paragraph: string) => (
        <p>{paragraph}</p>
      ))}
    </>
  );
}
