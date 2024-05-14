import React from "react";
import { useState, useEffect } from "react";
import '../../../styles/forms.scss'

export default function CreateNewPost() {
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");

  async function sendForm() {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    const story = {
      author: "Default Author",
      title: postTitle,
      content: postContent,
      postDate: formattedDate,
    };

    const res = await fetch("/api/all-stories", {
      method: "POST",
      body: JSON.stringify({ story: story }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const newPost = await res.json();

    console.log(newPost);
  }

  return (
    <div className="form__create-new-post">
      <form>
        <div>
          <span className="form-descriptive-text">Title</span>
          <input
            type="text"
            name=""
            id=""
            onChange={(e) => {
              setPostTitle(e.target.value);
            }}
          />
        </div>

        <div>
          <span className="form__descriptive-text">Post Content</span>
          <textarea
            name=""
            id=""
            onChange={(e) => {
              setPostContent(e.target.value);
            }}
          />
        </div>

        <button className="form__send-button" type="button" onClick={() => sendForm()}>Create Post</button>
      </form>
    </div>
  );
}
