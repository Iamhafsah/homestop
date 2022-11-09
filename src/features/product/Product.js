import React from 'react';
import { useDispatch } from 'react-redux';
import {addToCart,} from "./productSlice"
import { mockData } from './mockdata';
import FeaturedImage from './FeaturedImage';
import {HeartIcon, ShoppingCartIcon} from '@heroicons/react/24/outline'


const Product = () => {
  const dispatch = useDispatch();

  return (
    <div className='bg-[#f8fafc]'>
      <FeaturedImage/>

      <div className='max-w-[90%] mx-auto border-x'>
        <h2 className='font-[600] xl:text-4xl text-3xl py-10 pl-2'>Catalog ✨</h2>
        <div className='grid gap-4 lg:grid-cols-4 grid-cols-3 pb-8 px-2'>
          {mockData.map(item => {
            const {id,name,price,stock,image} = item
            return (
              <div key={id} className="rounded hover:shadow  pb-4  border justify-center items-center">
                <div className='h-[250px] w-full border-b flex justify-center items-center relative'>
                  <img src={image} alt={name} className="w-[150px] "/>
                  <button className='absolute border hover:border-[#A06448] rounded-full top-3 right-3 flex justify-center items-center py-[6px]'>
                    <HeartIcon className='h-3 w-6 inline'/>
                  </button>
                </div>
                
                <div className='pl-4'>
                  <p className='font-bold max-w-[80%] h-[60px] pt-4 mb-4 leading-[20px]'>{name}</p>
                  
                  <div className='flex items-center justify-between pr-4'>
                    <div>
                      <p className='text-[#94a3b8] text-[14px]'>Price:</p>
                      <p className='font-bold'>${price}</p>
                    </div>
                    <div>
                    <button className='bg-[#A06448] text-white rounded-full py-2 px-2 active:opacity-[.7] flex justify-center items-center' onClick={()=>dispatch(addToCart({id, name, price, stock, image}))}><ShoppingCartIcon className='h-4 w-4 inline'/>
                    </button>
                    </div>
                  </div>
                </div>
                
                
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Product