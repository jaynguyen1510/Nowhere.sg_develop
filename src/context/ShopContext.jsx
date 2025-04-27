import { createContext, useEffect, useState } from 'react';

import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = 'VNĐ';
    const delivery_fee = 35000;
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const [product, setProduct] = useState([]);
    const [token, setToken] = useState('');
    const navigate = useNavigate();

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

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            let itemInfo = product.find((products) => products._id === items);
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalAmount += itemInfo.price * cartItems[items][item];
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        }
        return totalAmount;
    };

    const getProductData = async () => {
        try {
            const res = await axios.get(backendUrl + '/product/list-product');
            if (res.data.success) {
                setProduct(res.data.products);
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        getProductData();
    }, []);

    useEffect(() => {
        if (!token && localStorage.getItem('token')) {
            setToken(localStorage.getItem('token'));
        }
    }, [token]);

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
        getCartAmount,
        navigate,
        backendUrl,
        setToken,
        token,
    };
    return <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>;
};
export default ShopContextProvider;
