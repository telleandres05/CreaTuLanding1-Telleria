import { useState, useEffect } from "react"
import { ItemList }  from "./itemList"
  
  const articulos = [
  {
    "name": "Anillos Akatsuki",
    "description": "Colección de anillos de los Akatsuki",
    "category": "Naruto",
    "price": "20",
    "imagen": "https://i.postimg.cc/8jz2v4L2/anillos-akatsuki.jpg",
    "id": "1"
  },
  {
    "name": "Cápsulas de Capsule Corp.",
    "description": "llaveros de Capsulas de Dragón Ball",
    "category": "Dragón Ball",
    "price": "5",
    "imagen": "https://i.postimg.cc/xq5rqhNG/capsula.jpg",
    "id": "2"
  },
  {
    "name": "Diadema de Ravenclaw",
    "description": "Collar representativo de la Diadema de Ravenclaw",
    "category": "Harry Potter",
    "price": "10",
    "imagen": "https://i.postimg.cc/jCt0xt2d/collar-diadema-ravenclaw.jpg",
    "id": "3"
  },
  {
    "name": "Gira Tiempo",
    "description": "Collar Gira Tiempo de Hermione Grenger",
    "category": "Harry Potter",
    "price": "7",
    "imagen": "https://i.postimg.cc/hvxc420M/collar-giratiempo.jpg",
    "id": "4"
  },
  {
    "name": "Gorra BTS Blanca",
    "description": "Gorra del Grupo Kpop BTS en color blanco",
    "category": "BTS",
    "price": "10",
    "imagen": "https://i.postimg.cc/SJ1wf9rJ/gorra-bl-bts.jpg",
    "id": "5"
  },
  {
    "name": "Gorra BTS Negra",
    "description": "Gorra del Grupo Kpop BTS en color blanco",
    "category": "BTS",
    "price": "10",
    "imagen": "https://i.postimg.cc/WdDxW4WS/gorra-ne-bts.jpg",
    "id": "6"
  },
  {
    "name": "Lámpara de Goku",
    "description": "Lámpara representativa de Gokú Vs. Majín bu",
    "category": "Dragón Ball",
    "price": "7",
    "imagen": "https://i.postimg.cc/fV6p6h1s/lampara.jpg",
    "id": "7"
  },
  {
    "name": "Lámpara de Naruto",
    "description": "Figura de Naruto iluminada con efectos en LED",
    "category": "Naruto",
    "price": "14",
    "imagen": "https://i.postimg.cc/gw8QpTPZ/lampara-naruto.jpg",
    "id": "8"
  }
]

function itemListContainer (){
  const [items, setItems] = useState([])
  const getProd = () => new Promise((resolve, reject) =>{
    if (articulos.length) {
      resolve(articulos)
    } else {
      reject ('no encuentro nada')
    }
  })

    useEffect(() =>{
      getProd()
      .then(res => setItems(res))
      .catch( err => alert(err))
    }, [])

    return (
      <ItemList items={items}/>
    )}

export default itemListContainer
