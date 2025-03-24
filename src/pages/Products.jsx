import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { formatPrice } from '../utils/formatPrice';
import RelatedProducts from '../components/RelatedProducts';
const Products = () => {
    const { productId } = useParams();
    const { product, currency } = useContext(ShopContext);
    const [productData, setProductData] = useState(false);
    const [image, setImage] = useState('');
    const [size, setSie] = useState('');

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
                    <div className="flex flex-col gap-4 my-8">
                        <p>Select Size</p>
                        <div className="flex gap-2">
                            {productData.size.map((itemSize, index) => (
                                <button
                                    onClick={() => setSie(itemSize)}
                                    className={`border py-2 px-4 bg-gray-100 ${itemSize === size ? 'border-red-800' : ''}`}
                                    key={index}
                                >
                                    {itemSize}
                                </button>
                            ))}
                        </div>
                    </div>
                    <button className="bg-red-800 text-white px-8 py-3 text-sm  hover:bg-red-900">Thêm sản phẩm</button>
                    <hr className="mt-8 sm:w-4/5" />
                    <div className="text-sm text-red-800 mt-5 flex flex-col gap-1">
                        <p>100% Original product.</p>
                        <p>Cash on delivery is available on this product.</p>
                        <p>Easy return and exchange policy within 7 days.</p>
                    </div>
                </div>
            </div>
            {/* {-----------Description & Review Section ------------} */}
            <div className="mt-20">
                <div className="flex">
                    <b className="border px-5 py-3 text-sm">Description</b>
                    <b className="border px-5 py-3 text-sm">Reviews (122)</b>
                </div>
                <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
                    <p>Sản phẩm được thiết kế với chất liệu cao cấp, mang lại độ bền và sự thoải mái khi sử dụng.</p>
                    <p>Phù hợp cho nhiều mục đích sử dụng hàng ngày, với kiểu dáng hiện đại và tiện lợi.</p>
                </div>
            </div>
            {/*------------------ display related products ------------------ */}
            <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
        </div>
    ) : (
        <div className="opacity-0"></div>
    );
};

export default Products;
