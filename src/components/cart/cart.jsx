import React, { useEffect, useState } from 'react'
import { Button } from '../button/button'

const Cart = ({products}) => {

  const [total,setTotal] = useState(0)

  useEffect(()=>{
    setTotal(0)
    if(products.length !== 0){
      products.map(x=>{
        setTotal(prev=>prev + x.price * x.quantity)
      })
    }
  },[products])
    
  return (
    <Button total={total.toFixed(2)}/>
  )
}

export default Cart