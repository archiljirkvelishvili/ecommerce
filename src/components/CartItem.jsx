import React, { useContext } from "react";

import { cartContext, currencyContext } from "../state/State";
import ProdAttr from "./ProdAttr";

export default function CartItem(props) {
    const {currency} = useContext(currencyContext)

    const exact = props.price.map(item => item.currency.symbol).indexOf(currency)

    console.log(props.img)
    let first = []
    let second =null
    
 
    if(props && props.attrs.length >= 1){
        props.attrs.map((item, index) => {
            if(item.type==="text" ){
                const allAttributes = 
                (
                    <form key={index}>
                        {
                            item.items.map((x, index) => {    
                                return(
                                    <ProdAttr 
                                        key={index}
                                        index={index} 
                                        item={item}
                                        x={x} 
                                        // onClick={(value)=> {setChoose((prev) => ({...prev, [item.name]: value}))}} 
                                    />
                                )
                            })
                        }
                    </form>
                )
                first.push(allAttributes)
            } else if(item.type==="swatch"){   
                second = (
                    <form>
                    {
                        item.items.map((x, index) => {
                            return(
                                <ProdAttr 
                                    key={index}
                                    type={item.type} 
                                    index={index} 
                                    x={x} 
                                    // onClick={()=> setChoose((prev) => ({...prev, [item.name]: x.value}))} 
                                />
                            )
                        })
                    }
                    </form>
                )
        }

        })
   }    

    return(
        <div className="cartItem-wrapper">
            <hr/>
            <div className="cart-item-main-info">
            
                <h2>{props.name}</h2>
                <p>{currency} {props.price[exact].amount}</p>
                <div className="cart-item-radio">
                    {first}
                    {second && <div className="cart-item-color"> <h2>Color</h2> {second}</div> }
                   
                </div>
            </div>
  
            <div className="cart-item-img">
                <img src={`${props.img}`}/>
            </div>

        </div>
   
    )
}