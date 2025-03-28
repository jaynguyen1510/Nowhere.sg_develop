import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import { formatPrice } from '../utils/formatPrice';

const CartTotal = () => {
    const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);
    const subtotal = getCartAmount();
    const shipping = delivery_fee;
    const total = subtotal === 0 ? 0 : subtotal + shipping;

    return (
        <div className="w-full p-6 bg-white rounded-lg ">
            <div className="mb-6">
                <Title secondaryText="CART" primaryText="TOTALS" />
            </div>
            <div className="space-y-4 text-sm">
                <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Giá sản phẩm</span>
                    <span className="text-gray-800 font-semibold">
                        {formatPrice(subtotal)} <span>{currency}</span>
                    </span>
                </div>
                <hr className="border-gray-300" />
                <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Phí vận chuyển</span>
                    <span className="text-gray-800 font-semibold">
                        {formatPrice(shipping)} <span>{currency}</span>
                    </span>
                </div>
                <hr className="border-gray-300" />
                <div className="flex justify-between items-center text-xl">
                    <span className="text-red-700 font-bold">Tổng đơn hàng</span>
                    <span className="text-red-700 font-bold">
                        {formatPrice(total)} <span>{currency}</span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CartTotal;
