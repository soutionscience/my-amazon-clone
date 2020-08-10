import React from 'react'
import Product from './Product'
import banner from '../assets/images/banner1.jpg'
import './home.css'
import Header from './Header'
 
function Home() {
    return (
     
        <div className="home">
               <Header/>
          <img  alt="banner" className="home_banner"
         src={banner}
         ></img>
         <div className="home_row">
             <Product
             id={1}
             title="PS5 Controller for then new Playstation 5"
             image="/controller.png"
             price={80.59}
             ratings={4}
             />
            <Product
             id={2}
             title="The XBOX series X, 1TB "
             image="/xbox.png"
             price={349.99}
             ratings={4}
             />
         </div>
         <div  className="home_row">
         <Product
             id={3}
             title="Data Science and Big Data Analytics Vol 1"
             image="/data_science.jpg"
             price={12.99}
             ratings={4}
             />
                    <Product
             id={4}
             title="Cracking the coding interview Vol 8"
             image="/cracking.jpg"
             price={12.99}
             ratings={5}
             />
           <Product
             id={5}
             title="Ng Book: the complete book on angular 8"
             image="/angular.jpg"
             price={15.99}
             ratings={5}
             />
             </div>

        </div>
    )
}

export default Home
