import { Button } from "react-bootstrap";
import { useCartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import { serverTimestamp } from "firebase/firestore";
import GuardarOrden from "../firebase/nuevaOrden";
import { useState } from "react";
import CheckOut from "../checkUot/checkOut";

const Cart = () => {
    const { removerItem, cartList, producTotal, cartTotal, removeList} = useCartContext();
    const [purchaseCompleted, setPurchaseCompleted] = useState(false);
    const displayItems = cartList.map((prod) => (
        <div key={prod.id}>
            <p>{prod.name} - ${producTotal(prod, prod.quantity)} x {prod.quantity}</p>
            <Button onClick={() => removerItem(prod.id)}>Eliminar del carrito</Button>
        </div>
    ));
    const order = {
        buyer: {
            name: "Lorenzo Loren",
            email: "loren.lorenzo@gmail.com",
        },
        total: cartTotal(),
        items: cartList.map(p => ({id: p.id, nombre: p.nombre, precio: p.precio, quantity: p.quantity})),
        date: serverTimestamp()
    };
    const handlePurchase = async () => {
        const orderId = await GuardarOrden(order, removeList);
        if (orderId) {
            console.log("Ordenar por Id:", orderId);
            setPurchaseCompleted(true);
        } else {
            console.log("Error de orden");
        }
    };
    if (purchaseCompleted) {
        return <CheckOut order={order} />;
    }


    return (
        <div>
            { cartList.length > 0 ? 
                <div>
                    {displayItems}
                    <h2>Monto total: ${cartTotalPrice()}</h2>
                    <Button  onClick={handlePurchase}>Terminar compra</Button>
                </div>
                :
                <div>
                    <h3>No hay items en el carrito</h3>
                    <Button as={Link} to="/home">Buscar productos</Button>
                </div>
            }
        </div>
    )
}

export default Cart