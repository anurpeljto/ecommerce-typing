import React from 'react'
import {laptop} from '../assets/index';
import Button from './Button';
import { screenText, colors } from '../constants';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 grid-cols-1 grid-flow-row md:grid-flow-col'>
            <img src={laptop} alt="laptop" className='w-[500px] mx-auto my-4'/>

            <div className='flex flex-col justify-center'>
                <p className={`text-[${colors.green}] font-bold md:text-4xl sm:text-3xl text-2xl py-2`}>{screenText.analytics.title}</p>
                <h1>{screenText.analytics.title_2}</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sunt debitis magnam eligendi rem cumque ipsam, in laudantium inventore officiis aspernatur harum deleniti saepe praesentium sit dolorum exercitationem. Ab, odit?
                </p>
                <Button styles={`bg-[${colors.black}] text-[${colors.green}]`}/>
            </div>
        </div>
    </div>
  )
}

export default Analytics
