import React from 'react'
import './header.css'
import { Link} from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Header() {
    return (
        <nav className="header">
            {/* logo */}
            <Link to ="/">
            <img alt="logo" className ="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"></img>
            </Link>
            {/* search bar */}
            <div className="header_search">
            <input type="text" className="header_searchInput"/>
            <SearchIcon className ="header_searchIcon" />

            </div>
            {/* links at the end */}
           <div className="header_nav">
               <Link className="header_link" to="/login">
               <div className="header_option">
                   <span className="header_option_line_one">Hello Customer</span>
                   <span className="header_option_line_two"> Sign In</span>

               </div>
               </Link>
               <Link className="header_link" to="/">
               <div className="header_option">
                   <span className="header_option_line_one">Returns</span>
                   <span className="header_option_line_two">& orders</span>

               </div>
               </Link>
               <Link className="header_link" to="/">
               <div className="header_option">
                   <span className="header_option_line_one">Your</span>
                   <span className="header_option_line_two"> Prime</span>

               </div>
               </Link>
               <Link to="/checkout" className="header_link">
            <div className="header_option_basket">
                <ShoppingCartIcon />
                <span className="header_option_line_two header_count">0</span>
                
            </div>
        </Link>
               
               </div> 

         
   

        {/* shopping basket */}

            
        </nav>
    )
}

export default Header
