import { useState } from 'react';
import {BrowserRouter, Routes ,Route } from "react-router-dom";
import home from "./contenedor/home.js";
import NavBar from "./contenedor/menu.js";
import ItemContainer from "./contenedor/contenedorItem";


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
        <Route exact path='/' element = {<home title="Aca arranca todo"/>}></Route>
        <Route exact path='/hogar' element = {<hogar title="Holaaaaaaa"/>}>hola</Route>
        <Route exact path='/hogar/:id' element = {<hogarDetalle/>}></Route>
        <Route exact path='/jardineria' element = {<jardineria/>}></Route>
        <Route exact path='/jardineria/:id' element = {<jardineriaDetalle/>}></Route>
        
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