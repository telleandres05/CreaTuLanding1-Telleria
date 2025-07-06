import { CartContext } from "../context/cartContext";
import { useContext } from "react";
import { Link } from "react-router";

export default function CartWidget() {
    const { amountItem } = useContext(CartContext)
    const amount = amountItem ()
    return (
        <Link to={"/cart"} className="btn btn-primary mt-2">  🛒  {amount} </Link>
    )
    
}