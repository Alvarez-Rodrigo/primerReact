import { useState } from 'react';

import NavBar from "./contenedor/menu.js"
import Contenedor from "./contenedor/contenedorItem.js";

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
     <section className='shoppingCart'>
       <h1 className='product'>Cantidad de productos:{shoppingCart}
       </h1>       
     </section>
     <div className='cartContain'>
        <Contenedor titulo="Producto" onClick={handleChangeCart}/>
        <Contenedor titulo="Producto" onClick={handleChangeCart}/>
        <Contenedor titulo="Producto" onClick={handleChangeCart}/>
        <Contenedor titulo="Producto" onClick={handleChangeCart}/>
     </div>
     <footer>
      <h2 className='footerText'>Todos los derechos reservados ©</h2>
     </footer>
    </div>
  );
}

//export
export default App;