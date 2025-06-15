import { useEffect, useState } from "react"
import { useParams } from "react-router"

function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(`https://683f842e5b39a8039a54d43e.mockapi.io/api/geek-store/products/${id}`)
      .then(res => res.json())
      .then(data => setItem(data))
      .catch(err => console.error("Error fetching product:", err))
  }, [id]);

  if (!item) return <p>Cargando producto...</p>;

  return (
    <div className="container mt-4">
      <h2>{item.name}</h2>
      <img src={item.imagen} alt={item.name} style={{ width: "300px" }} />
      <p><strong>Descripción:</strong> {item.description}</p>
      <p><strong>Precio:</strong> ${item.price}</p>
    </div>
  );
}

export default ItemDetailContainer;
