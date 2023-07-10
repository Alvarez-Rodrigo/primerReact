import Button from 'react-bootstrap/Button';
import "./stylesItem.css"
import Imagen from "../assent/images.png"
import React, { useState } from 'react';



//esta funcion suma los productos de cada cart
function ItemContainer ({titulo, onClick}) {
   
    const [cantidad, setCantidad] = useState(0);  

    function handleChangeCart(){      
    setCantidad(cantidad + 1);
    onClick();    
    }

    return (    
    <><div className='cardVista'>
        <img className= "img" src={Imagen} alt= "imagen Ref"/>
        <h1 className='producto'>{titulo}</h1>
        <h2 className='producto'>Cantidad de productos {cantidad}</h2>        
        <Button className= 'button' variant="dark" onClick={handleChangeCart}>Agregar al carrito</Button>
    </div></>
    )
}

//export
export default ItemContainer;