function printHello() {
  console.log("hello!");
}

function sayPPPP(){
  console.log("P");
}

export default function Button() {
  return (
    <div>
      <button onClick={printHello}>Click me!</button>
      <p onClick={sayPPPP}>This is parah for event demo</p>
    </div>
  );
}











