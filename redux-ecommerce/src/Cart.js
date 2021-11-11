import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
    const totalCart = useSelector(state => state.cartReducers.cart);
    const dispatch = useDispatch();

    const cartData = totalCart.map((item) => {
        return <tr>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>
                <button className="btn btn-danger" onClick={() => dispatch({ type: 'DELETE_FROM_CART', payload: item })}>Delete</button>
            </td>
        </tr>
    });
    
    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <table className="table table-dark table-bordered mt-5">
                    <thead>
                        <tr>
                            <th scope="col">Item Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartData
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;