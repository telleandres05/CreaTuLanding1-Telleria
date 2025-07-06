import { CartContext } from "./cartContext"
import { useState } from "react"

export function CartProv ({ children }) {
  const [cartCounter, setCartCounter] = useState([])

  const addCart = (prod) => {
    const inCart = cartCounter.some(item => item.id === prod.id)

    if (inCart) {
      const updatedCart = cartCounter.map(item => {
        if (item.id === prod.id) {
          return { ...item, count: item.count + prod.count }
        }
        return item
      })
      setCartCounter(updatedCart)
    } else {
      setCartCounter([...cartCounter, { ...prod, count: prod.count }])
    }
  }

  const amountItem = () => {
    return cartCounter.reduce((acc, item) => acc + item.count, 0)
  }

  const removeFromCart = (id) => {
  setCartCounter(cartCounter.filter(item => item.id !== id))
}

const clearCart = () => {
    setCartCounter([])
  }


  return (
    <CartContext.Provider value={{ cartCounter, addCart, amountItem, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}
