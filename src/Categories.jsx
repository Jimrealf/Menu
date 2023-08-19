import React from "react";

export default function Categories({ categories, filterItems }) {
  return (
    <div className="btn">
      {categories.map((category, index) => (
        <Category key={index} category={category} filterItems={filterItems} />
      ))}
    </div>
  );
}

function Category({ category, filterItems }) {
  return <button onClick={() => filterItems(category)}>{category}</button>;
}
