import AmazonCards from "./AmazonCards.jsx";
function AmazonCardsTab() {
    let styles={
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin:"20px",
    gap: "10px"
    }
    
  return (
    <div style={styles}>
      <AmazonCards heading="Logistix Max Mater 3S" idx={0} />
      <AmazonCards heading="Apple Pencil  " idx={1} />
      <AmazonCards heading="Zebronics zeb-tranformer" idx={2} />
      <AmazonCards heading="Petronics Toad" idx={3} />
    </div>
  );
}
export default AmazonCardsTab;
