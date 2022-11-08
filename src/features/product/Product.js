import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {addToCart,} from "./productSlice"
import { mockData } from './mockdata';


const Product = () => {
  const count = useSelector(state => state.productCount.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <Link to="/cart">Cart {count.length} </Link>

        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr"}}>
          {mockData.map(item=> {
            const {id,name,price,stock,image} = item
            return (
              <div key={id}>
                <img src={image} alt={name} width="100px"/>
                <p>{name}</p>
                <p>${price}</p>
                {/* <p>{stock} items left</p> */}
                
                <button onClick={()=>dispatch(addToCart({id, name, price, stock, image}))}>Add to cart</button>
              </div>
            )
          })}
        </div>
        
      </div>

      
    </div>
  )
}

export default Product