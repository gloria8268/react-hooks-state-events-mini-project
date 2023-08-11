import React from "react";
import { useState } from "react";

function CategoryFilter({ categories, onCategoryItem }) {
  const [categoriesData, setCategoriesData] = useState(categories)
  const [activeCategory, setActiveCategory] = useState("All");

  const handleClickButton = (category) => {
    onCategoryItem(category)
    setActiveCategory(category)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {
        categoriesData.map((item, index) => {
          return <button key={item} className={activeCategory === item ? "selected" : ""} onClick={() => handleClickButton(item)}> {item}</button>
        })
      }
    </div>
  );
}

export default CategoryFilter;

