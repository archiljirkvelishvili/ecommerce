import React, { useEffect, useState } from "react"

export const currencyContext = React.createContext()
export const cartContext = React.createContext()

export default function State({children}){

    const [currency, setCurrency] =  useState("$")
    const [cart, setCart] = useState([])

    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem("items")) )
    },[])   

    console.log(cart)
    
    return(
        <currencyContext.Provider value={{currency, setCurrency}}>
            <cartContext.Provider value={{cart, setCart}}>
                {children}
            </cartContext.Provider>
        </currencyContext.Provider>
    )
}