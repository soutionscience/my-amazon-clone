import React from 'react'
import './header.css'
import { Link} from "react-router-dom";

function Header() {
    return (
        <nav className="header">
            <Link to ="/">
            <img alt="logo" className ="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"></img>
            </Link>

          {/* search box */}
        {/* 3 links */}
        {/* shopping basket */}
            
        </nav>
    )
}

export default Header
