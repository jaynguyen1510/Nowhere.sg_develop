import React from 'react';
import logo from '../assets/logoNowhere_sg.jpg';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { BiLogoFacebook } from 'react-icons/bi';
const Footer = () => {
    return (
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
            <div className="">
                <img src={logo} alt="logo" className="mb-5 w-32" />
                <p className="text-gray-600 w-full md:w-2/3 ">
                    Chào mừng bạn đến với Nowhere.Sg! Nơi có thể lựa chọn outfit theo phong cách của bạn.
                </p>
            </div>
            {/* Cột COMPANY */}
            <div className="">
                <p className="text-xl font-medium mb-5 text-red-800">COMPANY</p>
                <ul className="flex flex-col gap-1 text-gray-600">
                    <li>HOME</li>
                    <li>ABOUT US</li>
                    <li>DELIVERY</li>
                    <li>PRIVACY POLICY</li>
                </ul>
            </div>
            {/* Cột GET IN TOUCH */}
            <div className="">
                <p className="text-xl font-medium mb-5 text-red-800">GET IN TOUCH</p>
                <ul className="flex flex-col gap-1 text-gray-600">
                    <li className="flex items-center gap-2">
                        <FaPhoneAlt className="text-red-800" />
                        0362464361
                    </li>
                    <li className="flex items-center gap-2">
                        <FaPhoneAlt className="text-red-800" />
                        0934847762
                    </li>
                    <li className="flex items-center gap-2">
                        <FaEnvelope className="text-red-800" />
                        ngnhatnam1510@gmail.com
                    </li>
                    <li className="flex items-center gap-2">
                        <BiLogoFacebook className="text-red-800" />
                        <a
                            href="https://www.facebook.com/share/15WKtVbs92/?mibextid=wwXIfr"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:underline text-red-800"
                        >
                            Nowhere.Sg
                        </a>
                    </li>
                </ul>
            </div>
            {/* Footer bottom */}
            <div className="sm:col-span-3 py-5 text-sm text-center">
                <hr />
                <p>Copyright 2025@ Nowhere.Sg.com - All Right Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
