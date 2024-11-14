import React from 'react';

const Footer = () => {
    return (
        <div className='mt-12 py-12 mx-auto bg-white'>
            <div className="text-center space-y-2">
                <h2 className='text-2xl font-bold text-[#09080F]'>Gadget Heaven</h2>
                <p className='text-gray-500 font-medium'>Leading the way in cutting-edge technology and innovation.</p><br />
                <hr />
            </div>
            <footer className="footer p-10 justify-items-center">
                <nav>
                    <h6 className="footer-title opacity-100 font-extrabold">Services</h6>
                    <a className="link link-hover">Product Support</a>
                    <a className="link link-hover">Order Tracking</a>
                    <a className="link link-hover">Shipping & Delivery</a>
                    <a className="link link-hover">Returns</a>
                </nav>
                <nav>
                    <h6 className="footer-title opacity-100 font-extrabold">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <h6 className="footer-title opacity-100 font-extrabold">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;