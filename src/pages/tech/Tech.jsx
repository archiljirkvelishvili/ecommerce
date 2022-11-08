import React from "react";
import { Link } from "react-router-dom";

import useClothes from "../../hooks/useTech";
import Card from "../../components/Card";


export default function Clothes() {

    const {data} = useClothes()
    
    const allproducts = data && data.category.products.map((item, index) => 
    <Link to={`/product/${item.id}`} key={index}><Card data={item} /></Link>)

    return(
        <div className="home-page-wrapper">
            {data && <h2>{ data.category.name.toUpperCase()} </h2>}
            <div className="home-page-cards-wrapper">
                {allproducts}
            </div>   
        </div>
    )
}