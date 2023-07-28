import React from "react";

const ItemDetail = ({producto}) =>{
    return(
        <div>
            <h3>Detalle del producto:{producto.nombre}</h3>
            <img src={producto.img}/>
            <p>{producto.descripcion}</p>
        </div>
    )
}

export default ItemDetail;