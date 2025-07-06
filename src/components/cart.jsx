import { useCart } from "../context/useCart"
import { Link } from "react-router"

export function Cart() {
  const { cartCounter, removeFromCart } = useCart()

  const totalCarrito = cartCounter.reduce(
    (acc, item) => acc + item.count * item.price,
    0
  )

  const isCartEmpty = cartCounter.length === 0

  return (
    <div className="container mt-4">
      <h2>Carrito de Compras</h2>

      {isCartEmpty ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio Unitario</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cartCounter.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.count}</td>
                <td>${item.price}</td>
                <td>${item.price * item.count}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4" className="text-end">
                <strong>Total a pagar:</strong>
              </td>
              <td>
                <strong>${totalCarrito}</strong>
              </td>
            </tr>
          </tfoot>
        </table>
      )}
      {!isCartEmpty && (
        <Link to="/checkOut" className="btn btn-primary mt-2">
          Finalizar Compra
        </Link>
      )}
    </div>
  )
}
