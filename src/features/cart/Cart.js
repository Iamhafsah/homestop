import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {removeItem, increaseQty,decreaseQty} from "../product/productSlice"


const Cart = () => {
  const cart = useSelector(state => state.productCount.cart)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Shopping Cart</h1>

      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr"}}>
      {
        cart.length > 0 && cart.map(item => {
          const {id, name, quantity, stock,image} = item
          return (
            <div key={id}>
              <img src={image} alt={name} width={100}/>
              <p>{name}</p>
              <button onClick={()=>dispatch(decreaseQty(id))}>-</button>
              <span> Quantity: {quantity} </span>
              <button onClick={()=>{
                if(stock > 0){
                  dispatch(increaseQty(id))
                }
                }}>+</button> <br/><br/>
              <button onClick={()=>dispatch(removeItem(id))}>Remove from cart</button><br/><br/>
              <p>{stock} pieces remaining</p>
            </div>
          )
        })
      }
      </div>

      {!cart.length > 0 && <p>😥 You have no item in your cart</p>}

      {cart.length > 0  && <button>Proceed to checkout</button>}
    </div>
  )
}

export default Cart