import { useParams } from "react-router-dom";
import "./stylesItem.css";

function HogarDetalle(){
    const { id } = useParams();



    return <div className="cardVista">
        <div className="producto"> Eligio el producto{id} </div>
    </div>
}

export default HogarDetalle;