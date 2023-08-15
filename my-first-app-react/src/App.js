import { useState } from 'react';
import {BrowserRouter, Routes ,Route } from "react-router-dom";
import NavBar from "./contenedor/menu.js";
import ItemContainer from "./contenedor/contenedorItem.js"
import ItemDetailContainer from "./contenedor/itemDetailContainer/itemDetailContainer.js"
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
      <CartProvider>
        <NavBar/>
          <Routes>
            <Route path='/' element={<ItemContainer greeting = "Bienvenidos!"/>} ></Route>
            <Route path='/categoria/:categoriaId' element={<ItemContainer greeting = ""/>} ></Route>
            <Route path='/item/:id' element={<ItemDetailContainer/>} ></Route>
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