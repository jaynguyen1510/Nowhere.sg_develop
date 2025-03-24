import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useEffect } from 'react';
import Title from './Title';
import Products from '../pages/Products';
import ProductItem from './ProductItem';

const RelatedProducts = ({ category, subCategory }) => {
    const { product } = useContext(ShopContext);
    const [related, setRelated] = useState([]);

    useEffect(() => {
        if (product && product.length > 0) {
            let productCopy = product.slice();
            productCopy = productCopy.filter((items) => category === items.category);
            productCopy = productCopy.filter((items) => subCategory === items.subCategory);

            setRelated(productCopy.slice(0, 5));
        }
    }, [product, category, subCategory]);

    return (
        <div className="my-24">
            <div className="text-center text-3xl py-2 ">
                <Title secondaryText={'RELATED'} primaryText={'PRODUCTS'} />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {related.map((items) => (
                    <ProductItem
                        key={items._id}
                        id={items._id}
                        image={items.image}
                        name={items.name}
                        price={items.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default RelatedProducts;
