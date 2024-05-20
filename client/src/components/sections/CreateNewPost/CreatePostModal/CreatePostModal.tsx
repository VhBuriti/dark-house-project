import { useState, useEffect } from "react";
import { postCategories } from "./mockCategories";
import { PostStory } from "../../../../utils/PostStory";

interface InitialPostState {
  postAuthor: string;
  postTitle: string;
  postContent: string;
}

export default function CreatePostModal({
  postAuthor,
  postContent,
  postTitle,
}: InitialPostState) {
  const [postCategory, setPostCategory] = useState(postCategories[0] || "");

  const CreateNewPost = async () => {
    const newPost = await PostStory(
      postAuthor,
      postContent,
      postTitle,
      postCategory
    );

    console.log(newPost)
  };

  return (
    <div>
      <div>
        <div>
          <h3>Select Post Category</h3>
          <select onChange={(e) => setPostCategory(e.target.value)}>
            {postCategories.map((category: string) => (
              <option value={category}>{category}</option>
            ))}
          </select>

          <button onClick={CreateNewPost}>
            Send Post
          </button>
        </div>
      </div>
    </div>
  );
}
