import React from "react";
import { Link } from "react-router-dom";
import './header.styles.scss'
import {ReactComponent as Logo} from '../../assets/crown.svg'

const Header = ({currentUser,signOut}) =>
{



    return(
    <div className='header'>
        <Link to="/" className='logo_container'>
            <Logo className='logo'/>
        </Link>
        <div className='nav_options'>
            <Link className='option' to="/shop">
                SHOP
            </Link>
            <Link className='option' to="/shop">
                CONTACT
            </Link>
            {currentUser?
            <div className='option' onClick={signOut}>
             SIGN OUT
            </div>:
            <Link className='option' to='/signIn'>
                SIGN IN
            </Link>}
        </div>

        

    </div>
    )

}

export default Header;