import React from 'react'

const FooterSection = ({title, items}) => {
    const itemsArray = Object.values(items);
  return (
    <div>
            <h6 className='font-medium text-gray-400'>{title}</h6>
            <ul>
                {
                    items.map((item) => (<li className='py-2 text-sm'>{item}</li>))
                }
            </ul>
        </div>
  )
}

export default FooterSection
