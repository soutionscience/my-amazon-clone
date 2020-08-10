import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProducts({id, ratings, image, title, price}) {
    //console.log('id ',id)
    const [{basket}, dispatch] = useStateValue()
   const removeFromBasket = ()=>{
       console.log('remove')
       dispatch({
           type: 'REMOVE',
           item:id
       })
   }

    return (
        <div className ="checkoutProduct" key={id}>
            <img className="checkoutProduct_image" src ={image} alt={title}/>
            <div className ="checkoutProduct_info">
                <p className ="checkoutProduct_title">{title}</p>
                <p className="checkoutProduct_price">
                    
                    <small>$</small>
                    <strong>{price}</strong></p>
                    <div className ="checkout_product_rating">
                        {Array(ratings)
                        .fill()
                        .map((_, i)=>(
                            <p>⭐️</p>
                        ))}
                    </div>
                  
                    <button onClick ={removeFromBasket}> Remove From Basket</button>
               
            </div>
            
        </div>
    )
}

export default CheckoutProducts
