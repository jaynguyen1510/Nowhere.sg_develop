import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
    const { product } = useContext(ShopContext);
    const [bestSellerProduct, setBestSellerProduct] = useState([]);

    useEffect(() => {
        const bestProduct = product.filter((item) => item.bestSeller);
        setBestSellerProduct(bestProduct.slice(0, 5));
    }, [product]);

    return (
        <div className="my-10">
            <div className="text-center text-3xl py-8">
                <Title secondaryText={'BEST'} primaryText={'SELLERS'} />
                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
                    Khám phá bộ sưu tập các sản phẩm bán chạy nhất – nơi khách hàng tin dùng và đánh giá cao về chất
                    lượng cũng như hiệu suất. Tại đây, bạn sẽ tìm thấy những món đồ được lựa chọn kỹ càng, đảm bảo sự
                    hài lòng cho mọi nhu cầu của bạn
                </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {bestSellerProduct &&
                    bestSellerProduct.length > 0 &&
                    bestSellerProduct.map((item) => (
                        <ProductItem
                            key={item._id}
                            id={item._id}
                            name={item.name}
                            price={item.price}
                            image={item.image}
                        />
                    ))}
            </div>
        </div>
    );
};

export default BestSeller;
