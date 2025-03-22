import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/formatPrice';

const ProductItem = ({ id, image, name, price }) => {
    const { currency } = useContext(ShopContext);
    return (
        <Link className="text-gray-700 cursor-pointer flex flex-col h-full" to={`/products/${id}`}>
            {/* Container ảnh không cố định chiều cao */}
            <div className="overflow-hidden">
                <img
                    src={image[0]}
                    alt={name}
                    className="w-full object-cover object-center hover:scale-110 transition ease-in-out"
                />
            </div>
            {/* Container text đẩy xuống dưới cùng */}
            <div className="mt-auto pt-2 text-center ">
                <p className="text-sm font-medium truncate ">{name}</p>
                <p className="text-sm font-medium ">
                    <span className="mr-1">{formatPrice(price)}</span>
                    <span>{currency}</span>
                </p>
            </div>
        </Link>
    );
};

export default ProductItem;
