import React from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';
import './cart.css';

const Cart = ({cart, setCart}) => {
    // increase qty
    const incqty = (product) => 
    {
        const exist = cart.find((x) => 
        {
            return x.id === product.id
        })
        setCart(cart.map((curEml) =>
        {
            return curEml.id === product.id ? {...exist, qty: exist.qty + 1} : curEml
        }))
    }

    // decrease qty
    const decqty = (product) => 
    {
        const exist = cart.find((x) => 
        {
            return x.id === product.id
        })
        setCart(cart.map((curEml) =>
        {
            return curEml.id === product.id ? {...exist, qty: exist.qty - 1} : curEml
        }))
    }

    // Remove cart product
    const removeproduct = (product) => 
    {
        const exist = cart.find((x) => {
            return x.id === product.id
        })
        if (exist.qty > 0) 
        {
            setCart(cart.filter((x) => 
            {
                return x.id !== product.id
            }))
        }
    }
const Totalprice = cart.reduce((price, item) => price + item.qty * item.Price, 0)
  return (
    <>
    <div className='cartcontainer'>
        {
            cart.length === 0 &&
            <div className='emptycart'>
                <h2 className='empty'>Cart is Empty</h2>
                <Link to='/product' className='emptycartbtn'>Shop Now</Link>
            </div>
        }
        <div className='contant'>
            {
                cart.map((curEml) => 
                {
                    return(
                        <div className='cart_item' key={curEml.id}>
                            <div className='img_box'>
                                <img src={curEml.Img} alt={curEml.Title} />
                            </div>
                            <div className='detail'>
                               <div className='info'>
                                <h4>{curEml.Cat}</h4>
                                <h3>{curEml.Title}</h3>
                                <p>Price: ₹{curEml.Price}</p>
                                <div className='qty'>
                                    <button className='incqty' onClick={() => incqty(curEml)}>+</button> 
                                    <input type='text' value={curEml.qty} />
                                    <button className='decqty' onClick={() => decqty(curEml)}>-</button>
                                </div>
                                <h4 className='subtotal'>sub total: ₹{curEml.Price * curEml.qty} </h4>
                                </div>
                                <div className='close'>
                                <button onClick={() => removeproduct(curEml)}><AiOutlineClose /></button>
                                </div>
                            </div>    
                        </div>
                    )
                })
            }
        </div>
        {
            cart.length > 0 &&
            <>
            <h2 className='totalprice'>total: ₹ {Totalprice}</h2>
            <button className='checkout'>Checkout</button>
            </> 
        }
    </div>
    </>
  )
}

export default Cart;

