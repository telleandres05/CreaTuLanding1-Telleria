import { useState } from "react"
import { useCart } from "../context/useCart"


export function ItemCount (){
      const [counter, setCounter] = useState(1)
      const { addCart } = useCart()

  const adder = () => setCounter(counter + 1)
  const minner = () => {
    if (counter > 0)
    setCounter(counter -1)}

   


    return(
        <div>
        <div class="botton" style={{ margin: "0.5rem", 
        display:"inline-block", 
        justifyContent:"center", 
        padding:"5px", 
        backgroundColor:"#f4a710", 
        borderRadius:"8px"}}>
                        <button style={{ width: "2rem",
                            border:"none",
                            backgroundColor:"#f4a710"
                        }}
                        onClick={minner}> - </button>
                        <input type="text" style={{ width: "2rem", border:"none" }} value={counter}  min="1" pattern="[0-9]+"/>
                        <button style={{  width: "2rem",
                            border:"none",
                            backgroundColor:"#f4a710"}}
                            onClick={adder}> + </button>
                    </div>
                    <button className="btn btn-primary mt-2"> Agregar al Carrito</button>
                    </div>
    )
}