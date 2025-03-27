import React, { useEffect, useState, useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { formatPrice } from '../utils/formatPrice';
import { FaTrash } from 'react-icons/fa';

const Cart = () => {
    const { product, currency, cartItems, upDateFromCart } = useContext(ShopContext);
    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        const tempData = [];
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                if (cartItems[items][item] > 0) {
                    tempData.push({
                        _id: items,
                        size: item,
                        quantity: cartItems[items][item],
                    });
                }
            }
        }
        setCartData(tempData);
    }, [cartItems]);

    return (
        <div className="border-t pt-14 px-4">
            <div className="text-2xl mb-6">
                <Title secondaryText={'YOUR'} primaryText={'CART'} />
            </div>
            {/* Header row cho desktop */}
            <div className="hidden sm:grid grid-cols-[4fr_1fr_1fr_1fr] gap-4 border-b pb-2 text-gray-600 text-sm font-medium items-center">
                <div>Sản phẩm</div>
                <div className="text-center">Số lượng</div>
                <div className="text-right">Giá</div>
                <div className="text-center">Xóa</div>
            </div>
            {cartData.length === 0 ? (
                <div className="py-8 text-center text-gray-700">Giỏ hàng trống</div>
            ) : (
                <div className="space-y-4">
                    {cartData.map((item, index) => {
                        const productData = product.find((products) => products._id === item._id);
                        return (
                            <div key={index} className="border-b py-4">
                                {/* Desktop view */}
                                <div className="hidden sm:grid grid-cols-[4fr_1fr_1fr_1fr] gap-4 items-center">
                                    {/* Cột sản phẩm */}
                                    <div className="flex items-center gap-4">
                                        <img
                                            className="w-16 h-16 object-cover rounded-md shadow-sm"
                                            src={productData.image[0]}
                                            alt={productData.name}
                                        />
                                        <div>
                                            <p className="text-sm font-medium">{productData.name}</p>
                                            <p className="mt-1 inline-block px-2 py-1 text-xs border bg-slate-50 rounded">
                                                {item.size}
                                            </p>
                                        </div>
                                    </div>
                                    {/* Cột số lượng */}
                                    <div className="flex items-center justify-center">
                                        <input
                                            onChange={(e) =>
                                                e.target.value === '' || e.target.value === '0'
                                                    ? null
                                                    : upDateFromCart(item._id, item.size, Number(e.target.value))
                                            }
                                            className="w-16 border rounded-md text-center px-2 py-1 focus:outline-none focus:ring-1 focus:ring-red-500"
                                            type="number"
                                            min={1}
                                            defaultValue={item.quantity}
                                        />
                                    </div>
                                    {/* Cột giá */}
                                    <div className="flex items-center justify-end">
                                        <p className="text-gray-700">
                                            {formatPrice(productData.price * item.quantity)}
                                            {currency}
                                        </p>
                                    </div>
                                    {/* Cột xóa sản phẩm */}
                                    <div className="flex items-center justify-center">
                                        <button
                                            onClick={() => upDateFromCart(item._id, item.size)}
                                            className="text-red-700 hover:text-red-800"
                                        >
                                            <FaTrash />
                                        </button>
                                    </div>
                                </div>
                                {/* Mobile view */}
                                <div className="sm:hidden">
                                    <div className="flex items-center gap-4 mb-2">
                                        <img
                                            className="w-16 h-16 object-cover rounded-md shadow-sm"
                                            src={productData.image[0]}
                                            alt={productData.name}
                                        />
                                        <div>
                                            <p className="text-sm font-medium">{productData.name}</p>
                                            <p className="mt-1 inline-block px-2 py-1 text-xs border bg-slate-50 rounded">
                                                {item.size}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-600 text-sm">Số lượng:</span>
                                            <input
                                                onChange={(e) =>
                                                    e.target.value === '' || e.target.value === '0'
                                                        ? null
                                                        : upDateFromCart(item._id, item.size, Number(e.target.value))
                                                }
                                                className="w-20 border rounded-md text-center px-2 py-1 focus:outline-none focus:ring-1 focus:ring-red-500"
                                                type="number"
                                                min={1}
                                                defaultValue={item.quantity}
                                            />
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-600 text-sm">Giá:</span>
                                            <p className="text-gray-700">
                                                {formatPrice(productData.price * item.quantity)}
                                                {currency}
                                            </p>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-600 text-sm">Xóa:</span>
                                            <button
                                                onClick={() => upDateFromCart(item._id, item.size)}
                                                className="text-red-700 hover:text-red-800"
                                            >
                                                <FaTrash />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Cart;
