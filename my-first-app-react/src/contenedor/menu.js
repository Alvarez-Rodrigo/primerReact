import React from "react";
import { NavLink } from "react-router-dom"
import "./stylesItem.css"
import CartWidget from "./CartWidget"
import "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css";




function NavBar() {
  return (
    <div className="barra">
      <NavLink  to={"/"} className="superior" activeClassName= "active">Home</NavLink>
      <NavLink className="superior" activeClassName= "active" to={"/hogar"}>Hogar</NavLink>
      <NavLink className="superior" activeClassName= "active" to={"/jardineria"}>Jardineria</NavLink>
      <NavLink className="superior" >CartWidget</NavLink>
  </div>
      
  );
}

export default NavBar;