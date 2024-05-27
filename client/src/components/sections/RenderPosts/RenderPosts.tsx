import React, { useEffect, useState } from "react";
import "../../../styles/allPosts.scss";
import PostCard from "../PostCard";
import { GetAllPosts } from "../../../utils/getAllPosts.tsx";

export default function RenderPosts({ selectedCategory }: any) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async function () {
      const allPosts = await GetAllPosts();
      setPosts(allPosts);
    })();
  }, []);

  const filteredPosts =
    selectedCategory !== ""
      ? posts.filter((post: any) => post?.category === selectedCategory)
      : posts;

  console.log("selected category", selectedCategory);
  return (
    <div className="all-posts__container">
      {filteredPosts.map((postContent: any) => (
        <>
          <PostCard postContent={postContent} />
        </>
      ))}
    </div>
  );
}
