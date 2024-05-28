import { useState, useEffect } from "react";
import { postCategories } from "./mockCategories";
import { PostStory } from "../../../../utils/PostStory";
import '../../../../styles/modals.scss'

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
  const [image, setImage] = useState<any>()

  const CreateNewPost = async () => {
    const newPost = await PostStory(
      postAuthor,
      postTitle,
      postContent,
      postCategory,
      image
    );
    window.location.href = '/'
  };

  function convertImageToBase64(e: any) {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result);
      setImage(reader.result)
    }
    reader.onerror = error => {
      console.log("Error trying to upload an image: ", error)
    }
  }

  return (
    <div className="modal-new-post__container">
      <div className="modal-new-post-inner-container">
        <div className="modal-new-post-content">
          <h3>Select Post Category</h3>
          <select onChange={(e) => setPostCategory(e.target.value)}>
            {postCategories.map((category: string) => (
              <option value={category}>{category}</option>
            ))}
          </select>
          

          <input type="file" accept="image/*" onChange={convertImageToBase64} required/>
          <img src={image} alt="" />
          <button onClick={CreateNewPost} className="modal-new-post-btn">
            Publish!
          </button>
        </div>
      </div>
    </div>
  );
}
