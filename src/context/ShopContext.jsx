import { createContext, useState } from 'react';

import productWhite from '../assets/trevaitrang.jpg';
import productBlack from '../assets/trevaiden.jpg';
import typeBlackOne from '../assets/black1.jpg';
import typeBlackTwo from '../assets/black2.jpg';
import typeBlackThree from '../assets/black3.jpg';

import typeWhite1 from '../assets/white1.jpg';
import typeWhite2 from '../assets/white2.jpg';
import typeWhite3 from '../assets/white3.jpg';

export const ShopContext = createContext();

const product = [
    {
        _id: '1',
        bestSeller: true,
        date: 1716634345448,
        description: 'Hello product 1 ',
        image: [`${productWhite}`, `${typeWhite1}`, `${typeWhite2}`, `${typeWhite3}`],
        name: 'Áo Trễ vai Trắng',
        price: 200000,
        size: ['S', 'M', 'L', 'XL'],
        category: 'Women',
        subCategory: 'white',
    },
    {
        _id: '2',
        bestSeller: false,
        date: 1716634345448,
        description: 'Hello product 1 ',
        image: [`${productBlack}`, `${typeBlackOne}`, `${typeBlackTwo}`, `${typeBlackThree}`],

        name: 'Áo Trễ vai đen',
        price: 100000,
        category: 'Women',
        size: ['S', 'M', 'L', 'XL'],
        subCategory: 'black',
    },
    {
        _id: '3',
        bestSeller: false,
        date: 1716634345448,
        description: 'Hello product 1 ',
        image: [`${productBlack}`, `${typeBlackOne}`, `${typeBlackTwo}`, `${typeBlackThree}`],

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
