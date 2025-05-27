import './App.css'
import {Navbar} from "./components/navbar"
import ListContainer from './components/itemListContainer'

function App() {

  return (
    <>
      <Navbar/>
      <ListContainer msj = 'Bienvenido a Tu Tienda Geek'/>
    </>
  )
}

export default App