import { useState, useEffect } from "react"
import { ItemList }  from "./itemList"
  

function itemListContainer (){
  const [items, setItems] = useState([])


    useEffect(() =>{
      fetch('https://683f842e5b39a8039a54d43e.mockapi.io/api/geek-store/products')
      .then(res => res.json())
      .then(art => setItems(art))
      .catch( err => alert(err))
    }, [])

    return (
      <ItemList items={items}/>
    )}

export default itemListContainer
