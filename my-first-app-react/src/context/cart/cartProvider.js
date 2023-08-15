import { useState } from "react";
import CartContext from "./cartContext";

function CartProvider ({defaultValue, children}){
    const [productos, setProductos] = useState(defaultValue);

    function agregarProducto(productos){
        const newList = [...productos];
        newList.push(productos);

        setProductos(newList);
    }

    const otherValue= [];

    const valueProvided = {
        productos,
        agregarProducto,
        otherValue
    }

    return (
        <CartContext.provider value = {valueProvided}>
            {children}
        </CartContext.provider>
    )
}

export default CartProvider;