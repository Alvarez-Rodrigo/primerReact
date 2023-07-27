import { useParams } from "react-router-dom";
import "./stylesItem.css";

function HogarDetalle(){
    const { id } = useParams();



    return <div className="cardVista">
    <div> Hogar </div>
    <div > Eligio el producto{id} </div>
</div>
}

export default HogarDetalle;