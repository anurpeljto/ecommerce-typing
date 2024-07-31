import React from 'react'
import Card from './Card';
import { plans } from '../constants';

const Newsletter = () => {
  const planArray = Object.values(plans);
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>   
      
      
        {
          planArray.map((plan, index) => {
            return <Card {...plan} key={index}/>
          })
        }

      </div>
    </div>
  )
}

export default Newsletter


