import { serverTimestamp } from "firebase/firestore"
import { useCart } from "../context/useCart"
import { clientOrder } from "../firebase/gdb"
import Swal from "sweetalert2"

export function CheckOut() {
  const { cartCounter, clearCart } = useCart()

  const handelSubmit = async (e) => {
    e.preventDefault()

    const form = e.target
    const name = form.name.value.trim()
    const email = form.email.value.trim()
    const phone = form.phone.value.trim()

    // Validaciones simples
    if (!name || !email || !phone || !/^\d+$/.test(phone) || !/\S+@\S+\.\S+/.test(email)) {
      Swal.fire({
        icon: "error",
        title: "Datos inválidos",
        text: "Por favor completa todos los campos correctamente.",
      })
      return
    }

    try {
      await clientOrder({
        name,
        email,
        phone,
        items: cartCounter,
        time: serverTimestamp(),
      })

      clearCart() // Vacía el carrito
      form.reset() // Limpia el formulario

      Swal.fire({
        icon: "success",
        title: "¡Orden enviada!",
        text: "Tu pedido fue procesado exitosamente.",
      })
    } catch (error) {
      console.error(error)
      Swal.fire({
        icon: "error",
        title: "Error al procesar",
        text: "Ocurrió un problema al enviar tu pedido.",
      })
    }
  }

  return (
    <div className="d-flex justify-content-center">
      <form className="p-4 border rounded bg-light w-50" onSubmit={handelSubmit} noValidate>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Jhon Doe"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="jhondoe@email.com"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="phone">Teléfono</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            placeholder="+123456789"
            pattern="[0-9]+"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">Enviar</button>
      </form>
    </div>
  )
}
