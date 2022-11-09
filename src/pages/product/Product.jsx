
import React, { useState, useContext, useEffect  } from "react";
import { useParams } from "react-router-dom";

import { currencyContext, cartContext } from "../../state/State";
import useProduct from "../../hooks/useProduct";
import "./product.css"      
import ProdAttr from "../../components/ProdAttr";


export default function Product(){
    const {id} = useParams()
    const {data, loading, error} = useProduct(id)
    console.log(data)

    const {currency} = useContext(currencyContext)
    const {cart, setCart} = useContext(cartContext)
    const exactAmount = data && data.product.prices.map(item => item.currency.symbol).indexOf(currency)

  

    const addToCart =()=>{
        data.product.attributes.length === Object.keys(choose).length 
        &&
        localStorage.setItem("items",localStorage.getItem("items")===null? 
            JSON.stringify([{data, choosen:choose, id}])
            :
            JSON.stringify([...JSON.parse(localStorage.getItem("items")),{data, choosen:choose, id}]))

            setCart(JSON.parse(localStorage.getItem("items")))
    }



    const [mainpic, setMainpic] = useState()
    const [choose, setChoose] = useState({})

    
   
    useEffect(()=>{
        data && setMainpic(data.product.gallery[0])
        window.scrollTo(0, 0);
    },[data])

   
    const imgscroll = data && data.product.gallery.map((item, index) => 
            <div className="scroll-img" key={index} onClick={() => setMainpic(item)}>
                <img src={item} alt="pic" />
            </div>
    )

    let first = []
    let second =null
    
 
    if(data && data.product.attributes.length >= 1){
        
        data.product.attributes.map((item, index) => {
            
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
                                        onClick={(value)=> {setChoose((prev) => ({...prev, [item.name]: value}))}} 
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
                                    onClick={()=> setChoose((prev) => ({...prev, [item.name]: x.value}))} 
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
        
        <div className="product-wrapper">
            {data && 
            <>
                <div className="scroll-img-wrapper">
                    {imgscroll}
                </div>
                <div className="mainpic-wrapper">
                    <div>
                        <img src={mainpic} alt="mainpic"/>
                    </div>
                </div>
                <div className="info-wrapper">
                    <div>
                        <h1>{data.product.brand } {data.product.name}</h1>
                    </div>
                    <div className="text-attributes-wrapper">
                        {first.map(item => item)}
                    </div>
                    {second && 
                        <div className="swatch-attributes-wrapper">
                            {second}
                        </div>
                    }                   
                    <div>
                        <h2 className="price">Price</h2>
                        {data && <p className="amount">{currency} {data.product.prices[exactAmount].amount}</p> }
                    </div>
                    <div className="button">
                        <button onClick={() => addToCart()} disabled={data.product.attributes.length !== Object.keys(choose).length}>
                                ADD TO CART
                        </button>
                    </div>
                    <div className="description">
                        <p dangerouslySetInnerHTML={{__html:data.product.description}}></p>
                    </div>
                </div> 
            </>
            }
        </div>
    )
}