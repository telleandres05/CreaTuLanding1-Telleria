import { useState } from "react"
import { useCart } from "../context/useCart"
import Swal from 'sweetalert2'


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

  Swal.fire({
    title: 'Producto Agregado',
    text: `Agregaste ${item.name} al carrito`,
    icon: 'success',
    confirmButtonText: 'OK',
    timer: 2000,
    timerProgressBar: true,
    toast: true,
    position: 'top-end',
    showConfirmButton: false
  })
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
