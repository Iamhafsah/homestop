import React from 'react'
import { Link} from 'react-router-dom'
import { useSelector } from 'react-redux';
import { ShoppingCartIcon, UserIcon,HeartIcon} from '@heroicons/react/24/outline'
import {HomeModernIcon } from '@heroicons/react/24/solid'


const iconWrap =`
  md:px-8 
  px-2
  py-4
  flex items-center
  gap-1
  font-[550]
  md:text-[14px]
  text-[12px]
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
  const wishList = useSelector(state => state.productCount.wishList)


  return (
    <div className='border-b fixed bg-white w-full z-10'>
      <nav className='flex justify-between items-center max-w-[90%] mx-auto text-[#14110E]'>
        <Link to={'/'}><HomeModernIcon className={iconStyle}/><b>Home</b>stop<b>.</b></Link>

        <ul className='flex divide-x border-l'>
          <li className={iconWrap}>
            <Link to='/wishlist' className='relative'><HeartIcon className={`${iconStyle} mr-1`}/> <span className={cartCount}>{wishList.length}</span> Wishlist</Link>
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