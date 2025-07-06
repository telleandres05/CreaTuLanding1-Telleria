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
      <div
        className="botton"
        style={{
          margin: "0.5rem",
          display: "inline-block",
          justifyContent: "center",
          padding: "5px",
          backgroundColor: "#f4a710",
          borderRadius: "8px",
        }}
      >
        <button
          style={{
            width: "2rem",
            border: "none",
            backgroundColor: "#f4a710",
          }}
          onClick={hMinner}
        >
          {" "}
          -{" "}
        </button>

        <input
          type="text"
          style={{
            width: "2rem",
            border: "none",
            textAlign: "center",
          }}
          value={counter}
          readOnly
        />

        <button
          style={{
            width: "2rem",
            border: "none",
            backgroundColor: "#f4a710",
          }}
          onClick={hAdder}
        >
          {" "}
          +{" "}
        </button>
      </div>

      <button onClick={hCart} className="btn btn-primary mt-2">
        Agregar al Carrito
      </button>
    </div>
  )
}
