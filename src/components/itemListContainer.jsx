import { useState, useEffect } from "react"
import { ItemList } from "./itemList"
import { useParams } from "react-router"
import { getItems, getItemCat } from "../firebase/gdb"

function ItemListContainer() {
  const [items, setItems] = useState([])
  const { catName } = useParams()

  useEffect(() => {
    if (catName) {
      getItemCat(catName)
      .then(items => setItems(items))
    } else {
getItems()
.then(items => {
  setItems(items)
}).catch(err => alert(err))
  }}, 
  
  
  [catName])

  return <ItemList items={items} />
}

export default ItemListContainer
