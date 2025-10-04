import { useState } from "react";


export default function LuddoBoard (){

    let [moves, setmoves] = useState({blue: 0, yellow: 0, green: 0, red: 0});
    let handleClick = (color) => {
        setmoves((prev) => ({...prev, [color]: prev[color] + 1}));
    }

    let handleReset = () => {
        setmoves({blue: 0, yellow: 0, green: 0, red: 0});
    }   
    
     
    return (
        <div>
            <p>Game Begins!</p>
            <div className="Luddo">
                <p>Blue={moves.blue}</p>
                <button style={{backgroundColor:"blue"}} onClick={() => handleClick("blue")}>+1</button>
            </div>
            <div className="Luddo">
                <p>Yellow={moves.yellow}</p>
                <button style={{backgroundColor:"yellow", color:"black"}} onClick={() => handleClick("yellow")}>+1</button>
            </div>
            <div className="Luddo">
                <p>Green={moves.green}</p> 
                <button style={{backgroundColor:"green"}} onClick={() => handleClick("green")}>+1</button>
            </div>
            <div className="Luddo">
                <p>Red={moves.red}</p>
                <button style={{backgroundColor:"red"}} onClick={() => handleClick("red")}>+1</button>
            </div>
            <button onClick={handleReset}>Reset</button>
        </div>
       
    )
}











