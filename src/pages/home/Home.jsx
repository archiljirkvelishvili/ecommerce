import React from "react";
import { Link } from "react-router-dom"
 
import useHome from "../../hooks/useHome"
import "./home.css"
import Card from "../../components/Card"



export default function Home() {
    
    const {alldata} = useHome()
    
    const allproducts = alldata && alldata.category.products.map((item, index) => 
        <Link to={`/product/${item.id}`} key={index}> <Card data={item}/>  </Link>
    )

     

    return(
        <div className="home-page-wrapper">
            {alldata && <h2>{ alldata.category.name.toUpperCase()} </h2>}
            <div className="home-page-cards-wrapper">
                {allproducts}
            </div>   
        </div>
    )
}