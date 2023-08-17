import {useState} from 'react';
import { Button } from "react-bootstrap";

const ItemCount = ({stock, agregar, inicial}) => {
    const [cantidad, setCantidad] = useState(inicial);
        const add = () => {
            if(cantidad < stock){
                setCantidad(cantidad + 1);
            }
        }
        const substract = () => {
            if(cantidad > 0){
                setCantidad(cantidad - 1);
            }
        }
        
    return (
        <div className='d-grid'>
            <div className="ItemCount">
                <Button className="btnCount" size="lg" variant="danger" onClick={substract} >-</Button>
                <h5>{cantidad}</h5>
                <Button className="btnCount" size="lg" variant="success" onClick={add} >+</Button>
            </div>
            <Button size="lg"variant="dark" disabled={cantidad === 0} onClick={() => {agregar(cantidad)}}>Agregar al carrito</Button>
        </div>
    )
}

export default ItemCount;