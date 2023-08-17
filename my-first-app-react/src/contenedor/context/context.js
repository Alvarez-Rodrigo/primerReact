import { createContext, useState, useContext } from "react";
const Context = createContext();

export const useCartContext = () => {
    return useContext(Context);
};
const ContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const removeList = () => {
        setCartList([])
    }

    const addItem = (item, quantity) => {
        const existingItem = cartList.find(cartItem => cartItem.id === item.id);
    
        if (existingItem) {
            const updatedCart = cartList.map(cartItem =>
                cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + quantity } : cartItem
            );
            setCartList(updatedCart);
        } else {
            setCartList([...cartList, { ...item, quantity }]);
        }
    };
    
    const removeItem = (itemId) => {
        const updatedCart = cartList.filter(cartItem => cartItem.id !== itemId);
        setCartList(updatedCart);
    };
    
    const producTotal = (item, quantity) => {
        return item.precio * quantity;
    }   
    const cartTotal = () => {
        let total = 0;
        cartList.forEach(elem => {
            total += elem.precio * elem.quantity;
        });
        return total;
    }
    return (
        <ContextProvider.Provider value={{cartList, addItem, removeList, removeItem, producTotal, cartTotal}}>
            { children }
        </ContextProvider.Provider>
    );
}
export default ContextProvider;