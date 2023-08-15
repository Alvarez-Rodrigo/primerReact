import React, {useEffect, useState} from "react";
import { getItem } from "../../mock/data";
import ItemDetail from "../itemDetail/itemDetail";
import { useParams } from "react-router-dom";
import {getFirestore, doc, getDoc} from "../../firebase/firebase";



function ItemDetailContainer(){

    const [data, setData] = useState ({});
    const {datelleId} = useParams();

    useEffect(() =>{
        const querydb = getFirestore();
        const queryDoc = doc (querydb, 'items', datelleId);
        getDoc(queryDoc)
        .then(res => setData({id: res.id, ...res.data()})) 
    }, [datelleId])


    return(
        <div>
            <ItemDetail data ={data} />
        </div>
    )
}
/*const ItemDetailContainer = ( ) =>{

    const[producto, setProducto] = useState({})
    const {id} = useParams()
    useEffect (()=>{
        getItem(id)
        .then((res) => setProducto(res))
        .catch((error) => console.log(error))
    },[])

    return(
        <div>
            <ItemDetail producto={producto} />
        </div>
    )
}*/


export default ItemDetailContainer;