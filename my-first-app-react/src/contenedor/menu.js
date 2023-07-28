import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom"
import "./stylesItem.css"
import CartWidget from "./CartWidget"



function NavBar() {
const {userId} = useParams();
useEffect(() => {
  console.log('recivo usuario Id: ', userId);
  return () => {
    console.log()
  }
})

  return (
    <div className="barra">
      
      <NavLink  className="superior" activeClassName= "active" to={"/"}>Home</NavLink>
      <NavLink className="superior" activeClassName= "active" to={"/categoria/hogar"}>Hogar</NavLink>
      <NavLink className="superior" activeClassName= "active" to={"/categoria/jardineria"}>Jardineria</NavLink>
      <CartWidget/>
  </div>
      
  );
}

export default NavBar;