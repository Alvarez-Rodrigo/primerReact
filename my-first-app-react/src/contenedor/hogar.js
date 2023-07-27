import { Link } from "react-router-dom";
import "./stylesItem.css";

function Hogar(){
    return <div className="colum" > 
        <Link to="hogar/1" className="cardVista">Producto 1</Link>
        <Link to="hogar/2" className="cardVista">Producto 2</Link>
        <Link to="hogar/3" className="cardVista">Producto 3</Link>
        <Link to="hogar/4" className="cardVista">Producto 4</Link>
    </div>
}


export default Hogar;