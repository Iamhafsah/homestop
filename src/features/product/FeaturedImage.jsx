import React from 'react'
import Image from 'assets/featured-img.jpg'
import { ShoppingCartIcon, ShoppingBagIcon, PlusIcon} from '@heroicons/react/24/outline'
import { ShieldCheckIcon} from '@heroicons/react/24/solid'

const FeaturedImage = () => {
  return (
    <div className='max-w-[90%] mx-auto text-[#14110E] flex justify-between items-center py-8 border-x border-b pl-2'>
      <div className=''>
        <h1 className='font-[600] xl:text-4xl text-3xl'>The Iheoma Minimalist <br/> Home Set in Subtle <br/> Neutral Colours </h1>

        <div className='pt-8'>
          <button className='bg-[#14110E] text-white text-[14px] rounded py-3 px-6'>
            <ShoppingCartIcon className='h-5 w-6 inline'/> $8,000
          </button>
          <button className='text-[#A06448]   text-[14px] ml-4 rounded border p-3 relative'>
            <ShoppingBagIcon className='h-5 w-6 inline'/> 
              <PlusIcon className='h-3 w-3 inline bg-white rounded-full absolute left-6 top-6'/>
          </button>
          <p className='flex items-center text-[#A06448] pt-8 text-[14px]'>
            <ShieldCheckIcon className='h-4 w-5 inline  '/>
            <span>Money back guarantee</span>
          </p>
        </div>
      </div>
      <img 
        src={Image} 
        alt='home furniture set'
        className='lg:w-[60vw] w-[50vw]'
        />
    </div>
  )
}

export default FeaturedImage