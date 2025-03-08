import React, { useState } from 'react'
import { Button1, Button2 } from '../button/button'

const Card = ({props, addItem, removeItem}) => {

  const [count, setCount] = useState(0)

  const handlePlus = () =>{
    addItem(props);
    setCount(prev=>prev+1)
  }

  const handleMinus = () =>{
      removeItem(props);
      setCount(prev=>prev-1)
  }

  return (
    <div className='relative min-w-30 w-min m-2 space-y-0'>
      <p className={`font-bold text-white bg-amber-400 h-6 w-6 justify-center items-center rounded-full right-0 top-0 absolute ${count > 0 ? 'flex' : 'hidden'}`}>{count}</p>
      <div className='h-20 sm:h-25 w-full flex justify-center items-center'>
        <img className='h-max max-h-20 sm:max-h-25' src={props.image} alt={props.name} />
      </div>
      <div className='flex justify-center gap-1 text-[15px] p-1'>
        <h1 className='font-semibold'>{props.name}</h1>
        <span>⇨</span>
        <h1 className='font-bold'>${props.price}</h1>
      </div>
      <div>
        {count > 0 
          ? 
          <div className='flex w-full gap-2'>
            <Button2 v1={true} onClick={handleMinus}/>
            <Button2 v2={true} onClick={handlePlus}/>
          </div> 
          : 
          <Button1 onClick={handlePlus}/>
        }
      </div>
    </div>
  )
}

export default Card