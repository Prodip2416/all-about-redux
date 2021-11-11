const initData = {
    items: [
        {
            name: 'Iphone 8 Gold',
            image: 'https://urbanglobal.co.nz/wp-content/uploads/2021/08/Apple-iPhone-8-Gold.jpg',
            price: 1200
        },
        {
            name: 'Iphone 12 Pro Pacific Blue',
            image: 'https://urbanglobal.co.nz/wp-content/uploads/2021/08/Apple-iPhone-12-Pro-Pacific-Blue..jpg',
            price: 4200
        },
        {
            name: 'Iphone 8 Red',
            image: 'https://urbanglobal.co.nz/wp-content/uploads/2021/08/Apple-iPhone-8-Red..jpg',
            price: 1200
        },
        {
            name: 'Iphone XS Max',
            image: 'https://urbanglobal.co.nz/wp-content/uploads/2021/08/Apple-iPhone-XS-Max-Blk-800x800.jpg',
            price: 5200
        },
        {
            name: 'Iphone 12 Pro ',
            image: 'https://urbanglobal.co.nz/wp-content/uploads/2021/08/Apple-iPhone-12-Pro-Graphite.jpg',
            price: 2500
        },
        {
            name: 'Iphone 12 Pro Silver',
            image: 'https://urbanglobal.co.nz/wp-content/uploads/2021/08/Apple-iPhone-12-Pro-Silver.jpg',
            price: 2200
        }
    ]
}

export const itemReducers = (state = initData, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        default:
            return state;
    }
}