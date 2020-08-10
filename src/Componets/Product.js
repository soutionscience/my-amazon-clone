import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider';



function Product({id, price, title, image, ratings}) {
    const [{basket},dispatch] = useStateValue()

    const addToBasket =()=>{
       //  console.log('cliked')
            dispatch({
                type: 'ADD_TO_BASKET',
                item:{
                    id,
                    title,
                    image,
                    ratings,
                    price
                }
            })

    }
    return (
        <div className="product" key = {id}>
            <div className="product_info">
            <p>{title}</p>
               <p className="product_price">
                   <small>$</small>
                   <strong>{price}</strong>
                   </p> 
                   <div className ="product_rating">
                       {Array(ratings)
                       .fill()
                       .map((_)=>(
                           <span role="img" alt="ratings">⭐️</span>
                       ))}
                       </div>


            </div>
        
                       <img src={process.env.PUBLIC_URL + image}alt="title"/>  
                       <button onClick = {addToBasket}>Add to basket</button>         
        </div>
    )
}

export default Product
