import { CartContext } from "./cartContext";
import { useState } from "react";

export function CartProv ({ children }){
    const [cartCounter, setCartCounter] = useState([])

     const addCart = (prod) => setCartCounter([...cartCounter, prod])

     

    return (
        <CartContext.Provider value ={{ cartCounter, addCart }}>
            {children}
        </CartContext.Provider>
    )
}
