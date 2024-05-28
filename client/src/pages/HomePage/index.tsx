import MainBanner from "../../components/sections/MainBanner";
import RenderPosts from "../../components/sections/RenderPosts";
import FilterByCategory from "../../components/sections/FilterByCategory";
import { useState } from "react";

import '../../styles/sideBar.scss'

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <MainBanner />
      <div className="page-generic__container">
        <div className="render-posts__container"> 
          <RenderPosts selectedCategory={selectedCategory} />
        </div>
        <div className="side-bar__container">
          <FilterByCategory onCategoryChange={handleCategoryChange} />
        </div>
      </div>
    </>
  );
}
