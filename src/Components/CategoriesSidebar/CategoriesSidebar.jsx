import React from 'react';
import { NavLink } from 'react-router-dom';


const CategoriesSidebar = () => {
    return (
        <div className='w-[500px] bg-white p-6 border rounded-xl gap-6 max-h-fit flex flex-col font-bold'>
            <NavLink className='btn rounded-2xl' to='/'>All Product</NavLink>
            <NavLink className='btn rounded-2xl' to='/home/Laptops'>Laptops</NavLink>
            <NavLink className='btn rounded-2xl' to='/home/Smartphones'>Phones</NavLink>
            <NavLink className='btn rounded-2xl' to='/home/Smart Watches'>Smart Watches</NavLink>
            <NavLink className='btn rounded-2xl' to='/home/Accessories'>Accessories</NavLink>
        </div>
    );
};

export default CategoriesSidebar;