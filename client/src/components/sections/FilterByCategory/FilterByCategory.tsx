import { postCategories } from "../CreateNewPost/CreatePostModal/mockCategories";

export default function FilterPostsByCategory({ onCategoryChange }: any) {
  return (
    <div>
      {postCategories.map((category: string) => (
        <div>
          <button
            value={category}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
              onCategoryChange(e.currentTarget.value)
            }
          >
            {category}
          </button>
        </div>
      ))}
    </div>
  );
}
