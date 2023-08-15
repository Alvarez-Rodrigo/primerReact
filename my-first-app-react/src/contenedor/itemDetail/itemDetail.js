import React from "react";
import useCart from "../../context/cart/useCart";

const ItemDetail = ({items}) =>{

    const {agregarProducto} = useCart();

    function handleComprar(){
        agregarProducto(items);
    }

    return(
        <div>
            <h3>Detalle del producto:{items.nombre}</h3>
            <img src={items.img}/>
            <p>{items.descripcion}</p>
            <button onClick={handleComprar}> Comprar </button>
        </div>
    )
}

export default ItemDetail;