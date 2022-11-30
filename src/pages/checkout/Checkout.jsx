import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { emptyCart } from 'pages/product/productSlice'

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector(state => state.productCount.cart)
  const [carted, setCarted] = useState(false)

  const getTotal = ()=> {
    let totalAmount = 0;

    cartItems.forEach(item => {
      totalAmount += item.price * item.quantity;
    })

    return {totalAmount}
  }

  const onClickProceed = ()=> {
    setCarted(true)
    dispatch(emptyCart())
    
    setTimeout(() => {
      navigate('/')
    }, 5000);
  }

  return (
    <div className='max-w-[90%] mx-auto py-16'>
      {carted ? (
        <>
          <h1 className='font-[600] xl:text-4xl lg:text-3xl text-2xl lg:py-10 pt-6 pb-12 '>Thank You for Shopping With Us! We Hope To see You Again. 🤗</h1>
        </>):
        <>
          <h1 className='font-[600] xl:text-4xl lg:text-3xl text-2xl lg:py-10 pt-6 pb-12 '>Take Your Goodies Home With You 🛍</h1>

          <div className='flex justify-between'>
            <div>
              {cartItems.map((item, index) => (
                <div key={`${item.name}-${index}`} className="flex mb-4 gap-4 items-center">
                  <div className='w-[250px] lg:w-[400px]'>
                    <img src={item.image} alt={item.name} width={100} className="w-[100%] max-h-[300px]"/>
                  </div>

                  <div>
                    <p className='lg:text-2xl text-xl font-[600]'>{item.name} ({item.quantity})</p>
                    
                    {item.quantity > 1 ? (
                      <p className='font-[600]'>${item.price} x {item.quantity} = ${item.quantity * item.price}</p>
                    ): <p className='font-[600]'>${item.price}</p>
                    } 
                  </div>
                </div>
              ))}
            </div>
            <div>
              <p className=' text-xl pb-1'>Subtotal: ${getTotal().totalAmount}</p>
              <p className='text-xl border-b-2 border-black mb-4 pb-1'>Shipping Fee : $2</p>
              <p className='font-bold text-xl'>Total: ${getTotal().totalAmount + 2}</p>

              <button onClick={onClickProceed} className='mt-6 bg-[#14110E] text-white py-2 px-8 rounded'>Proceed</button>
            </div>
          </div>
        </>
      }
    </div>
  )
}

export default Checkout