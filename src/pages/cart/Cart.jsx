import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {removeItem, increaseQty,decreaseQty} from "../product/productSlice"
import {ShoppingBagIcon} from '@heroicons/react/24/outline'


const qtyBtnStyle = `
bg-[#A06448] text-white rounded-full w-6 active:opacity-[.7] pb-[1px] font-bold 
`
const Cart = () => {
  const cart = useSelector(state => state.productCount.cart)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const getTotal = ()=> {
    let totalQuantity = 0;
    let totalAmount = 0;

    cart.forEach(item => {
      totalQuantity += item.quantity;
      totalAmount += item.price * item.quantity;
    })

    return {totalAmount, totalQuantity}
  }

  return (
    <div className='max-w-[90%] mx-auto py-16'>
      <h1 className='font-[600] xl:text-4xl lg:text-3xl text-2xl lg:py-10 py-6 pl-2'>Shopping Cart</h1>

      <div className='grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4'>
      {
        cart.length > 0 && cart.map(item => {
          const {id, name, quantity, stock,image,price} = item
          return (
            <div key={id} className="rounded hover:shadow  pb-4  border justify-center items-center">
              <div className='lg:h-[250px] h-[200px] w-full border-b flex justify-center items-center'>
                <img src={image} alt={name} width={100} className="w-[100%] h-[100%]"/>
              </div>

              <div className='px-4'>
                <p className='font-bold max-w-[90%] h-[60px] pt-4 leading-[20px]'>{name}</p>

                <div className='flex justify-between pt-6 lg:pt-0'>
                  <div>
                    <p className='text-[#94a3b8] text-[14px] mb-3'>Price:</p>
                    <p className='font-bold mb-4 '>${price}</p>
                  </div>

                  <div>
                    <p className='text-[#94a3b8] text-[14px] mb-3'>Quantity:</p>
                    
                    <button onClick={()=>dispatch(decreaseQty(id))} className={qtyBtnStyle}>-</button>

                    <span className='font-bold '> {quantity} </span>

                    <button onClick={()=>{
                    if(stock > 0){
                      dispatch(increaseQty(id))
                    }
                    }} className={qtyBtnStyle}>+</button> 
                  </div>
                </div>
                
                <p className='text-[#94a3b8] text-[14px] mt-4'>{stock} pieces remaining</p>

                <button onClick={()=>dispatch(removeItem(id))} className='mt-2 bg-[#14110E]  text-white py-2 px-4 rounded text-[14px]'>Remove from cart</button>
              </div>
            </div>
          )
        })
      }
      </div>

      {!cart.length > 0 && <p className='font-bold text-xl'>😥 You have no item in your cart</p>}

      {cart.length > 0  && <div className='mt-20'>
        <p className='font-bold text-xl'>Items in cart: {getTotal().totalQuantity}</p>
        <p className='font-bold text-xl'>Total Amount: ${getTotal().totalAmount}</p>
        <button className='mt-6 bg-[#14110E] text-white py-2 px-4 rounded' onClick={()=>navigate('/checkout')}>Proceed to checkout <ShoppingBagIcon className='h-4 w-6 inline'/> </button>
      </div>}
    </div>
  )
}

export default Cart