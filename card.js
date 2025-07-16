import React from "https://esm.sh/react@18.2.0";

export default function Card({ title, price, features, buttonLabel, onButtonClick }) {
  return (
    React.createElement("div", { style: styles.card },
      React.createElement("h2", { style: styles.title }, title),
      React.createElement("p", { style: styles.price }, price),
      React.createElement("ul", { style: styles.featureList },
        features.map((feature, i) =>
          React.createElement("li", { key: i, style: styles.featureItem }, "✓ " + feature)
        )
      ),
      React.createElement("button", {
        style: styles.button,
        onClick: onButtonClick,
        onMouseOver: (e) => e.target.style.backgroundColor = "#0056b3",
        onMouseOut: (e) => e.target.style.backgroundColor = "#007bff"
      }, buttonLabel)
    )
  );
}

const styles = {
  card: {
    maxWidth: "340px",
    margin: "50px auto",
    padding: "24px",
    borderRadius: "16px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
    textAlign: "center",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#ffffff",
    border: "1px solid #e5e5e5"
  },
  title: {
    fontSize: "1.75rem",
    fontWeight: "600",
    color: "#333",
    marginBottom: "12px"
  },
  price: {
    fontSize: "1.5rem",
    fontWeight: "500",
    color: "#28a745",
    marginBottom: "20px"
  },
  featureList: {
    listStyle: "none",
    padding: "0",
    marginBottom: "24px"
  },
  featureItem: {
    marginBottom: "10px",
    fontSize: "1rem",
    color: "#555"
  },
  button: {
    padding: "12px 24px",
    backgroundColor: "#007bff",
    color: "#fff",
    fontSize: "1rem",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s ease"
  }
};
