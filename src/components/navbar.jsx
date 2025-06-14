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
    <nav>
      <div>
        <h1>Geek Store</h1>
      </div>
      <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <div style={{ display: "flex" }}>
          <ul style={{ listStyle: "none", display: "flex" }}>
            {category.map((cat, index) => (
              <li key={index} style={{ margin: "0px 20px" }}>
                <a style={{ color: "white" }} href="">
                  {cat}
                </a>
              </li>
            ))}
          </ul>
          <div>
            <CartWidget></CartWidget>
          </div>
        </div>
      </div>
    </nav>
  );
}
