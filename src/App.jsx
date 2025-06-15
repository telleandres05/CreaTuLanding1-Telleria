import "./App.css"
import { Navbar } from "./components/navbar"
import ListContainer from "./components/itemListContainer"
import { BrowserRouter, Routes, Route } from "react-router"
import ItemListContainer from './components/itemListContainer'
import ItemDetailContainer from "./components/itemDetailContainer"

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<ListContainer msj="Bienvenido a Tu Tienda Geek" />}/>  
        <Route path="/category/:catName" element ={<ListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
