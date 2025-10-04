 import "./activity.css";
 function Activity({userName="", textcolor="black"}) {
   let colors= {color: textcolor}; 
    return (
        <div className="activity" style={colors}>
        <h1>hello, {userName}</h1>
        </div>
    );
}
export default Activity;


