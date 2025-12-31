import React from "react";

const ProductList = ({ products, onSelect }) => {
  console.log("ProductList rendered");
  return (
    <ul>
      {products.map((p) => (
        <li key={p.id} onClick={() => onSelect(p.id)} style={{ cursor: "pointer" }}>
          {p.name} - ${p.price}
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
