import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { formatPrice } from '../utils/formatPrice';
const Products = () => {
    const { productId } = useParams();
    const { product, currency } = useContext(ShopContext);
    const [productData, setProductData] = useState(false);
    const [image, setImage] = useState('');
    const fetchProductData = async () => {
        product.map((item) => {
            if (item._id === productId) {
                setProductData(item);
                setImage(item.image[0]);

                return null;
            }
        });
    };
    useEffect(() => {
        fetchProductData();
    }, [productId, product]);

    const starsArray = [...Array(5)];

    return productData ? (
        <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
            {/*----------- product Data ------------- */}
            <div className="flex gap-2 sm:gap-12 flex-col sm:flex-row">
                {/* {-------------Product image---------} */}
                <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
                    <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full ">
                        {productData.image.map((item, index) => (
                            <img
                                onClick={() => setImage(item)}
                                key={index}
                                src={item}
                                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                                alt=""
                            />
                        ))}
                    </div>
                    <div className="w-full sm:w-[80%]">
                        <img className="w-full h-auto" src={image} alt="" />
                    </div>
                </div>
                {/* -----Product info -------- */}
                <div className="flex-1">
                    <h1 className="font-medium text-2xl mt-2 text-red-800">{productData.name}</h1>
                    <div className="flex items-center gap-1 mt-2">
                        {starsArray.length > 0 &&
                            starsArray.map((_, index) => <FaStar key={index} className="text-yellow-500" />)}
                        <p className="pl-2">{122}</p>
                    </div>
                    <p className="mt-5 text-3xl font-medium">
                        {formatPrice(productData.price)} {currency}
                    </p>
                    <p className="mt-5 text-gray-500  md:w-4/5">{productData.description}</p>
                </div>
            </div>
        </div>
    ) : (
        <div className="opacity-0"></div>
    );
};

export default Products;
