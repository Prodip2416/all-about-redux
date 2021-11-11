import React from 'react';
import { useDispatch } from 'react-redux';

const Item = ({item}) => {
    const dispatch = useDispatch();
    return (
        <div className="shadow p-3 mb-5 bg-white rounded">
            <h1>{item.name}</h1>
            <img src={item.image} className="img-fluid" alt=""/>
            <h3>{item.price}$</h3>
            <button className="btn btn-success" onClick={()=>dispatch({type:'ADD_TO_CART',payload:item})}>Add To Cart</button>
        </div>
    );
};

export default Item;