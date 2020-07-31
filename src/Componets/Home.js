import React from 'react'
import Product from './Product'
import banner from '../assets/images/banner1.jpg'
 
function Home() {
    return (
        <div className="home">
          <img  alt="banner" className="home_banner"
         src={banner}
         ></img>
         <div key={1}>
             <Product
             id={1}
             title="Pride Professional Tee System, 2-3/4 inch ProLength Tee"
             image="/controller.png"
             price={200}
             ratings={4}
             />
         </div>

        </div>
    )
}

export default Home
