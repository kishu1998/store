import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import ButtonContainer from './Button.js';
export default class Navbar extends Component {
    render() {
        return (
           <nav className="navbar navbar-expand-sm bg-warning navbar-dark px-sm-5">
            <Link to='/store/'>
                <img  src={logo} alt="store" className="navbar-brand" />

            </Link>  
            <ul className="navbar-nav align-items-center">
                <li className='nav-item ml-5'>
                    <Link to='/'>CASHEW</Link>
                </li>    
            </ul>
            <Link to='/cart' className="ml-auto">
                <button style={ButtonContainer.button}>
                    <i className="fas fa-cart-plus" />
                    my cart
                </button>    
            </Link> 
           </nav>
        );
    }
}
