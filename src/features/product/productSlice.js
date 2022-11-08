import { createSlice } from '@reduxjs/toolkit'


export const productSlice = createSlice({
  name:'productCount',
  initialState:{
    cart:[]
  },
  reducers:{
    addToCart: (state, action)=> {
      const itemInCart = state.cart.find(item => item.id === action.payload.id)
      if(itemInCart){
       itemInCart.quantity ++
       itemInCart.stock --
      }else{
        state.cart.push({...action.payload, stock: action.payload.stock - 1, quantity: 1})
      }
    },
    decreaseQty: (state, action)=> {
      const item = state.cart.find(item => item.id === action.payload)
      if(item.quantity === 1){
        state.cart = state.cart.filter(item => item.id !== action.payload)
      }else{
        item.quantity --
        item.stock ++
      }
    },
    increaseQty: (state, action)=> {
      const item = state.cart.find(item => item.id === action.payload)
      item.quantity ++
      item.stock --
    },
    removeItem: (state, action)=> {
      state.cart = state.cart.filter(item => item.id !== action.payload)
    },
  }
})

export const { addToCart, removeItem, decreaseQty,increaseQty } = productSlice.actions

export default productSlice.reducer

