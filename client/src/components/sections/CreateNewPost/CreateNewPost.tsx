import { useState } from "react";
import CreatePostModal from "./CreatePostModal/CreatePostModal";
import "../../../styles/forms.scss";

export default function CreateNewPost() {
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");

  const [showModal, setShowModal] = useState(false);

  return (
    <>
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
                onClick={(e) => setShowModal(true)}
              >
                Create Post
              </button>
            </div>
          </div>
        </form>
      </div>

      {showModal && (
        <CreatePostModal
          postAuthor={"test"}
          postContent={postContent}
          postTitle={postTitle}
        />
      )}
    </>
  );
}
