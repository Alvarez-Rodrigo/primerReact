import { useState } from 'react';
import {BrowserRouter, Routes ,Route } from "react-router-dom";
import Home from "./contenedor/home.js";
import Hogar from './contenedor/hogar.js';
import HogarDetalle from './contenedor/hogarDetalle.js'
import Jardineria from './contenedor/jardineria.js';
import JardineriaDetalle from './contenedor/jardineriaDetalle.js';
import NavBar from "./contenedor/menu.js";



import "./App.css"

//funcion principal

function App() {
  const [shoppingCart, setShoppingCart] = useState(0);
  const handleChangeCart = () => {
    setShoppingCart(shoppingCart + 1);    
  }
  return (
    <div className="App">
     
     <BrowserRouter>
     <NavBar/>
      <Routes>
        <Route exact path='/home' element = {< Home title=""/>}></Route>
        <Route exact path='/hogar' element = {< Hogar />}></Route>
        <Route exact path='/hogar/:id' element = {< HogarDetalle />}></Route>
        <Route exact path='/Jardineria' element = {< Jardineria />}></Route>
        <Route exact path='/Jardineria/:id' element = {< JardineriaDetalle />}></Route>
        
      </Routes>

     <footer>
      <h2 className='footerP'>Todos los derechos reservados desde 1997 ©</h2>
     </footer>
     </BrowserRouter>
    </div>
  );
}

//export
export default App;