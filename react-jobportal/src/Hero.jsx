import React from "react";

function Hero() {
  return (
    <div style={styles.hero}>
      <h1>Find Your Dream Job</h1>
      <input type="text" placeholder="Search jobs..." />
      <button>Search</button>
    </div>
  );
}

const styles = {
  hero: {
    textAlign: "center",
    padding: "50px",
    background: "#f4f4f4"
  }
};

export default Hero;