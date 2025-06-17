import { useState } from "react"


export function ItemCount (){
    
    return(
        
        <div class="botton" style={{ margin: "0.5rem", 
        display:"inline-block", 
        justifyContent:"center", 
        padding:"5px", 
        backgroundColor:"#f4a710", 
        borderRadius:"8px"}}>
                        <button style={{ width: "2rem",
                            border:"none",
                            backgroundColor:"#f4a710"
                        }}> - </button>
                        <input type="text" style={{ width: "2rem", border:"none" }}  min="1" pattern="[0-9]+" value="0"/>
                        <button style={{  width: "2rem",
                            border:"none",
                            backgroundColor:"#f4a710"}}> + </button>
                    </div>
    )
}