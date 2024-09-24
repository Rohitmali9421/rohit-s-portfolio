import React, { useState } from 'react';
import { FaBarsStaggered } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";  
import { FaInstagram } from "react-icons/fa";
function Header() {
    const [menu, setMenu] = useState(false);

    const handleMenuToggle = () => {
        setMenu(!menu);
    };

    return (
        <div className='w-full backdrop-blur-2xl h-14 fixed z-50 flex justify-between items-center px-10 md:px-20 text-2xl border-b-[1px] border-gray-500'>
            <div>
                <h1 className='text-white'>Rohit</h1>
            </div>

            <div className='gap-7 grid-cols-4 sm:grid hidden'>
                <h1 className='text-white text-lg font-Kanit cursor-pointer'>Home</h1>
                <h1 className='text-white text-lg font-Kanit cursor-pointer'>Skills</h1>
                <h1 className='text-white text-lg font-Kanit cursor-pointer'>Projects</h1>
                <h1 className='text-white text-lg font-Kanit cursor-pointer'>Contact</h1>
            </div>


            <div className='sm:hidden'>
                <FaBarsStaggered onClick={handleMenuToggle} className='text-white cursor-pointer' />
                <div className={`${menu ? "flex flex-col justify-between" : "hidden"} md:hidden absolute bg-white text-black h-screen top-0 right-0 w-[70vw] p-5`}>
                    <div>
                        <IoIosArrowForward className='ml-2 mb-2 text-blue-500' onClick={handleMenuToggle} />
                        <h1 onClick={handleMenuToggle} className='px-4 py-1 text-lg  font-Kanit cursor-pointer mb-5 border-b-2  '>Home</h1>
                        <h1 onClick={handleMenuToggle} className='px-4 py-1 text-lg  font-Kanit cursor-pointer mb-5 border-b-2  '>Home</h1>
                        <h1 onClick={handleMenuToggle} className='px-4 py-1 text-lg  font-Kanit cursor-pointer mb-5 border-b-2  '>Home</h1>
                        <h1 onClick={handleMenuToggle} className='px-4 py-1 text-lg  font-Kanit cursor-pointer mb-5 border-b-2  '>Home</h1>
                    </div>
                    <div className='flex gap-2 items-center mt-2 px-4 mb-4 text-black'>
                        <a href="https://github.com/Rohitmali9421"><FaGithub className='text-2xl ' /></a>
                        <a href="https://www.linkedin.com/in/rohit-mali7569/"><FaLinkedin className='text-2xl ' /></a>
                        <a href="https://twitter.com/rohitma13641165#"><FaXTwitter className='text-2xl ' /></a>
                        <a href="#"><FaInstagram className='text-2xl ' /></a>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Header;
