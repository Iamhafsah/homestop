import { createSlice } from '@reduxjs/toolkit'


export const productSlice = createSlice({
  name:'productCount',
  initialState:{
    cart:[],
    wishList:[],
  },
  reducers:{
    addToCart: (state, action)=> {
      const itemInCart = state.cart.find(item => item.id === action.payload.id)
      const isInList = state.wishList.find(item => item.id === action.payload.id)
      
      if(itemInCart){
      alert(`You already added ${action.payload.name} to your cart`)
      }else if(isInList){
        state.wishList = state.wishList.filter(item => item.id !== action.payload.id)
        state.cart.push({...action.payload, stock: action.payload.stock - 1, quantity: 1})
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
    emptyCart: (state)=> {
      state.cart = []
    },
    addToWishlist: (state, action)=> {
      const isInCart = state.cart.find(item => item.id === action.payload.id)
      const isInList = state.wishList.find(item => item.id === action.payload.id)

      if(isInCart){
        if(window.confirm('Item is already in cart. Do you want to move it to your wishlist ?') === true){
          state.wishList.push({...action.payload})
          state.cart = state.cart.filter(item => item.id !== action.payload.id)
          // item.quantity ++
        }
      } else if(isInList){
        alert(`You already added ${action.payload.name} to your wishList`)
      }
      else{
        state.wishList.push({...action.payload})
      }
    },
    removeFromWishList: (state, action)=> {
      state.wishList = state.wishList.filter(item => item.id !== action.payload)
    }
  }
})

export const { addToCart, removeItem, decreaseQty,increaseQty, addToWishlist, removeFromWishList ,emptyCart} = productSlice.actions

export default productSlice.reducer

