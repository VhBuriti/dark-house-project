import MainBanner from "../../components/sections/MainBanner";
import RenderPosts from "../../components/sections/RenderPosts";
import FilterByCategory from "../../components/sections/FilterByCategory";
import { useState } from "react";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <MainBanner />
      <RenderPosts selectedCategory={selectedCategory}/>
      <FilterByCategory onCategoryChange={handleCategoryChange} />
    </>
  );
}
