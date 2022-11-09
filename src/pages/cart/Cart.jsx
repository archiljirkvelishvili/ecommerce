
import React, { useContext, useState, useEffect }from "react";

import { cartContext } from "../../state/State";

export default function Cart(){
    const data = useContext(cartContext)
   


    const [items, setItems] = useState([]);

    useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) {
    setItems(items);
    }
    }, []);

    console.log(items)

    return(
        "cart"
    )
}