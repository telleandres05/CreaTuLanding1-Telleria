import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { ItemDetail } from "./itemDetail"
import { getItem } from "../firebase/gdb";

function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

   useEffect(() => {
    getItem(id)
  .then(item => setItem (item))
  .catch(err => console.error("Error fetching product:", err))
   }, [id]);

  

  if (!item) return <p>Cargando producto...</p>

  return (
    <ItemDetail itemDet={item} />
  )
}

export default ItemDetailContainer
