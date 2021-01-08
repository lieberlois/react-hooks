import React, { useState, useEffect } from "react";

export default function NumberList({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems(2));
    console.log("Update Items");
  }, [getItems]);

  return (
    <div>
      {items.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
}
