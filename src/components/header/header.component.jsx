import React from 'react'
import "./header.styles.scss"
import {ReactComponent as Logo} from "../../assets/crown.svg"
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {auth} from "../../firebase/firebase.utils.js"
import CartIcon from "../cart-icon/cart-icon.component"
import Dropdown from "../cart-dropdown/cart-dropdown.component"
const Header = ({currentUser, hidden}) => ( 
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo"/>
            </Link>
            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/contact">CONTACT</Link>
                {
                    currentUser?
                    <div className="option" onClick={() =>auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className="option" to="/signin">SIGN</Link>
                }
                <CartIcon/>
            </div>
            { hidden ? null :<Dropdown/>}
        </div>
     );
        const mapStatetoProps = ({user: {currentUser}, cart:{hidden}}) => ({
            currentUser,
            hidden
        })
export default connect(mapStatetoProps)(Header);