import React from 'react'
import { Link} from 'react-router-dom'
import { useSelector } from 'react-redux';
import { ShoppingCartIcon, ShoppingBagIcon, UserIcon,HeartIcon} from '@heroicons/react/24/outline'
import {HomeModernIcon } from '@heroicons/react/24/solid'


const iconWrap =`
  px-8 py-4
  flex items-center
  gap-1
  font-[550]
  text-[14px]
`
const iconStyle = `
  h-5 w-6 inline -mt-1
`
const cartCount = `
  bg-[#A06448] 
  text-white 
  px-1 rounded-full 
  text-[10px] 
  font-bold 
  absolute 
  left-[14px] 
  top-[-6px]
`

const Navigation = () => {
  const cart = useSelector(state => state.productCount.cart)

  return (
    <div className='border-b'>
      <nav className='flex justify-between items-center max-w-[90%] mx-auto text-[#14110E]'>
        <Link to={'/'}><HomeModernIcon className={iconStyle}/><b>Home</b>stop<b>.</b></Link>

        <ul className='flex divide-x border-l'>
          <li className={iconWrap}>
            <Link to='/wishlist' className='relative'><HeartIcon className={`${iconStyle} mr-1`}/> <span className={cartCount}>0</span> Wishlist</Link>
          </li>
          <li className={iconWrap}> 
            <Link to='/cart' className='relative'><ShoppingCartIcon className={`${iconStyle} mt-0 mr-1`}/> <span className={cartCount}>{cart.length}</span> Cart</Link>
          </li>
          <li className={iconWrap}> <UserIcon className={`${iconStyle} mt-0`}/>Hafsah Emekoma</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation