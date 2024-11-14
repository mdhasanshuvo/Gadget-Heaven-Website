import React, { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";
import love from '../../assets/Love.svg'
import { CardContext, WishContext } from '../Root/Root';

const Navbar = () => {

    const links = <>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/stat'>Statistics</NavLink>
        <NavLink to='/dashboard'>Dashboard</NavLink>
        <NavLink to='/qa'>Q&A</NavLink>
    </>

    const location = useLocation();

    const [card] = useContext(CardContext);
    const [wish] = useContext(WishContext);

    return (
        <div className={`${location.pathname === '/' || location.pathname.includes('home') ? 'absolute' : ''} container`}>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-2xl font-semibold text-black">Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-6 text-lg font-semibold">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end ">
                    <button className="btn btn-ghost btn-circle text-2xl relative border rounded-full border-white bg-white">
                    <IoCartOutline />
                    <h2 className='absolute bottom-7 left-6 text-sm'>{card.length}</h2>
                    </button>
                    <button className="btn btn-ghost btn-circle relative border rounded-full border-white bg-white">
                        <img src={love} alt="" />
                        <h2 className='absolute bottom-8 left-6'>{wish.length}</h2>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;