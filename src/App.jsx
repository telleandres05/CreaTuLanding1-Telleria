import "./App.css"
import { Navbar } from "./components/navbar"
import { BrowserRouter, Routes, Route } from "react-router"
import ItemListContainer from './components/itemListContainer'
import ItemDetailContainer from "./components/itemDetailContainer"
import { CartView } from "./components/cartView"
import { CheckOut } from "./components/checkOut"

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer msj="Bienvenido a Tu Tienda Geek" />}/>  
        <Route path="/category/:catName" element ={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<CartView/>}/>
        <Route path="/checkOut" element={<CheckOut/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
