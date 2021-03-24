import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue }  from '../StateProvider';
import {auth} from '../Firebase/Firebase';

function Header() {
    const [{basket, user}] = useStateValue();
    const login = () =>{
        if(user){
            auth.signOut();
        }
    }
    
    return(
        <nav className="header">
            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
            </Link>

            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                {/* */}
                <Link to={!user && '/login'} className="header__link">
                    <div onClick={login} className="header__option">
                        <span className="header__optionLineOne">Hello {user?.email}</span>
                        <span className="header__optionLineTwo">{user ? 'Sign out':'Sign in'}</span>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Return</span>
                        <span className="header__optionLineTwo">& Order</span>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>

                <Link to="/checkout" >
                    <div className="header__optionBasket">
                        <ShoppingCartIcon />
                        <span className="header__optionLineTwo header__basketCounter">{basket?.length}</span>
                    </div>
                </Link>

            </div>
            
        </nav>
    )
}

export default Header
