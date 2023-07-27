import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom"
import "./stylesItem.css"
import CartWidget from "./CartWidget"
//import "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css";


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
      
      <NavLink  className="superior" activeClassName= "active" to={"/home"}>Home</NavLink>
      <NavLink className="superior" activeClassName= "active" to={"/hogar"}>Hogar</NavLink>
      <NavLink className="superior" activeClassName= "active" to={"/jardineria"}>Jardineria</NavLink>
      <NavLink className="superior"> {CartWidget} </NavLink>
      
      
  </div>
      
  );
}

export default NavBar;