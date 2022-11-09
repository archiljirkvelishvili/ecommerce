
import React, { useContext, useState, useEffect }from "react";

import CartItem from "../../components/CartItem";
import { cartContext } from "../../state/State";

import "./cart.css"

export default function Cart(){
    const {cart} = useContext(cartContext)
   

    const cartItems = cart.map(item => 
        <CartItem key={item.id} name={item.data.product.name} price={item.data.product.prices} attrs={item.data.product.attributes} img={item.data.product.gallery[0]} />
    )
 

    return(
        <div className="cart-page-wrapper">
            <h2 className="title">CART</h2>
            {cartItems}

        </div>
    )
}