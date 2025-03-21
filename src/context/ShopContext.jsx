import { createContext, useState } from 'react';

import productWhite from '../assets/trevaitrang.jpg';
import productBlack from '../assets/trevaiden.jpg';

export const ShopContext = createContext();

const product = [
    {
        _id: 1,
        bestSeller: true,
        date: 1716634345448,
        description: 'Hello product 1 ',
        image: [`${productWhite}`],
        name: 'Áo Trễ vai Trắng',
        price: 200000,
        size: ['S', 'M', 'L', 'XL'],
        category: 'Women',
        subCategory: 'white',
    },
    {
        _id: 2,
        bestSeller: false,
        date: 1716634345448,
        description: 'Hello product 1 ',
        image: [`${productBlack}`],
        name: 'Áo Trễ vai đen',
        price: 100000,
        category: 'Women',
        size: ['S', 'M', 'L', 'XL'],
        subCategory: 'black',
    },
];

const ShopContextProvider = (props) => {
    const currency = 'VNĐ';
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const value = {
        product,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
    };
    return <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>;
};
export default ShopContextProvider;
