/* eslint-disable jsx-a11y/no-distracting-elements */
import React from 'react';
import logo1 from '../images/logo1.png';
import { AiOutlineTwitter } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTruckMoving } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import './footer.css';

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='container'>
            <div className='about'>
                <div className='logo'>
                    <img src={logo1} alt='logo'/>
                </div>
                <div className='detail'>
                    <p>Here this is my first webpage of E-commerce</p>
                    <div className='icon'>
                      <li><FaFacebook /></li>
                        <li><AiOutlineInstagram /></li>
                        <li><AiOutlineTwitter /></li>
                        <li><BsYoutube /></li>
                    </div>
                </div>
            </div>
            <div className='account'>
                <h3>My account</h3>
                <ul>
                    <li>Account</li>
                    <li>Order</li>
                    <li>Cart</li>
                    <li>Shipping</li>
                    <li>Return</li>
                </ul>
            </div>
            <div className='page'>
                <h3>Pages</h3>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Term & condition</li>
                </ul>
            </div>
        </div>
      </div>
        <div className='free'>
            <div className='icon'>
            <FaTruckMoving />
            </div>
            <p>Free Shipping when shopping upto ₹10,000</p>
        </div>
    </>
  )
}

export default Footer
