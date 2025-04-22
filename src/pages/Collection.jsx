import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { BiChevronDown } from 'react-icons/bi';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
    const categories = [
        { label: 'Women', value: 'Women' },
        { label: 'Men', value: 'Men' },
    ];
    const subCategories = [
        { label: 'Áo thun trắng', value: 'white' },
        { label: 'Áo thun đen', value: 'black' },
    ];

    const sortOptions = [
        { value: 'relavent', label: 'Sắp xếp theo: Liên quan' },
        { value: 'low-high', label: 'Sắp xếp theo: Giá thấp đến cao' },
        { value: 'hig-low', label: 'Sắp xếp theo: Giá cao đến thấp' },
    ];
    const { product, search, showSearch } = useContext(ShopContext);
    const [showFilters, setShowFilter] = useState(false);
    const [filterProducts, setFilterProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    const [sortType, setSortType] = useState('relavent');

    const toggleCategory = (e) => {
        const value = e.target.value;
        if (category.includes(value)) {
            // Nếu có thì loại bỏ
            setCategory((prev) => prev.filter((item) => item !== value));
        } else {
            setCategory((prev) => [...prev, value]);
        }
    };
    const toggleSubCategory = (e) => {
        const value = e.target.value;
        if (subCategory.includes(value)) {
            setSubCategory((prev) => prev.filter((item) => item !== value));
        } else {
            setSubCategory((prev) => [...prev, value]);
        }
    };
    // Kiểm tra từng ký tự trong search
    const matchesUnordered = (name, search) => {
        const lowerName = name.toLowerCase();
        const lowerSearch = search.toLowerCase();
        return [...lowerSearch].every((char) => lowerName.includes(char));
    };

    const applyFilter = () => {
        if (product && product.length > 0) {
            let productCopy = product.slice();
            if (showSearch && search) {
                productCopy = productCopy.filter(
                    (item) => typeof item.name === 'string' && matchesUnordered(item.name, search),
                );
            }
            if (category.length > 0) {
                productCopy = productCopy.filter((item) => category.includes(item.category));
            }
            if (subCategory.length > 0) {
                productCopy = productCopy.filter((item) => subCategory.includes(item.subCategory));
            }
            setFilterProducts(productCopy);
        }
    };

    const sortProduct = () => {
        if (product && product.length > 0) {
            let fpCopy = filterProducts.slice();
            switch (sortType) {
                case 'low-high':
                    setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
                    break;
                case 'hig-low':
                    setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
                    break;

                default:
                    applyFilter();
                    break;
            }
        }
    };

    useEffect(() => {
        applyFilter();
    }, [category, subCategory, search, showSearch, product]);
    useEffect(() => {
        sortProduct();
    }, [sortType]);

    return (
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
            {/* filter option  */}
            <div className="min-w-60">
                <p
                    className="my-2 text-xl flex items-center cursor-pointer gap-2"
                    onClick={() => setShowFilter(!showFilters)}
                >
                    FILTERS
                    <BiChevronDown
                        className={`h-7 sm:hidden transform transition-transform duration-200 ${showFilters ? '' : 'rotate-90'}`}
                        size={20}
                    />
                </p>
                {/* category filter */}
                <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilters ? '' : 'hidden'} sm:block`}>
                    <p className="mb-3 text-sm font-medium text-red-800">CATEGORIES</p>
                    <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                        {categories.length > 0 &&
                            categories.map((item) => (
                                <p key={item.value} className="flex gap-2">
                                    <input
                                        onChange={toggleCategory}
                                        type="checkbox"
                                        className="w-3"
                                        value={item.value}
                                    />
                                    {item.label}
                                </p>
                            ))}
                    </div>
                </div>
                {/* subCategory filter  */}
                <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilters ? '' : 'hidden'} sm:block`}>
                    <p className="mb-3 text-sm font-medium text-red-800">TYPE</p>
                    <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                        {subCategories.length > 0 &&
                            subCategories.map((item) => (
                                <p key={item.value} className="flex gap-2">
                                    <input
                                        onChange={toggleSubCategory}
                                        type="checkbox"
                                        className="w-3"
                                        value={item.value}
                                    />
                                    {item.label}
                                </p>
                            ))}
                    </div>
                </div>
            </div>
            {/* right side  */}
            <div className="flex-1">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-base sm:text-2xl mb-4">
                    <Title secondaryText={'ALL'} primaryText={'COLLECTIONS'} />
                    {/* Product sort */}
                    <select
                        className="appearance-none border border-gray-300 bg-white text-sm px-3 py-2 rounded-md shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 mt-2 sm:mt-0"
                        name=""
                        id=""
                        onChange={(e) => setSortType(e.target.value)}
                    >
                        {sortOptions.length > 0 &&
                            sortOptions.map((option, index) => (
                                <option key={index} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                    </select>
                </div>
                {/* Map products  */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
                    {filterProducts.length > 0 &&
                        filterProducts.map((items) => (
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
        </div>
    );
};

export default Collection;
