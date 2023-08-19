import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import items from "./data";
import Categories from "./Categories";
import Menu from "./Menu";
import "./App.css";

const allCategories = ["All", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItem, setMenuItem] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "All") {
      setMenuItem(items);
      // return;
    } else {
      const newItems = items.filter((item) => item.category === category);
      setMenuItem(newItems);
    }
  };

  return (
    <main>
      <h1>Our Menu</h1>
      <p className="underline"></p>
      <div className="category">
        <Categories categories={categories} filterItems={filterItems} />
      </div>
      <div className="menu">
        <Menu items={menuItem} />
      </div>
    </main>
  );
}

export default App;
