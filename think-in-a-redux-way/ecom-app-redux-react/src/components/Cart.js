import React from "react";
import BillDetails from "./BillDetails";
import CartDetails from "./CartDetails";
import { useSelector } from "react-redux";

const Cart = () => {
  const totalCart = useSelector((state) => state.carts);

  return (
    <main className="py-16">
      <div className="container 2xl:px-8 px-2 mx-auto">
        <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
        <div className="cartListContainer">
          <div className="space-y-6">
            {totalCart.length > 0 &&
              totalCart.map((item) => <CartDetails item={item} />)}
          </div>

          <BillDetails />
        </div>
      </div>
    </main>
  );
};

export default Cart;
