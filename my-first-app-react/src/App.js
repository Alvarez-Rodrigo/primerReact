
import {BrowserRouter, Routes ,Route } from "react-router-dom";
import NavBar from "./contenedor/menu.js";
import ItemContainer from "./contenedor/contenedorItem"
import ItemDetailContainer from "./contenedor/itemDetailContainer/itemDetailContainer"
import "./App.css"
import CartProvider from "./contenedor/cartContext/cartContext.js"

import Checkout from "./contenedor/checkOut/checkUot.js"
//funcion principal

function App() {
  //CartProvider
  
  return (
    <div className="App">
     
    <BrowserRouter>
      <CartProvider>
        <NavBar/>
          <Routes>
          <Route path="/" element={<ItemContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />}/>
            <Route path="/productos" element={<ItemContainer />} />
            <Route path="/productos/:categoria" element={<ItemContainer />} />
            <Route path="/checkout" element={<Checkout />}/>
          </Routes> 
          
          
        <footer>
          <h2 className='footerP'>Todos los derechos reservados desde 1997 ©</h2>
        </footer>
      </CartProvider>
    </BrowserRouter>
    </div>
  );
}

//export
export default App;