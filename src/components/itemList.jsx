import { Link } from "react-router"
export function ItemList({ items }) {
  return (
    <div className="container mt-4">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        {items.map((art) => (
          <div className="col" key={art.id}>
            <div className="card h-100 shadow-sm">
              <img src={art.imagen} alt={art.name} className="card-img-top" style={{ height: "200px", objectFit: "cover" }}/>
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
          </div>
        ))}
      </div>
    </div>
  );
}
