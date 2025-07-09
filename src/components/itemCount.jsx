import { useState } from "react"
import { useCart } from "../context/useCart"

export function ItemCount({ item }) {
  const [counter, setCounter] = useState(1)
  const { addCart } = useCart()

  const hAdder = () => setCounter(counter + 1)
  const hMinner = () => {
    if (counter > 1) setCounter(counter - 1)
  }

  const hCart = () => {
    addCart({ ...item, count: counter })
    setCounter(1)
  }

  return (
    <div>
      <div className="item-counter">
        <button onClick={hMinner}>-</button>
        <input type="text" value={counter} readOnly />
        <button onClick={hAdder}>+</button>
      </div>

      <button onClick={hCart} className="btn btn-primary mt-2">
        Agregar al Carrito
      </button>
    </div>
  )
}
