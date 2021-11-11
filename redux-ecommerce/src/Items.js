import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Item from './Item';

const Items = () => {
    const totalItem = useSelector(state => state.itemsReducers);
    const [itemData,setItemData] = useState(totalItem.items)
    const [searchKey, setSearchKey] = useState('');

    const items = itemData.map((item) => {
        return <div className="col-md-4 mt-3">
            <Item item={item} />
        </div>
    });
    
    const searchHandle = () => {
        const duplicateData = itemData;
        const filterData = duplicateData.filter((item)=> item.name.toLowerCase().includes(searchKey.toLowerCase()));
        setItemData(filterData);
    }

    return (
        <div className="container">
            <input type="text" onKeyUp={searchHandle} onChange={(e) => setSearchKey(e.target.value)} className="form-control" placeholder="Search ...." />
            <div className="row">
                {items}
            </div>
        </div>
    );
};

export default Items;