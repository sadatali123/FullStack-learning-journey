import Price from "./Price.jsx";
function AmazonCards({ heading, idx }) {
    let styles={
    width: "300px",
    height: "300px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    boxShadow:" 0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    backgroundColor: "#fff",
    }
  let oldPrice = ["12,495", "11900", "1599", "599"];
  let newPrice = ["8,999", "9,919", "899", "278"];
  let description=[
    ["8000 DPI", "5 Programmable Buttons"],
    ["Intutive Surface", "Designed for ipad Pro"], 
    ["Intutive Surface", "Designed for ipad Pro"], 
    ["wirelss","Optical"]
];
  return (
    <div style={styles} className="amazon-card">
      <h3>{heading}</h3>
      <p style={{marginTop:"65px" }}>
        <li>{description[idx][0]}</li>
        <li>{description[idx][1]}</li>
      </p>
      <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
    </div>
  );
}

export default AmazonCards;
