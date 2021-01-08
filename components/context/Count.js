import React from "react";
import { useCount } from "../../context/CountContext";

export default function Count({ name }) {
  const count = useCount();

  return (
    <div>
      <h2>
        {name} - Current Count: {count}
      </h2>
    </div>
  );
}
