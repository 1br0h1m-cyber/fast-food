import React from 'react'
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { ImPlus } from "react-icons/im";
import { ImMinus } from "react-icons/im";

const Button = ({total, onClick}) => {
  return (
    <div className='flex justify-between items-center w-full h-13 p-3 px-5 sm:px-25 md:px-40 lg:px-64 gap-3 bg-white'>
      <h1 className='flex gap-2 font-semibold text-[20px] w-1/2 p-1 rounded-lg'>
        Total: <span className='flex gap-1 font-bold'>$ <div>{total}</div> </span>
      </h1>
      <button className='flex justify-center items-center w-1/2 font-semibold bg-green-600 hover:bg-green-700 text-white p-1.5 gap-1 cursor-pointer transition-all rounded-lg' onClick={onClick}>
        <MdOutlineShoppingCart /> View Order
      </button>   
    </div>
  )
}

const Button1 = ({onClick}) => {
  return (
    <button className='flex justify-center items-center w-full bg-amber-400 hover:bg-amber-500 text-white text-[15px] font-semibold rounded-lg gap-1 p-0.5 cursor-pointer transition-all' onClick={onClick}>
      <MdOutlineAddShoppingCart /> Add
    </button>
  )
}

const Button2 = ({ v1 = false, v2 = false, onClick }) => {
  return (
    <button className={`flex justify-center items-center w-full ${v1 ? 'bg-red-700 hover:bg-red-800' : 'bg-amber-400 hover:bg-amber-500'} text-white rounded-md p-1 cursor-pointer transition-all`} onClick={onClick}>{v1 ? <ImMinus/> : <ImPlus />}</button>
  )
}

export { Button, Button1, Button2 }