import React from 'react';
import Productdetail from './Productdetail';
import { useAuth0 } from "@auth0/auth0-react";
import { AiOutlineCloseCircle, AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { BsEye } from "react-icons/bs";
import './product.css'

const Product = ({product, setProduct, detail, view, close, setClose, addtocart}) => {

  const { loginWithRedirect, isAuthenticated} = useAuth0();
  const filtterproduct = (product) =>{
    const update = Productdetail.filter((x) => {
      return x.Cat === product;
    })
    setProduct(update);
  }
  const AllProducts = () => {
    setProduct(Productdetail)
  }
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
                <h3>₹{curElm.Price}</h3>
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
    <div className='products'>
    <h2># Products</h2>
    <p>Home . products</p>
      <div className='container'>
        <div className='filter'>
          <div className='categories'>
            <h3>categories</h3>
            <ul>
              <li onClick={() => AllProducts ()}>All Product</li>
              <li onClick={() => filtterproduct("Tablet")}>Tablet</li>
              <li onClick={() => filtterproduct("Smart Watch")}>Smart Watch</li>
              <li onClick={() => filtterproduct("Headphone")}>Headphone</li>
              <li onClick={() => filtterproduct("Camera")}>Camera</li>
              <li onClick={() => filtterproduct("Gaming")}>Gaming</li>
              <li onClick={() => filtterproduct("Electronic")}>Electronic</li>
            </ul>
          </div>
        </div>
        <div className='productbox'>
          <div className='contant'>
            {
              product.map((curElm) => 
              {
                return(
                  <>
                   <div className='box' key={curElm.id}>
                      <div className='img_box'>
                        <img src={curElm.Img} alt={curElm.Title} />
                        <div className='icon'>
                          {
                            isAuthenticated ?
                            <li onClick={() => addtocart(curElm)}><AiOutlineShoppingCart /></li>
                            :
                            <li onClick={() => loginWithRedirect()}><AiOutlineShoppingCart /></li>
                          }
                          
                          <li onClick={() => view(curElm)}><BsEye /></li>
                          <li><AiOutlineHeart /></li>
                        </div>
                      </div>
                      <div className='detail'>
                        <p>{curElm.Cat}</p>
                        <h4>₹{curElm.Price}</h4>
                        <h3>{curElm.Title}</h3>
                      </div> 
                    </div>
                  </>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Product;
