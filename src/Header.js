import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom"
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from "./StateProvider";
import {auth } from "./firebase";


function Header() {
    const [{ basket ,user},dispatch] = useStateValue();
   
   
   const handleAuthenticaton=()=>{
       if(user){
        auth.signOut();
       }
   }
    return (
        <div className='header'>
           <Link to="/">
             <img className="header_logo" 
             
             src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"></img>
          </Link>  
       <div 
       className="Header_search">
           <input className='header_SearchInput' placeholder='Search' type="text">

           </input>
           <SearchIcon className="header_searchIcon"/>
           {/* Logo */}
       </div>
       <div className='header_nav'>
       <Link to={!user && '/login'}>
           <div onClick={handleAuthenticaton} className='header_option'>
           <span className="header_optionLineOne">Hello Guest</span>
            <span className="header_optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
         {/* if user present sign out otherwise sign in */}
           </div>
           </Link>
           <div className='header_option'>
           <span className='header_optionLineOne'>
            Returns
        </span>
        <span className='header_optionLineTwo'>
          & Orders
        </span>
           </div>
           <div className='header_option'>
           <span className='header_optionLineOne'>
            Your
        </span>
        <span className='header_optionLineTwo'>
            Prime
        </span>
           </div>
           
           <div className='header_optionBasket'>
              <Link to="/checkout"> 
              <ShoppingBasketIcon/>
              </Link>
               <span className="header_optionalLineTwo 
               header_baskeCount">
                   {basket?.length}
                   {/* ? for handle the error in better way */}
               </span>
           </div>
           
       </div>
        </div>
    )
}

export default Header
