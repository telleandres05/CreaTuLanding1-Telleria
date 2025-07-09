import { serverTimestamp } from "firebase/firestore"
import { useCart } from "../context/useCart"
import { clientOrder } from "../firebase/gdb"
import Swal from "sweetalert2"
import { useNavigate } from "react-router"

export function CheckOut() {
  const { cartCounter, clearCart } = useCart()
  const navigate = useNavigate()

  const showAlert = (type, title, text) =>
    Swal.fire({ icon: type, title, text })

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email)
  const isValidPhone = (phone) => /^\d+$/.test(phone)

  const handelSubmit = async (e) => {
    e.preventDefault()
    const form = e.target

    const name = form.name.value.trim()
    const email = form.email.value.trim()
    const phone = form.phone.value.trim()

    if (!name || !isValidEmail(email) || !isValidPhone(phone)) {
      return showAlert("error", "Datos inválidos", "Por favor completa todos los campos correctamente.")
    }

    try {
      await clientOrder({
        name,
        email,
        phone,
        items: cartCounter,
        time: serverTimestamp(),
      })

      clearCart()
      form.reset()

      showAlert("success", "¡Orden enviada!", "Tu pedido fue procesado exitosamente.")
        .then(() => navigate("/"))
    } catch (error) {
      console.error(error)
      showAlert("error", "Error al procesar", "Ocurrió un problema al enviar tu pedido.")
    }
  }

  const Field = ({ label, name, type, placeholder, pattern }) => (
    <div>
      <label htmlFor={name} className="form-label">{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        pattern={pattern}
        required
        className="form-control"
      />
    </div>
  )

  return (
    <div className="checkout-container">
      <form className="checkout-form" onSubmit={handelSubmit} noValidate>
        <Field label="Nombre" name="name" type="text" placeholder="Jhon Doe" />
        <Field label="Correo electrónico" name="email" type="email" placeholder="jhondoe@email.com" />
        <Field label="Teléfono" name="phone" type="tel" placeholder="+123456789" pattern="[0-9]+" />
        <button type="submit" className="btn btn-primary btn-submit">Enviar</button>
      </form>
    </div>
  )
}
