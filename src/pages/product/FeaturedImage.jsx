import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart, addToWishlist } from './productSlice'
import Image from 'assets/featured-img.jpg'
import { ShoppingCartIcon, PlusIcon,HeartIcon} from '@heroicons/react/24/outline'
import { ShieldCheckIcon} from '@heroicons/react/24/solid'

const FeaturedImage = () => {
  const dispatch = useDispatch();

  return (
    <div className='max-w-[90%] mx-auto text-[#14110E] flex md:flex-row flex-col-reverse md:justify-between md:items-center py-8 border-x border-b pl-2 pr-2 md:pr-0'>
      <div>
        <h1 className='font-[600] xl:text-4xl lg:text-3xl text-2xl md:max-w-auto sm:max-w-[60vw] max-w-[80vw] mt-6 md:mt-0'>The Iheoma Minimalist <br className='hidden md:block'/> Home Set in Subtle <br className='hidden md:block'/> Neutral Colours </h1>
        <div className='lg:pt-8 pt-4'>
          <button className='bg-[#14110E] text-white text-[14px] rounded py-3 px-6 active:opacity-[.6]' onClick={()=> dispatch(addToCart({id:"01",name: "The Iheoma Minimalist Set", price:"8000", stock:"2", image:Image}))}>
            <ShoppingCartIcon className='h-5 w-6 inline'/> $8,000
          </button>
          <button 
          onClick={()=> dispatch(addToWishlist({id:"01",name: "The Iheoma Minimalist Set", price:"8000", stock:"2", image:Image}))}
          className='text-[#A06448] text-[14px] ml-4 rounded border p-3 relative active:border-black'>
            <HeartIcon className='h-5 w-6 inline'/> 
              <PlusIcon className='h-3 w-3 inline bg-white rounded-full absolute left-6 top-6'/>
          </button>
          <p className='flex items-center text-[#A06448] lg:pt-8 pt-4 text-[14px]'>
            <ShieldCheckIcon className='h-4 w-5 inline  '/>
            <span>Money back guarantee</span>
          </p>
        </div>
      </div>
      <img 
        src={Image} 
        alt='home furniture set'
        className='lg:w-[60vw] md:w-[50vw]'
        />
    </div>
  )
}

export default FeaturedImage