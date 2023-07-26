import { useState } from 'react';
import {BrowserRouter, Routers ,Route } from "react-router-dom"
import NavBar from "./contenedor/menu.js"
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
     <NavBar/>

     <BrowserRouter>
      <Routers>
        <Route exact path='/' element = {<home title="Inicio"/>}></Route>
        <Route exact path='/hogar' element = {<hogar/>}></Route>
        <Route exact path='/hogar/:id' element = {<hogarDetalle/>}></Route>
        <Route exact path='/jardineria' element = {<jardineria/>}></Route>
        <Route exact path='/jardineria/:id' element = {<jardineriaDetalle/>}></Route>
        
      </Routers>
     </BrowserRouter>

     <div className='cartContain'>
        <ItemContainer titulo="Producto" onClick={handleChangeCart}/>
        <ItemContainer titulo="Producto" onClick={handleChangeCart}/>
        <ItemContainer titulo="Producto" onClick={handleChangeCart}/>
        <ItemContainer titulo="Producto" onClick={handleChangeCart}/>
     </div>
     <footer>
      <h2 className='footerP'>Todos los derechos reservados desde 1997 ©</h2>
     </footer>
    </div>
  );
}

//export
export default App;