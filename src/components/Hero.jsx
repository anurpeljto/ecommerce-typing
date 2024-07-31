import React from 'react'
import {screenText} from '../constants/index';
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] justify-center w-full h-screen mx-auto text-center flex flex-col'>
            <p className='text-[#00df9a] font-bold py-2'>{screenText.home.title}</p>
            <h1 className='md:text-6xl sm:text-5xl text-4xl font-bold md:py-6'>{screenText.home.title_2}</h1>
            <div className='flex flex-row items-center justify-center'>
                <p className='md:text-4xl sm:text-3xl text-xl font-semibold'>{screenText.home.paragraph}</p>
                <ReactTyped className='md:text-4xl sm:text-3xl text-xl font-semibold md:pl-3 pl-1.5' strings={screenText.home.dynamic_strings} typeSpeed={120} backSpeed={140} loop/>
            </div>

            <p className='md:text-2xl text-xl font-bold text-gray-500 '>Monitor your data analytics to increase revenue for BTB, BTC & SASS platforms</p>
            <button className='bg-[#00df9a] w-[200px] my-6 mx-auto py-2 rounded font-medium text-black'>Get started</button>
        </div>

    </div>
  );
}

export default Hero;
