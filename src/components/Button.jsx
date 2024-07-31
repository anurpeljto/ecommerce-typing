import React from 'react'
import { colors } from '../constants'

const Button = ({styles, content}) => {
  return (
    <button className={`w-[200px] my-6 mx-auto md:mx-auto py-3 rounded font-medium ${styles == null ? `bg-[${colors.green}] font-black` : styles}`}> {content ? content : 'Get started'}</button>
  )
}

export default Button
