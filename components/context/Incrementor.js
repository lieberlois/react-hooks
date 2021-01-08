import React from "react";
import { useCountIncrement } from "../../context/CountContext";

export default function Incrementor() {
  const increment = useCountIncrement();

  return (
    <div>
      <button onClick={increment} style={{ width: "100%", height: "35px" }}>
        Increment
      </button>
    </div>
  );
}
