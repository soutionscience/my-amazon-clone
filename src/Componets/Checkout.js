import React from 'react'
import { useStateValue } from './StateProvider'
import CheckoutProducts from './CheckoutProducts'
import './Checkout.css'
import SubTotal from './SubTotal'
import Header from './Header'



function Checkout() {
    const [{basket}]=  useStateValue()
    //console.log('basket', basket)
    return (
        <div>
          <Header/>
          <div className ="checkout">
     

     <div className ="checkout_left">
     <img
     className ="checkout_ad"
     src="https://ke.jumia.is/cms/2020/SuperBrandDay/L'Oreal/live/ezgif-4-b42292727a8c.gif"
     alt="advert" 
     />

     {basket?.length === 0?(
         <div>
             <h2>Your shopping basket is empty</h2>
             <p>You have no items in your basket</p>
         </div>
     ):(
         <div>
             <h2 className="checkout_title">Your shopping Basket</h2>
         
            {basket.map(item=>(
                <div key={item.id}>
                <CheckoutProducts
                id ={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                ratings={item.ratings} />
                </div>
            ))}

         </div>
     )}
     </div>

         {basket.length> 0 && (
             <div className="checkout_right">
              <SubTotal/>
             </div>
         )}
   
     
 </div>
        </div>
       
    )
}

export default Checkout
