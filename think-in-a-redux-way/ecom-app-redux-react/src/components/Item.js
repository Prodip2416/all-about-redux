import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../redux/product/actions";
import { addToCart, updateCart } from "../redux/cart/actions";

const Item = ({ item }) => {
  const carts = useSelector((state) => state.carts);
  const dispatch = useDispatch();
  const { id, title, category, imageUrl, price, quantity } = item;

  const handleCart = (id) => {
    if (quantity == 0) {
      return;
    }
    dispatch(updateProduct(id, "remove")); //update product quantity

    const prevCartItem = carts.find((i) => i.id == id);
    if (prevCartItem) {
      dispatch(updateCart(id, "add"));
    } else {
      let cartItem = {
        ...item,
        quantity: 1,
      };
      dispatch(addToCart(cartItem));
    }
  };
  return (
    <div className="lws-productCard">
      <img
        className="lws-productImage"
        src={imageUrl}
        alt="product"
        width={100}
      />
      <div className="p-4 space-y-2">
        <h4 className="lws-productName">{title}</h4>
        <p className="lws-productCategory">{category}</p>
        <div className="flex items-center justify-between pb-2">
          <p className="productPrice">
            BDT <span className="lws-price">{price}</span>
          </p>
          <p className="productQuantity">
            QTY <span className="lws-quantity">{quantity}</span>
          </p>
        </div>
        <button
          className="lws-btnAddToCart"
          onClick={() => handleCart(id)}
          disabled={quantity == 0}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Item;
