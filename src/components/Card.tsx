import React from 'react'
import Button from './Button';

const Card = ({title, image, price, storage, sendUpTo, usersAllowed}) => {
  return (
    <div className='w-full shadow-xl grid grid-rows-auto gap-2 p-4 md:my-4 my-5 rounded-lg hover:scale-105 duration-300'>
                <img src={image} className='w-20 mx-auto mt-[-3rem] bg-white' alt={title}/>
                <h2 className='text-2xl font-bold text-center py-8 text-black'>{title}</h2>
                <p className='text-center text-4xl font-bold'>{price}</p>

                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>{storage}</p>
                    <p className='py-2 border-b mx-8'>{sendUpTo}</p>
                    <p className='py-2 mx-8'>{usersAllowed}</p>
                    
                </div>
                
                <Button content={'Start trial'}/>
    </div>
  )
}
export default Card


/**
 * 
 * <div className='w-full shadow-xl flex flex-col p-4 md:my-4 my-4 rounded-lg hover:scale-105 duration-300 items-center'>
                <img src={image} className='w-20 mx-auto mt-[-3rem] bg-white' alt={title}/>
                <h2 className='text-2xl font-bold text-center py-8 text-black'>{title}</h2>

                <ul className='text-center font-medium w-full'>
                    <li className='border-b mx-8 mt-8 border-t border-gray-300 py-2 font-bold text-center text-4xl'>{price}</li>
                    <li className='border-b mx-8  border-gray-300 py-2'>{storage}</li>
                    <li className='border-b mx-8  border-gray-300 py-2'>{usersAllowed}</li>
                    <li className='py-2 mx-8'>{sendUpTo}</li>
                </ul>

                <Button/>
    </div>
 */