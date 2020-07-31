import React from 'react'
import './Product'

function Product({id, price, title, image, ratings}) {
    return (
        <div className="product" key = {id}>
            <p>{title}</p>
               <p className="product__">
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
                       <img src={process.env.PUBLIC_URL + image}alt="title"/>  
                       <button>Add to basket</button>         
        </div>
    )
}

export default Product
