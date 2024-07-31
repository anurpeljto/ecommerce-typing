import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import {navLinks} from '../../constants/index';

const Navbar = () => 
{
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    return(
        <div className='flex justify-between items-center h-24 max-w-[1240px] m-auto px-4 text-white'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>React</h1>
        <ul className='sm:flex hidden'>
            {/* <li className='p-4'>Home</li>
            <li className='p-4'>Company</li>
            <li className='p-4'>Resources</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Contact</li> */}

            {
                navLinks.map((link, index) => (
                    <li className='p-4 cursor-pointer' key={index}>{link.title}</li>
                ))
            }
            
        </ul>

        <div className='block md:hidden' onClick={() => handleNav()}>
            {!nav? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
        </div>

        <div className={`${nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}`}>
            <h1 className='w-full mt-4 ml-3 text-3xl font-bold text-[#00df9a]'>React</h1>
            <ul className='pt-24 uppercase'>
                <li className='p-4 border-b border-gray-600'>Home</li>
                <li className='p-4 border-b border-gray-600'>Company</li>
                <li className='p-4 border-b border-gray-600'>Resources</li>
                <li className='p-4 border-b border-gray-600'>About</li>
                <li className='p-4'>Contact</li>
            </ul>
        </div>
    </div>
    )

}

export default Navbar
