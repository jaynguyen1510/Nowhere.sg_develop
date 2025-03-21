import React from 'react';
import { BiTransferAlt, BiTime, BiSupport } from 'react-icons/bi';
const OutPolicy = () => {
    return (
        <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
            <div className="font-semibold">
                <BiTransferAlt size={24} className="w-12 m-auto mb-5" />
                <p className="font-semibold text-red-800">Chính sách đổi trả</p>
                <p className="text-gray-400">Có thể đổi trả một cách dễ dàng</p>
            </div>
            <div className="font-semibold">
                <BiTime size={24} className="w-12 m-auto mb-5" />
                <p className="font-semibold text-red-800">Đổi trả trong vòng 7 ngày</p>
                <p className="text-gray-400">Đổi trả miễn phí trong vòng 7 ngày</p>
            </div>
            <div className="font-semibold">
                <BiSupport size={24} className="w-12 m-auto mb-5" />
                <p className="font-semibold text-red-800">Hỗ trợ khách hàng</p>
                <p className="text-gray-400">Luôn hỗ trợ khách hàng 24/7</p>
            </div>
        </div>
    );
};

export default OutPolicy;
