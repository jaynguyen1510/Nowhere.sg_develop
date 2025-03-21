import React from 'react';

const Title = ({ secondaryText, primaryText }) => {
    return (
        <div className="inline-flex gap-2 items-center mb-3">
            <p className=" text-red-800">
                {secondaryText}
                <span className="ml-2 text-gray-700 font-medium">{primaryText}</span>
            </p>
            <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
        </div>
    );
};

export default Title;
