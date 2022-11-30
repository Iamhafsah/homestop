import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {removeFromWishList,addToCart} from '../product/productSlice'

const WishList = () => {
  const wishListCount = useSelector(state => state.productCount.wishList)
  const dispatch = useDispatch()

  return (
    <div className='max-w-[90%] mx-auto py-16'>
       <h1 className='font-[600] xl:text-4xl lg:text-3xl text-2xl lg:py-10 py-6 pl-2'>Wish List ✨ ✍🏼</h1>

      <div className='grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4'>
      {wishListCount?.map(item => {
        const {id, name,stock,price,image} = item

        return (
          <div key={id} className="rounded hover:shadow  pb-4  border justify-center items-center">
            <div className='lg:h-[250px] h-[200px] w-full border-b flex justify-center items-center'>
              <img src={image} alt={name} width={100} className="w-[100%] h-[100%]"/>
            </div>

            <div className='pl-2'>
              <p className='font-bold max-w-[90%] h-[60px] pt-4 leading-[20px]'>{name}</p>
              <p className='font-bold'>${price}</p>
                
              <div className='flex justify-between pt-4 pb-2 pr-2 '>
                <button onClick={()=> dispatch(removeFromWishList(id))} className='mt-2  border-[#14110E] border py-2 px-4 rounded text-[14px]'>Remove</button>

                <button onClick={()=> dispatch(addToCart({id, name, price, stock, image}))} className='mt-2 bg-[#14110E] text-white py-2 px-4 rounded text-[14px]'>Add to cart</button>
              </div>

              <p className='text-[#94a3b8] text-[14px] mt-4'>{stock} items left</p>
            </div>
          </div>
        )
      })}
      </div>

       {!wishListCount.length > 0 && <p className='font-bold text-xl'>😥 You have no item in your wish list</p>}
    </div>
  )
}

export default WishList