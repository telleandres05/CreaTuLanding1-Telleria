import { Link } from "react-router"

export function Item({ art }) {
  return (
    <div className="card h-100 shadow-sm">
      <img
        src={art.imagen}
        alt={art.name}
        className="card-img-top"
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{art.name}</h5>
        <p className="card-text text-muted">{art.description}</p>
        <div className="mt-auto">
          <Link to={`/item/${art.id}`} className="btn btn-primary mt-2">
            Ver más
          </Link>
        </div>
      </div>
    </div>
  )
}
