import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const AddItem = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const dispatch = useDispatch();

    const addItem = () => {
        const item = {
            name: name,
            price: price,
            image: image
        };
        dispatch({ type: 'ADD_ITEM', payload: item });
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-6">
                <input type="text" placeholder="Item Name ..." value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
                <input type="text" placeholder="Item Price ..." value={price} onChange={(e) => setPrice(e.target.value)} className="form-control" />
                <input type="text" placeholder="Item Image ..." value={image} onChange={(e) => setImage(e.target.value)} className="form-control" />
                <button className="btn btn-success mt-3" onClick={addItem}>Add Item</button>
            </div>
        </div>
    );
};

export default AddItem;