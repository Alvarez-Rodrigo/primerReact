import { Button, Card } from "react-bootstrap"
import ItemCount from "../itemCont/itemCont"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useCartContext } from "../context/context"



const ItemDetail = ({producto}) => {
    const { addItem } = useCartContext();
    const [isAdded, setIsAdded] = useState(false);

    const onAdd = (cantidad) => {
        setIsAdded(true);
        addItem(producto, cantidad);
    }

    return (
        <div>
            <Card style={{ width: '30rem' }}>
                <Card.Img variant="top" src={producto.img}/>
                <Card.Body>
                    <Card.Title>{producto.nombre}</Card.Title>
                    <Card.Text>{producto.descripcion}</Card.Text>
                    <Card.Text>${producto.precio}</Card.Text>
                    { isAdded ? 
                        <div>
                            <Button as={Link} to="/cart">Terminar mi compra</Button>
                            <Button as={Link} to="/">Seguir comprando</Button>
                        </div>
                        :
                        <ItemCount initial={1} stock={producto.stock} onAdd={onAdd}/>
                    }
                </Card.Body>
            </Card>
        </div>
    )
}

export default ItemDetail