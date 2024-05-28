import { useState } from "react";
import { postCategories } from "../CreateNewPost/CreatePostModal/mockCategories";
import "../../../styles/filterByCategory.scss";

export default function FilterPostsByCategory({ onCategoryChange }: any) {
  const [visibleCount, setVisibleCount] = useState(15);

  const handleShowMore = () => {
    setVisibleCount((prevCount) =>
      Math.min(prevCount + 10, postCategories.length)
    );
  };

  const handleShowLess = () => {
    setVisibleCount(15);
  };

  return (
    <>
      <span className="filter-categories__title">Recommended topics</span>
      <div className="filter-categories__container">
        {postCategories.slice(0, visibleCount).map((category: string) => (
          <div>
            <button
              value={category}
              onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                onCategoryChange(e.currentTarget.value)
              }
              className="category-btn"
            >
              {category}
            </button>
          </div>
        ))}
      </div>

      {visibleCount < postCategories.length ? (
        <button onClick={handleShowMore} className="show-more-btn">
          See more topics...
        </button>
      ) : (
        <button onClick={handleShowLess} className="show-less-btn">
          Hide topics...
        </button>
      )}
    </>
  );
}
