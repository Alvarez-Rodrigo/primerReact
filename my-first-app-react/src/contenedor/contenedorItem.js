import { useEffect, useState } from "react";
import ItemList from "../contenedor/item/item";
import { useParams } from "react-router-dom";
import data from "../contenedor/firebase/firebase";
import { collection, getDocs, query, where } from 'firebase/firebase';

const ContenedorItem = ({greeting}) => {
    const [productos, setProductos]= useState([]);
    const [Cargando, setCargando]= useState([false])
    const {categoryId} = useParams()


    useEffect(() => {
        const fetchData = async () => {
            const productsCollection = collection(data, "items"); 
            let coleccion;

            if (categoryId) {
                coleccion = query(productsCollection, where("category", "==", categoryId));
            } else {
                coleccion = productsCollection;
            }

            try {
                const querySnapshot = await getDocs(coleccion);
                const data = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
                setProductos(data);
            } catch (error) {
                console.log("Error de los documentos: ", error);
            } finally {
                setCargando(false);
            }
        };

        fetchData();
    }, [categoryId]);

    if(Cargando)return<h2>Cargando</h2>
    return (
        <div>
            
                <div className="itemListContainer">
                    <h2>{greeting} <p>{categoryId && categoryId}</p></h2>
                    <ItemList productos={productos}/>
                </div>
            
        </div>
        
    )
}

export default ContenedorItem;