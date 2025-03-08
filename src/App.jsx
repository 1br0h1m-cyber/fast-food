import Card from "./components/card/card"
import Products from "./data/mockData"
import logo from '../public/logo.ico'
import Cart from "./components/cart/cart"
import { useState } from "react"

function App() {
  
  const [cartItems,setCartItems] = useState([])

  const onAddItem = (item) =>{
    const existItem = cartItems.find(c=> c.id === item.id)

    if(existItem){
      const newData = cartItems.map(c=> c.id === item.id ? {...existItem, quantity: existItem.quantity + 1} : c)
      setCartItems(newData)
    } else{
      const newData = [...cartItems,{...item, quantity:1 }];
      setCartItems(newData)
    }
  }

  const onRemoveItem = (item) =>{
    const existItem = cartItems.find(c=> c.id === item.id)

    if(existItem.quantity === 1){
      const newData = cartItems.filter(c=>c.id !== item.id)
      setCartItems(newData)
    } else{
      const newData = cartItems.map(c=> c.id === existItem.id ? {...existItem, quantity: existItem.quantity - 1} : c)
      setCartItems(newData)
    }
  }


  return (
    <div className="">
      <div className="flex justify-center items-center gap-2 font-bold text-3xl text-red-500 shadow-md p-4 fixed w-full bg-white top-0 z-20">
        <img src={logo} alt="logo" className="w-9"/>
        Fast Foods
      </div>
      <div className="flex flex-wrap justify-center max-w-[720px] mx-auto p-2.5 mt-15 max-sm:mt-16 max-sm:mb-12">
        {Products.map((item,index)=>(
          <Card props={item} key={index} removeItem={onRemoveItem} addItem={onAddItem} />
        ))}
      </div>
      <div className="fixed bottom-0 w-full">
        <Cart products={cartItems}/>
      </div>
    </div>
  )
}

export default App
