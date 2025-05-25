import './App.css'
import {Navbar} from "./components/navbar"
import ItemListContainer from './components/itemListContainer'

function App() {

  return (
    <>
      <Navbar/>
      <ItemListContainer msj = 'Bienvenidos a tu Tienda Geek'/>
    </>
  )
}

export default App
