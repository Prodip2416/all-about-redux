import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart, updateCart } from "../redux/cart/actions";
import { getInitialProduct, updateProduct } from "../redux/product/actions";

const CartDetails = ({ item }) => {
  const dispatch = useDispatch();
  const totalProduct = useSelector((state) => state.products);
  const { id, title, category, price, quantity, imageUrl } = item;

  const handleDelete = (id) => {
    dispatch(getInitialProduct(id, quantity));
    dispatch(deleteCart(id));
  };

  const handleAddToCart = (id) => {
    dispatch(updateProduct(id, "remove"));
    dispatch(updateCart(id, "add"));
  };

  const handleRemoveToCart = (id) => {
    dispatch(updateProduct(id, "add"));
    dispatch(updateCart(id, "remove"));
  };

  return (
    <div className="cartCard">
      <div className="flex items-center col-span-6 space-x-6">
        {/* <!-- cart image --> */}
        <img className="lws-cartImage" src={imageUrl} alt="product" />
        {/* <!-- cart item info --> */}
        <div className="space-y-2">
          <h4 className="lws-cartName">{title}</h4>
          <p className="lws-cartCategory">{category}</p>
          <p>
            BDT <span className="lws-cartPrice">{price}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
        {/* <!-- amount buttons --> */}
        <div className="flex items-center space-x-4">
          <button
            className="lws-incrementQuantity"
            onClick={() => handleAddToCart(id)}
            disabled={totalProduct.find((p) => p.id == id).quantity == 0}
          >
            <i className="text-lg fa-solid fa-plus"></i>
          </button>
          <span className="lws-cartQuantity">{quantity}</span>
          <button
            className="lws-decrementQuantity"
            onClick={() => handleRemoveToCart(id)}
            disabled={quantity == 0}
          >
            <i className="text-lg fa-solid fa-minus"></i>
          </button>
        </div>
        {/* <!-- price --> */}
        <p className="text-lg font-bold">
          BDT <span className="lws-calculatedPrice">{price * quantity}</span>
        </p>
      </div>
      {/* <!-- delete button --> */}
      <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
        <button className="lws-removeFromCart" onClick={() => handleDelete(id)}>
          <i className="text-lg text-red-400 fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default CartDetails;
