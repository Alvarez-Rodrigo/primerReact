import { Link } from "react-router-dom";

function home (){
    return <div className="colum">
        <Link to="jardineria/1" className="cardVista">Producto 1 jardineria</Link>
        <Link to="jardineria/2" className="cardVista">Producto 2 jardineria</Link>
        <Link to="jardineria/3" className="cardVista">Producto 3 jardineria</Link>
        <Link to="jardineria/4" className="cardVista">Producto 4 jardineria</Link>
        <Link to="hogar/1" className="cardVista">Producto 1 hogar</Link>
        <Link to="hogar/2" className="cardVista">Producto 2 hogar</Link>
        <Link to="hogar/3" className="cardVista">Producto 3 hogar</Link>
        <Link to="hogar/4" className="cardVista">Producto 4 hogar</Link>
    </div>
}

export default home;