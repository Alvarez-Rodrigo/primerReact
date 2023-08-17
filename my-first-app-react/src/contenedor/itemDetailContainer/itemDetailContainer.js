import { useEffect, useState } from "react"
import ItemDetail from "../itemDetail/itemDetail"
import { useParams } from "react-router-dom"
import data from "../firebase/firebase";
import { doc, getDoc } from '../firebase/firebase';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [loading, setLoading]= useState([false])
    const { id }=useParams()
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const productDoc = doc(data, "items", id);
                const productSnapshot = await getDoc(productDoc);

                if (productSnapshot.exists()) {
                    setProducto({ ...productSnapshot.data(), id: productSnapshot.id });
                } else {
                    console.log("no tiene producto!");
                }
            } catch (error) {
                console.log("Error en el documento:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);
    if(loading)return<h2>cargando</h2>
    return (
            <div className="d-flex justify-content-center">
                <ItemDetail producto={producto}/>
            </div>

    )
}

export default ItemDetailContainer