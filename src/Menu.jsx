import React from "react";

export default function Menu({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
}

function Item({ item }) {
  const { id, title, category, price, img, desc } = item;

  return (
    <li>
      <img src={img} alt={title} />
      <div className="item-info">
        <div className="head">
          <h2>{title}</h2>
          <p className="price">${price}</p>
        </div>
        <p className="description">{desc}</p>
      </div>
    </li>
  );
}
