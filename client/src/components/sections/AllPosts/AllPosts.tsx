import React, { useEffect, useState } from "react";
import "../../../styles/allPosts.scss";
import PostCard from "../PostCard";
import { GetAllPosts } from "../../../utils/getAllPosts.tsx";

export default function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async function () {
      const allPosts = await GetAllPosts();
      setPosts(allPosts);
    })();
    
  }, []);

  return (
    <div className="all-posts__container">
      {posts.map((postContent: any) => (
        <>
          <PostCard postContent={postContent}/>
        </>
      ))}
    </div>
  );
}
