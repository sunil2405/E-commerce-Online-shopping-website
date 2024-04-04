import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight, BsEye } from "react-icons/bs";
import { FiTruck } from "react-icons/fi";
import { BsCurrencyDollar } from "react-icons/bs";
import { HiOutlineReceiptPercent } from "react-icons/hi2";
import { ImHeadphones } from "react-icons/im";
import slider_img from '../images/slider_img.jpg';
import Mobile from '../images/Mobile.png';
import Watch from '../images/Watch.png';
import Headset from '../images/Headset.png';
import laptop1 from '../images/laptop1.png';
import Homeproduct from './homeproduct.js';
import { LiaRupeeSignSolid } from "react-icons/lia";
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineCloseCircle } from 'react-icons/ai';
import './home.css';

const Home = ({detail, view, close, setClose, addtocart}) => {
  return (
    <>
    {
      close ?
      <div className='product_detail'>
      <div className='container'>
        <button onClick={() => setClose(false)} className='closebtn'><AiOutlineCloseCircle /></button>
        {
          detail.map((curElm) => 
          {
            return (
              <div className='productbox'>
                <div className='img_box'>
                  <img src={curElm.Img} alt={curElm.Title}/>
                </div>
                <div className='detail'>
                  <h4>{curElm.Cat}</h4>
                  <h2>{curElm.Title}</h2>
                <h3><LiaRupeeSignSolid />{curElm.Price}</h3>
                <button>Add To Cart</button>
                </div>
              </div>
            )
          })
        }
        <div className='productbox'></div>
      </div>
    </div> : null 
    }
    <div className='top_banner'>
        <div className='container'>
            <div className='detail'>
                <h2>The Best Tab Note Book Collection 2023</h2>
                <Link to='/product' className='link' >Shop Now <BsArrowRight /></Link>
            </div>
            <div className='img-box'>
                <img src={slider_img} alt='slider' />
            </div>
        </div>
    </div>
    <div className='product_type'>
      <div className='container'>
        <div className='box'>
          <div class='img_box'>
            <img src={Mobile} alt='mobile'/>
          </div>
          <div className='detail'>
            <p>Latest Mobile</p>
          </div>
        </div><div className='box'>
          <div className='img_box'>
            <img src={Watch} alt='Watch'/>
          </div>
          <div className='detail'>
            <p>Smart Watch</p>
          </div>
        </div>
        <div className='box'>
          <div className='img_box'>
            <img src={Headset} alt='mobile'/>
          </div>
          <div className='detail'>
            <p>Wireless Headset</p>
          </div>
        </div>
        <div className='box'>
          <div className='img_box'>
            <img src={laptop1} alt='mobile'/>
          </div>
          <div className='detail'>
            <p>Laptops</p>
          </div>
        </div>
      </div>
    </div>
    <div className='about'>
      <div className='container'>
        <div className='box'>
          <div className='icon'><FiTruck /></div>
          <div className='detail'>
            <h3>Free Shipping</h3>
            <p>Order Above ₹10,000</p>
          </div>
        </div>
        <div className='box'>
          <div className='icon'><BsCurrencyDollar /></div>
          <div className='detail'>
            <h3>Return & Refund</h3>
            <p>Money Back Guarantee</p>
          </div>
        </div>
        <div className='box'>
          <div className='icon'><HiOutlineReceiptPercent /></div>
          <div className='detail'>
            <h3>Member Discount</h3>
            <p>On Every Order</p>
          </div>
        </div>
        <div className='box'>
          <div className='icon'><ImHeadphones /></div>
          <div className='detail'>
            <h3>Customer Support</h3>
            <p>Every Time Call Support</p>
          </div>
        </div>
      </div>
    </div>
    <div className='product'>
      <h2>Top Products</h2>
      <div className='container'>
        {
          Homeproduct.map((curElm) =>
          {
            return(
              <div className='box' key={curElm.id}>
                <div className='img_box'>
                  <img src={curElm.Img} alt={curElm.Title} />
                  <div className='icon'>
                    <li onClick={() => addtocart(curElm)}><AiOutlineShoppingCart /></li>
                    <li onClick={() => view (curElm)}><BsEye /></li>
                    <li><AiOutlineHeart /></li>
                  </div>
                </div>
                <div className='detail'>
                  <p>{curElm.Cat}</p>
                  <h4><LiaRupeeSignSolid />{curElm.Price}</h4>
                  <h3>{curElm.Title}</h3>
                </div> 
              </div>
            )
          })
        }
      </div>
    </div>
    </>
  )
}

export default Home;
