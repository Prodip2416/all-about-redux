import React from 'react';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const cartData = useSelector(state => state);
    return (
        <div>
            <h1>This is Navbar component : Number of item in Cart : {cartData.cartCount}</h1>
        </div>
    );
};

export default Navbar;