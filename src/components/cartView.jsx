import React from "react"
import { useCart } from "../context/useCart"
import { Cart } from "./cart"

export function CartView() {
  const { cartCounter } = useCart()

  const totalCarrito = cartCounter.reduce(
    (acc, item) => acc + item.count * item.price,
    0
  )

  return <Cart cartCounter={cartCounter} totalCarrito={totalCarrito} />
}
