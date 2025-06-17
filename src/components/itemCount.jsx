import { useState } from "react"

export function ItemCount() {
  const [counter, setCounter] = useState(1)

  const add = () => setCounter(counter + 1)
  const min = () => setCounter(counter - 1)

  return (
    <div
      class="botton"
      style={{
        margin: "0.5rem",
        display: "inline-block",
        justifyContent: "center",
        padding: "5px",
        backgroundColor: "#f4a710",
        borderRadius: "8px",
      }}
    >
      <button
        style={{ width: "2rem", border: "none", backgroundColor: "#f4a710" }}
        onClick={min}
      >
        {" "}
        -{" "}
      </button>
      <input
        type="text"
        style={{ width: "2rem", border: "none" }}
        value={counter}
        min="1"
        pattern="[0-9]+"/>
      <button
        style={{ width: "2rem", border: "none", backgroundColor: "#f4a710" }}
        onClick={add}
      >
        {" "}
        +{" "}
      </button>
    </div>
  );
}
