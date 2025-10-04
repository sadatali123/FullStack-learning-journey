// props example:
// import "./Title.css"

// function Title({title, price=100}) {
//   return (
//     <div className="title">
//         <h1>{title}</h1>
//         <h3>Price:{price}</h3>
//     </div>
//   );
// }

// export default Title;




// // array rendering example:
// import "./Title.css";
// function Title({ title, price = 100, feature = [], feature2 = {} }) {
//   return (
//     <div className="title">
//       <h1>{title}</h1>
//       <h3>Price:{price}</h3>
//       <p>
//         {feature.map((el) => (
//           <ul>
//             <li>{el}</li>
//           </ul>
//         ))}
//       </p>
//       <p>{feature2.a}</p>
//     </div>
//   );
// }

// export default Title;





// conditionals example:

import "./Title.css";
function Title({ title, price = 100 }) {
// let isDiscounted = price > 20000 ? "5% discount" : "No discount"; 
let styles= {backgroundColor: price > 20000 ? "violet" : ""};  // conditional styles
  return (
    <div className="title" style={styles}  >
      <h1>{title}</h1>
      <h3>Price:{price}</h3>

      {/* <p> {isDiscounted}</p>*/}   {/*this is create a extra <p></p> node in the DOM */} 

      { price > 20000 && <p>5% discount</p> }    {/* for removing extra <P></P> node */}   
     
    </div>
  );
}

export default Title;