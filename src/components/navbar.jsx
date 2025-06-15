import { NavLink, Link } from "react-router";
import { CartWidget } from "./cartWidget";
import { useState, useEffect } from "react";

export function Navbar() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("https://683f842e5b39a8039a54d43e.mockapi.io/api/geek-store/products")
      .then((res) => res.json())
      .then((cat) => {
        const catArray = [...new Set(cat.map((producto) => producto.category))];
        setCategory(catArray);
      });
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Título / Logo */}
        <Link to="/" className="text-white text-decoration-none">
          <h1>Geek Store</h1>
        </Link>

        {/* Botón hamburguesa */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCategories"
          aria-controls="navbarCategories"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCategories">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {category.map((cat, index) => (
              <li className="nav-item" key={index}>
                <NavLink
                  to={`/category/${cat}`}
                  className="nav-link text-capitalize"
                >
                  {cat}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="d-flex">
            <CartWidget />
          </div>
        </div>
      </div>
    </nav>
  );
}
