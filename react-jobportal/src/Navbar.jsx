import React from "react";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2>JobPortal</h2>
      <div>
        <a href="#">Home</a>
        <a href="#">Jobs</a>
        <a href="#">Login</a>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px",
    background: "#007bff",
    color: "white"
  }
};

export default Navbar;