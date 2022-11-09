import React, { useContext, useState } from "react";

import { currencyContext } from "../state/State";
import white_cart from "../assets/white_cart.png"


export default function Card(props){
    const[show, setShow] = useState("add-to-cart-pop-up-remove")
    const {currency} = useContext(currencyContext)

    const exactAmount = props.data.prices.map(item => item.currency.symbol).indexOf(currency)
    return(
       
        <div className="cards" onMouseEnter={(e) => setShow("add-to-cart-pop-up")} onMouseLeave={(e) => setShow("add-to-cart-pop-up-remove")}>
            {props.data.inStock ? 
                <>
                    <div className="img-wrapper">   
                        <img src={props.data.gallery[0]} alt="prod_pic"/>
                    </div>
                    <div>
                        <p>{props.data.name}</p>
                        {currency && <p>{currency}{props.data.prices[exactAmount].amount} </p>}
                    </div>
                    <div className={show}  onClick={(event) => {event.stopPropagation()}}>
                        <img src={white_cart} alt="cart" />
                    </div>
                </>
                :
                <>
                    <div className="img-wrapper-no-stock" style={{backgroundImage: `url(${props.data.gallery[0]})`}}>
                        <p >OUT OF STOCK</p>
                    </div>
                    <div>
                        <p>{props.data.name}</p>
                        {currency && <p>{currency}{props.data.prices[exactAmount].amount} </p>}
                    </div>
                </>
            }   
        </div>
    )
}