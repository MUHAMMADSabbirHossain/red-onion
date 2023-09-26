import React from 'react';
import "./Banner.css";

const Banner = () => {
    return (
        <div>
            banner
            <h2 className='text-2xl font-semibold md:text-4xl lg:text-6xl'>Best food waiting for your belly</h2>
            <div className='my-6'>
                <input className='p-2 w-1/3 rounded-3xl  focus:outline-red-500 ' type="text" name="" id="" placeholder="search food items" />
                <button className='text-white bg-red-600 px-6 py-2 rounded-3xl hover:bg-red-700' type="submit">Search</button>
            </div>
        </div>
    );
};

export default Banner;