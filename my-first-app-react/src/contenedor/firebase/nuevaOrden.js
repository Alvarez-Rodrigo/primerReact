import { collection, addDoc } from 'firebase/firestore';
import db from './FirebaseConfig';

const GuardarOrden = async (order) => {
    const ordersCollection = collection(db, 'orders'); 

    try {
        const docRef = await addDoc(ordersCollection, order);
        console.log("Order ID: ", docRef.id);
    
        return docRef.id; 
    } catch (e) {
        console.error("Error adding order: ", e);
        return null;
    }
}

export default GuardarOrden;