import React from "react";
import '../../../styles/allPosts.scss'
import PostCard from "../PostCard";

export default function AllPosts() {

    return(
        <div className="all-posts__container">
            <PostCard />
            <PostCard />
            <PostCard />
        </div>
    )
}