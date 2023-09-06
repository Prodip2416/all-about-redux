import React from "react";
import logo from "../images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { toggledMenu } from "../redux/menu/actions";

const Navbar = () => {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.carts);

  const handleToggled = (menu) => {
    dispatch(toggledMenu(menu));
  };
  const getTotalCartItem = (totalCart) => {
    return totalCart.reduce((quantity, item) => quantity + item.quantity, 0);
  };
  console.log(carts);
  return (
    <nav className="bg-[#171C2A] py-4">
      <div className="navBar">
        <span>
          <img src={logo} alt="LWS" className="max-w-[140px]" />
        </span>

        <div className="flex gap-4">
          <span
            className="navHome"
            id="lws-home"
            onClick={() => handleToggled("home")}
          >
            {" "}
            Home{" "}
          </span>
          <span
            className="navCart"
            id="lws-cart"
            onClick={() => handleToggled("cart")}
          >
            <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
            <span id="lws-totalCart">{getTotalCartItem(carts)}</span>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
