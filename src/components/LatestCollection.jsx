import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const { product } = useContext(ShopContext);
    const [latestProduction, setLatestProductions] = useState([]);
    useEffect(() => {
        setLatestProductions(product.slice(0, 10));
    }, [product]);

    return (
        <div className="my-10">
            <div className="text-center py-8 text-3xl">
                <Title secondaryText={'LATEST'} primaryText={'COLLECTIONS'} />
                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-500">
                    Khám phá bộ sưu tập mới nhất với những thiết kế độc đáo, mang đến phong cách và sự tự tin cho bạn.
                </p>
            </div>
            {/* rendering products  */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {latestProduction &&
                    latestProduction.length > 0 &&
                    latestProduction.map((items) => (
                        <ProductItem
                            key={items._id}
                            id={items._id}
                            image={items.image}
                            price={items.price}
                            name={items.name}
                        />
                    ))}
            </div>
        </div>
    );
};

export default LatestCollection;
