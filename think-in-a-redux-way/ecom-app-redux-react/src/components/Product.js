import React from "react";
import Item from "./Item";
import { useSelector } from "react-redux";

const Product = () => {
  const allProduct = useSelector((state) => state.products);

  return (
    <div className="productContainer" id="lws-productContainer">
      {allProduct.length > 0 &&
        allProduct.map((product) => <Item item={product} />)}
    </div>
  );
};

export default Product;
