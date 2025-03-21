import React, { useState } from 'react';

const NewLetterBox = () => {
    const [email, setEmail] = useState('');
    const handleSubmitForm = (e) => {
        e.preventDefault();
        console.log('Submitted email:', email);
    };
    return (
        <div className="text-center p-2">
            <p className="text-2xl font-medium text-gray-800">Subscribe now & get 10% off your first purchase!</p>
            <p className="text-gray-400 mt-3">
                Đăng ký thông tin ngay để không bỏ lỡ những ưu đãi và thông tin mới nhất.
            </p>
            <form
                onClick={handleSubmitForm}
                className="w-full sm:w-1/2 flex flex-col sm:flex-row items-center gap-3 mx-auto my-6 p-4 bg-white rounded-lg"
            >
                <input
                    className="w-full p-4 rounded-lg shadow-sm focus:outline-none hover:ring-2 hover:ring-red-800 focus:ring-2 focus:ring-red-800"
                    placeholder="Nhập Email của bạn tại đây"
                    type="email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    required
                />

                <button
                    type="submit"
                    className="bg-black text-white text-xs px-10 py-4 rounded-lg shadow transition duration-200 ease-in-out"
                >
                    Đăng ký
                </button>
            </form>
        </div>
    );
};

export default NewLetterBox;
