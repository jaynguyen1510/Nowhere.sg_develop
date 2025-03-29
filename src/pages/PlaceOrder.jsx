import React, { useContext, useState } from 'react';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import zaloPay from '../assets/payment_zalopay.png';
import tpBank from '../assets/payment_tpbank.jpg';
import { ShopContext } from '../context/ShopContext';

const PlaceOrder = () => {
    const [method, setMethod] = useState('cod');
    const { navigate } = useContext(ShopContext);
    return (
        <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80hv] border-t">
            {/* ----------- Left Side Form ----------------- */}
            <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
                <div className="text-xl sm:text-2xl my-3">
                    <Title secondaryText={'DELIVERY'} primaryText={'INFORMATION'} />
                </div>
                {/* Tên và Họ */}
                <div className="flex gap-3">
                    <input
                        className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
                        placeholder="Tên"
                        type="text"
                    />
                    <input
                        className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
                        placeholder="Họ"
                        type="text"
                    />
                </div>
                {/* Email */}
                <input
                    className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
                    placeholder="Địa chỉ email"
                    type="email"
                />
                {/* Số điện thoại */}
                <input
                    className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
                    placeholder="Số điện thoại"
                    type="tel"
                />
                {/* Địa chỉ */}
                <input
                    className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
                    placeholder="Địa chỉ nhận hàng"
                    type="text"
                />
                {/* Phường/Xã và Quận/Huyện */}
                <div className="flex gap-3">
                    <input
                        className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
                        placeholder="Phường/Xã"
                        type="text"
                    />
                    <input
                        className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
                        placeholder="Quận/Huyện"
                        type="text"
                    />
                </div>
                {/* Thành phố/Tỉnh */}
                <input
                    className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
                    placeholder="Thành phố/Tỉnh"
                    type="text"
                />
                {/* Ghi chú cho đơn hàng */}
                <textarea
                    className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
                    placeholder="Ghi chú cho đơn hàng (nếu có)"
                    rows="3"
                />
            </div>
            {/* ----------------right side-------------- */}
            <div className="mt-8">
                <div className="mt-8 min-w-80">
                    <CartTotal />
                </div>
                <div className="mt-12">
                    <Title secondaryText={'PAYMENT'} primaryText={'METHOD'} />
                    {/* --------------- Payment Method Selection -------------- */}
                    <div className="flex flex-col lg:flex-row gap-4">
                        {/* Zalo Pay */}
                        <div
                            onClick={() => setMethod('zaloPay')}
                            className="flex items-center gap-4 border rounded-md p-3 cursor-pointer hover:shadow-lg transition-shadow"
                        >
                            <div
                                className={`w-4 h-4 border border-gray-400 rounded-full flex-shrink-0 ${method === 'zaloPay' ? 'bg-green-400' : ''}`}
                            />
                            <img src={zaloPay} alt="Zalo Pay" className="h-10" />
                        </div>

                        {/* TPBank */}
                        <div
                            onClick={() => setMethod('tpBank')}
                            className="flex items-center gap-4 border rounded-md p-3 cursor-pointer hover:shadow-lg transition-shadow"
                        >
                            <div
                                className={`w-4 h-4 border border-gray-400 rounded-full flex-shrink-0 ${method === 'tpBank' ? 'bg-green-400' : ''}`}
                            />
                            <img src={tpBank} alt="TPBank" className="h-10" />
                        </div>

                        {/* Thanh toán khi nhận hàng */}
                        <div
                            onClick={() => setMethod('cod')}
                            className="flex items-center gap-4 border rounded-md p-3 cursor-pointer hover:shadow-lg transition-shadow"
                        >
                            <div
                                className={`w-4 h-4 border border-gray-400 rounded-full flex-shrink-0 ${method === 'cod' ? 'bg-green-400' : ''}`}
                            />
                            <p className="text-gray-600 font-semibold">THANH TOÁN KHI NHẬN HÀNG</p>
                        </div>
                    </div>
                    <div className="w-full text-end mt-8">
                        <button
                            onClick={() => navigate('/orders')}
                            className="bg-red-800 hover:bg-red-900 text-white px-16 py-3 text-sm"
                        >
                            ĐẶT HÀNG
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;
