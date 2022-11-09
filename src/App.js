import { Routes, Route, Link} from "react-router-dom"
import React, { useEffect,  useContext } from "react";

import './App.css';
import useNav from './hooks/useNav';
import useCurrency from './hooks/useCurrency';
import brand from './assets/Brand_icon.png'
import cartLogo from './assets/Vector.png'
import Home from "./pages/home/Home";
import Clothes from "./pages/clothes/Clothes";
import Tech from "./pages/tech/Tech";
import Product from "./pages/product/Product";
import Cart from "./pages/cart/Cart";
import { currencyContext, cartContext } from "./state/State";

function App() {
  
  const links = ["/", "/clothes", "/tech"]
  const {data} = useNav()
  const {currencyData} = useCurrency()

  const {currency, setCurrency} = useContext(currencyContext)
  const {cart} = useContext(cartContext)


  useEffect(() => {
    currencyData && setCurrency(currencyData.currencies[0].symbol)
  },[currencyData])
  

  const navdata = data && data.categories.map((item, index) => 
      <Link key={index} to={links[index]} className="navlink">
        {item.name.toUpperCase()}
      </Link>
  )


  const currencySymbols = currencyData && currencyData.currencies.map((item, index) =>
    <option key={index}>
      {item.symbol}
    </option>
  )

   
  return (
    
      <div className="App">
        <div className="navbar-wrapper">
          <nav className="navbar">
              <div className="navbar-category">
                {navdata}
              </div>
              <div className="navbar-logo">
                <img src={brand} alt="logo"/>
              </div>
              <div className="navbar-cart">
                <select 
                  onChange={(e)=> setCurrency(e.target.value)}
                  value={currency}
                >
                  {currencySymbols} 
                </select>
                <Link to="/cart"> <img src={cartLogo} alt="cart"/> </Link>
              </div>
          </nav>
        </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clothes" element={<Clothes />} />     
        <Route path="/tech" element={<Tech/>} />
        <Route path="/product/:id" element={<Product/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>

      </div>
 
  );
}

export default App;
