import React, { useEffect, useState } from "react";
import Item from "../item/item";
import {getFirestore, collection, getDocs, query, where} from "../../firebase/firebase";
import { useParams } from "react-router-dom";



const [data, setData] = useState([]);
const {categoriaId} = useParams();

useEffect(() => {

    const querydb = getFirestore();
    const queryCollection = collection(querydb, 'items');
    const queryFilter = query(queryCollection, where('categoria', '==', categoriaId));
    if (categoriaId){
        getDocs(queryCollection)
    .them(res => setData(res.docs.map(producto => ({id: producto.id, ...producto.data()}))))
    }else{
        getDocs(queryCollection)
            .them(res => setData(res.docs.map(producto => ({id: producto.id, ...producto.data()}))))
    }
    


},[categoriaId]);


export default ItemList;