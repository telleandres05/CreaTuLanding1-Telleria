import "./App.css"
import { Navbar } from "./components/navbar"
import ListContainer from "./components/itemListContainer"
import { BrowserRouter, Routes, Route, Link } from "react-router"

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<ListContainer msj="Bienvenido a Tu Tienda Geek" />}/>  
        <Route path="/category/:catName" element ={<ListContainer/>}/>
        <Route path="/item/:itemID" element={<div></div>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
