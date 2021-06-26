import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';
import {auth} from './firebase';

function Header() {
    const [ {basket, user} , dispacth ] = useStateValue();
    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }
    console.log(basket);
    console.log(user, 'from HEADER');
    
    return (
        <nav className="header">
            {/* logo on the left -> img */}
            {/* Search box */}
            {/* 3 links */}
            {/* Shopping Basket icon with number */}
            <Link to="/">
                <img className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
            </Link>

            {/* Search box */}
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon"></SearchIcon>
            </div>

            {/* 4 links */}
            <div className="header__nav">
                <Link to={!user && '/login'} className="header__link">
                    <div 
                        onClick={handleAuthentication}
                        className="header__option">
                              {/* ? mark lets application fetch data first, then return it here */}
                        <span className="header__optionLineOne">Hello {user? user.email : 'Guest'} </span>
                        <span className="header__optionLineTwo"> {user ? 'Sign Out' : 'Sign In'} </span>
                    </div>
                </Link>

                <Link to="/orders" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>
                {/* Shopping basket icon */}
                {/* Number of items in the basekt */}
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header;
