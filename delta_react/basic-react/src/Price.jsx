function Price({ oldPrice, newPrice }) {
  let styles = {
    oldPrice: {
      textDecoration: "line-through",
      color: "red",
      fontSize: "1.2em",
    },
    newPrice: {
      color: "green",
      fontSize: "1.5em",
      fontWeight: "bold",
    },
  };

 let devstyle={
  backgroundColor: "#e0c367", 
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height:"60px",
  width:"300px",
  marginTop:"90px",
  borderBottomLeftRadius:"14px",
  borderBottomRightRadius:"14px",
  
 }

  return (
    <div style={devstyle}>
      <span style={styles.oldPrice}>{oldPrice}</span>
      &nbsp; &nbsp; &nbsp;
      <span style={styles.newPrice}>{newPrice}</span>
    </div>
  );
}
export default Price;
