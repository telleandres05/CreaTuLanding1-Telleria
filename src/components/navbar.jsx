import { NavLink, Link } from "react-router"
import CartWidget from "./cartWidget"
import { useState, useEffect } from "react"
import { getAllCategories } from "../firebase/gdb"


export function Navbar() {
  const [category, setCategory] = useState([])


useEffect(() => {
  getAllCategories().then((catArray) => {
    setCategory(catArray)
  })
}, [])


  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <Link to="/" className="text-dark text-decoration-none">
          <h1>Geek Store</h1>
        </Link>
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
                  className="nav-link text-capitalize text-dark"
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
  )
}
