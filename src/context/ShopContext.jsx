import { createContext, useState } from 'react';

import productWhite from '../assets/trevaitrang.jpg';
import productBlack from '../assets/trevaiden.jpg';
import typeBlackOne from '../assets/black1.jpg';
import typeBlackTwo from '../assets/black2.jpg';
import typeBlackThree from '../assets/black3.jpg';

import typeWhite1 from '../assets/white1.jpg';
import typeWhite2 from '../assets/white2.jpg';
import typeWhite3 from '../assets/white3.jpg';
import { toast } from 'react-toastify';

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
    const [cartItems, setCartItems] = useState({});

    const addToCart = async (itemId, nameProduct, size, quantity) => {
        // Kiểm tra chọn size và số lượng
        if (!size) {
            toast.error('Vui lòng lựa chọn size');
            return;
        } else if (quantity === 0) {
            toast.error('Vui lòng chọn số lượng');
            return;
        } else {
            toast.success(`Đã thêm ${nameProduct} size ${size} với số lượng ${quantity} vào giỏ hàng`);
        }

        // Tạo bản sao của giỏ hàng hiện tại
        let cartData = structuredClone(cartItems);

        // Nếu chưa có sản phẩm nào trong giỏ hàng theo itemId thì khởi tạo
        if (!cartData[itemId]) {
            cartData[itemId] = {};
        }

        // Nếu sản phẩm theo size này chưa được thêm thì khởi tạo số lượng ban đầu là 0
        if (!cartData[itemId][size]) {
            cartData[itemId][size] = 0;
        }

        // Cộng thêm số lượng sản phẩm
        cartData[itemId][size] += quantity;

        // Cập nhật lại giỏ hàng
        setCartItems(cartData);
    };

    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item];
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        }
        return totalCount;
    };

    const upDateFromCart = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItems);
        cartData[itemId][size] = quantity;
        setCartItems(cartData);
    };

    const value = {
        product,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        addToCart,
        getCartCount,
        upDateFromCart,
    };
    return <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>;
};
export default ShopContextProvider;
