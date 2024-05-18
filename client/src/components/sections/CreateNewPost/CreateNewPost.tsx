import React from "react";
import { useState, useEffect } from "react";
import "../../../styles/forms.scss";

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
        <div className="form-container">
          <div>
            <input
              type="text"
              name=""
              placeholder="Title..."
              id=""
              onChange={(e) => {
                setPostTitle(e.target.value);
              }}
              className="form-input form-input-title"
            />
          </div>

          <div>
            <textarea
              name=""
              id=""
              placeholder="Tell your story..."
              className="form-input form-input-content"
              onChange={(e) => {
                setPostContent(e.target.value);
              }}
            />
          </div>
          
          <div className="form-btn-container">

          <button
            className="form__send-button"
            type="button"
            onClick={() => sendForm()}
          >
            Create Post
          </button>
          </div>
        </div>
      </form>
    </div>
  );
}
