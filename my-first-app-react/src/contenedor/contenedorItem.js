import React, {useEffect, useState} from 'react';
import "./stylesItem.css"
import ItemList from './itemList/itemList';
import { getProducto } from '../mock/data';
import { useParams } from 'react-router-dom';





//esta funcion suma los productos de cada cart
function ItemContainer (){
    const [productos, setProductos] = useState([])
    const {categoriaId}= useParams()
   
    useEffect(()=>{
        getProducto()
        .then((res)=>{
            if(categoriaId){
                setProductos(res.filter((item)=> item.categoria === categoriaId))
            }else{setProductos(res)}
        })
        .catch((error)=>console.log(error))
    },[categoriaId])


    return(
        <div>
            <ItemList productos= {productos} />
        </div>
    )
}

//export
export default ItemContainer;