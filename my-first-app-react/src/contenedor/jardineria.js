import { Link } from "react-router-dom";
import "./stylesItem.css";



function Jardineria(){
    return <div className="colum">
        <Link to="jardineria/1" className="cardVista">Producto 1</Link>
        <Link to="jardineria/2" className="cardVista">Producto 2</Link>
        <Link to="jardineria/3" className="cardVista">Producto 3</Link>
        <Link to="jardineria/4" className="cardVista">Producto 4</Link>
    </div>
}

export default Jardineria;