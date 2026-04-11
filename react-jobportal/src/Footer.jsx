import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© 2026 JobPortal. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    textAlign: "center",
    padding: "20px",
    background: "#222",
    color: "white"
  }
};

export default Footer;