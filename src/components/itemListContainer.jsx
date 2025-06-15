import { useState, useEffect } from "react"
import { ItemList } from "./itemList"
import { useParams } from "react-router"

function ItemListContainer() {
  const [items, setItems] = useState([])
  const { catName } = useParams()

  useEffect(() => {
    fetch("https://683f842e5b39a8039a54d43e.mockapi.io/api/geek-store/products")
      .then(res => res.json())
      .then(art => {
        if (catName) {
          const filtered = art.filter(item => item.category === catName)
          setItems(filtered)
        } else {
          setItems(art)
        }
      })
      .catch(err => alert(err))
  }, [catName])

  return <ItemList items={items} />
}

export default ItemListContainer
