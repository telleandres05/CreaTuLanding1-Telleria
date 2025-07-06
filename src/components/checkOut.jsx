export function CheckOut() {
    const handelSubmit = e =>{
        e.preventDefault()
    }
    
  return (
    <div className="d-flex justify-content-center">
      <form className="p-4 border rounded bg-light w-50" onSubmit={handelSubmit} noValidate>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="nombre"
            placeholder="Jhon Doe"
            required
          />
          <div className="invalid-feedback">
            Por favor, ingresa tu nombre.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo electrónico</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="jhondoe@email.com"
            required
          />
          <div className="invalid-feedback">
            Ingresa un correo válido.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="telefono" className="form-label">Teléfono</label>
          <input
            type="tel"
            className="form-control"
            id="telefono"
            name="telefono"
            placeholder="+123456789"
            pattern="[0-9]+"
            required
          />
          <div className="invalid-feedback">
            Ingresa un número de teléfono válido.
          </div>
        </div>

        <button type="submit" className="btn btn-primary w-100">Enviar</button>
      </form>
    </div>
  )
}
