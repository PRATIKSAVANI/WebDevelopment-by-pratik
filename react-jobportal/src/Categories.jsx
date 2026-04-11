import React from "react";

function Categories() {
  const data = ["IT", "Marketing", "Finance", "Design"];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Job Categories</h2>
      {data.map((item, index) => (
        <button key={index} style={{ margin: "10px" }}>
          {item}
        </button>
      ))}
    </div>
  );
}

export default Categories;