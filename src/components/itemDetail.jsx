import { ItemCount } from "./itemCount";

export function ItemDetail({ itemDet }) {
  return (
    <div className="container mt-4">
      <h2>{itemDet.name}</h2>
      <img src={itemDet.imagen} alt={itemDet.name} style={{ width: "300px" }} />
      <p>
        <strong>Descripción:</strong> {itemDet.description}
      </p>
      <p>
        <strong>Precio:</strong> ${itemDet.price}
      </p>
      <ItemCount />
    </div>
  );
}
