import { CartContext } from "../context/cartContext";
import { useContext } from "react";

export default function CartWidget() {
    const { cartCounter } = useContext(CartContext)

    return (
        <button className="btn btn-primary mt-2"> 🛒  {cartCounter.length} </button>
    );
    
}