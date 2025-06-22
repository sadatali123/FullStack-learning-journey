// console.log("Hello");
// let a = "My Name is Sadat Ali";
// console.log(a + "" + 123);

//template literals
// let price1 = 15;
// let price2 = 30;
// console.log(`Total price is: ${price1 + price2} rupees`);

// operators:
// Arithmetic op.
// let num1 = 10;
// let num2 = 20;
// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2);
// console.log(num1 ** num2);

//unary op.

// console.log(num1++); // 10
// console.log(++num1); // 12

// if statement
// console.log("before if");
// let age = 17;
// if (age >= 18) {
//   console.log("you can vote");
//   let a = 3;
//   console.log(a);
// }
// console.log("after if");

// practice question
//traffic light system

//let color = "green";
// if (color === "red") {
//   console.log("STOP");
// }

// else if (color === " yellow") {
//   console.log("Slow Down");
// }

// else if (color === "green") {
//   console.log("GO");
// }

//marks
// let marks=45;
// if(marks>=90){
//     console.log("A+");
// }else if(marks>=30){
//     console.log("B+");
// }else if(marks>=50){
//     console.log("C+");
// }else if(marks>=30){ // this part is not checked beacause 2nd condition is already true though this condition is also true;
//  console.log("D+");
// }

// practice question --popcorn
// let size= "l";
// if(size==="xl"){
//   console.log( 250 + "rupees");
// }else if(size==='l'){
//   console.log( 200 + "rupees");
// }else if(size==="m"){
//   console.log( 150 + "rupees");
// }else if(size==="s"){
//   console.log( 100 + "rupees");
// }

//practice questions
//a string is good or not
// let str="artist";
// if(str[0]==="a" && str.length>3){
//   console.log("good string");
// }
// else{
//   console.log("not a good string");
// }

//falsy and truthy values
//1)  if(false){
//   console.log("It has true value");
//  }
//  else{
//   console.log("It has false value");
//  }

//2) if(1){
//   console.log("It has true value");
//  }
//  else{
//   console.log("It has false value");
//  }

//3) if("sadat"){
//   console.log("It has true value");
//  }
//  else{
//   console.log("It has false value");
//  }

//switch statement
// let color="red";
// switch(color){
//   case "red":
//     console.log("stop");
//     break;
//   case "yellow":
//     console.log("slow down");
//     break;
//   case "green":
//     console.log("go");
//     break;
//   default:
//     console.log("broken light");
// }

// console.log("after switch statement")

// let day =2;
// switch(day){
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("sunday");
//     break;
//   default:
//     console.log("wrong day");
// }

//string methods
// let str="error";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// method of chaining
// let str="  sumana  ";
// console.log(str.trim().toLocaleUpperCase());

// slicing
// let str="012345678";
// console.log(str.slice(0, 5));
// console.log(str.slice(5));  // (idx 5 to length-1)
// console.log(str.slice(str.length-2));

// repalce method
// let string="sadatali";
// let Rstr = string.replace("ali", "Ali");
// console.log(Rstr);

// practice question:
// let str="help!";
// console.log(str.trim().toUpperCase());

// let name="ApnaCollege";

// console.log(name.slice(4, 9));
// console.log(name.indexOf("na"));

// console.log(name.slice(4).replace("l", "t"));

// array practice quuestion
// let start=["january", "july", "march", "august"]

// start.shift();
// console.log(start);
// start.shift();
// console.log(start);
// start.unshift("junne");
// console.log(start);
// start.unshift("july");
// console.log(start);

// practice
// que1
//  let start=["january", "july", "march", "august"]
//  start.splice(0,1);
//  console.log(start);
//  start.splice(1,0,"june");
//  console.log(start);

//  que 2
let Plang = ["c", "c++", "html", "javascript", "python", "java", "c#", "sql"];
//  let Marray=Plang.reverse();
//  console.log(Marray);
//  console.log(Marray.indexOf("javascript"));

// same ans but solve using method chaining
// console.log(Plang.reverse().indexOf("javascript"));

// practice question
// let game = [
//   ["X", null, "O"],
//   [null, "X", null],
//   ["O", null, "X"],
// ];
// console.log(game);

// game[0][1]="O";
// console.log((game));

//1
// let array=[7,9,0,-2];
// let Sarr=array.slice(0,3);
// console.log(Sarr);

//2
// let LSE=array.slice(-3);
// console.log(LSE);

// let str="";
// if(str.length==0){
//     console.log("string is null");
// }
// else{
//     console.log("string is not null");
// }

//5
// let string = "  hello world  ";

// console.log(string.trim());

//4
// let str="Sadat";
// if(str[0]==str[0].toLocaleLowerCase()){
//     console.log(`character is lower case`);
// }
// else{
//     console.log(`character is uppercase`);
// }

// javascript part--4
// for (let i = 0; i <= 15; i++) {
//   if (i % 2 != 0) {
//     console.log(i);
//   }
// }

// nested for loop
// for(let i=1; i<=3; i++){
//     for(let j=1; j<=3; j++){
//         console.log(j);
//     }
// }

// let guess = prompt("Enter your favourite movie name:");
// let favmovie = "KGF";
// while (guess != favmovie) {
//     if(guess=="quit"){
//         console.log("you quit");
//         break;
//     }
// //   prompt("your guess is wrong, try again:");
// }

// if (guess == favmovie) {
//   console.log("your guess is correct!");
// }

// let fruits = [
//   "apple",
//   "banana",
//   "orange",
//   "mango",
//   "apple",
//   "banana",
//   "orange",
//   "mango",
// ];
// for (let i = fruits.length - 1; i >= 0; i--) {
//   console.log(i, fruits[i]);
// }

// nested arrays
// let superhero = [
//   ["spiderman", "batman", "superman", "ironman"],
//   ["krish", "chitti", "flying", "jatt"],
// ];

// for (let i = 0; i < superhero.length; i++) {
//   console.log(`outer lopp, i=${i}`);
//   for (let j = 0; j < superhero[i].length; j++) {
//     console.log(`j=${j},${superhero[i][j]}`);
//   }
//}

// // nested array and nested for loop
// let student = [
//   ["sadat", 89],
//   ["sumana", 90],
//   ["suman", 95],
// ];

// for (let i = 0; i < student.length; i++) {
//     console.log(`i=${i}`);
//   for (let j = 0; j < student[i].length; j++) {
//     console.log(` ${student[i][j]}`);
//   }
// }

// // todo appication
// let todos = [];
// let input = prompt("enter your request:");
// while (true) {
//   if (input == "quite") {
//     console.log("quiting app");
//     break;
//   }

//   if (input == "list") {
//     for (task of todos) {
//       console.log(task);
//     }
//   } else if (input == "add") {
//     let task = prompt("please enter the task what you want to add");
//     todos.push(task);
//     console.log("task added");
//   } else if( input== "delete"){
//     if(todos.length==0){
//         console.log("No item found to be deleted");
//     }
//     else{
//        let Del_item = prompt("Enter the task what you want to delete");
//        let index= todos.indexOf(Del_item);
//        let item=todos.splice(index,1);
//        console.log(item);
//     }
//   }
//   input = prompt("enter your request:");
// }

// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// let num = 2;
// let new_arr = arr.filter((x) => x != num);
// console.log(new_arr);

// const classInfo1={

//   sadat: {
//     name:"sadat",
//     grade:"A+"
//   },
//   sana: {
//     name:"sana",
//     grade:"O"
//   },
//   suman:{
//     name:"suman",
//     grade:"A"
//   }
// };

// const classInfo2=[

//   {
//     name:"sadat",
//     grade:"A+"
//   },
//   {
//     name:"sana",
//     grade:"O"
//   },
//   {
//     name:"suman",
//     grade:"A"
//   }
// ];

// // random number generate
// const max_num = prompt("Enter a max number");
// const random = Math.floor(Math.random() * max_num) + 1;
// let guess = prompt("Guess a number");

// while (true) {
//   if (guess == "quit") {
//     conosole.log("user quit");
//     break;
//   } else if (guess == random) {
//     console.log("you are right! congrats! random number is:",random);
//     break;
//   } else if(guess < random){
//     guess=prompt("you guess too small number, try again");
//   } else{
//    guess= prompt("you guess too large number, try again");
//   }
// }

// functions
// function sum(num1,num2){
//   return num1+num2;
// }

// console.log(sum(sum(1,2),3));

// let greet = "hello";
// function outerGreet() {
//   let greet = "sadat";
//   console.log(greet);
//   function innerGreet() {
//     console.log(greet);
//   }
//   innerGreet();
// }
// console.log(greet);
// outerGreet();

// // Qs1. Write a JavaScript function that returns array elements larger
// // than a number.
// function newarr(arr) {
//   let num = 10;
//   for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] > num) {
//       console.log(arr[i]);
//     }
//   }
// }
// let numbers = [2, 5, 7, 8, 10, 25, 12, 45, 14];
// newarr(numbers);

// let str = "abcdabcdefgggh" ;
// let new_str="";

// // this keyword
// const student = {
//   name: "sadat",
//   eng: 80,
//   math: 90,
//   age: 22,
//   getavg() {
//     let avg = (this.eng + this.math) / 2;
//     console.log(avg);
//   }
// }

// // arrow function
// const sum=(a,b)=>{
//   console.log(a+b);
// };
// sum(1,2);

// const pow=(a,b)=>{
//   let p=a**b;
//   console.log(p);
// };
// pow(2,3);

// const sum= (s,d)=>(s + d);
// let c= sum(3,4);
// console.log(c);

// //practice
// function concatenate(){
//   let arr=["my", "name", "is", "sadat", "ali"];
//   let concatenate_str="";
//   for(let i=0; i<=arr.length; i++){
//     concatenate_str += arr[i];
//   }
//   return console.log(concatenate_str.trim());
// }
// console.log("call my function");
// let id=setInterval(concatenate,3000);
// //  clearInterval(id);

// const sqr=(n)=>(
//   console.log(n*n)
// );
// sqr(2)

// let id = setInterval(()=>{
//   console.log("Hello World");
// }, 2000);

// setTimeout(()=>{
// clearInterval(id);
// },10000)

// let arr = [2, 3, 54, 32, 12, 34];
// const arrayAverage = (arr) => {
//   let sum = 0;
//   for(let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   let avg = sum / arr.length;
//   console.log(avg);
//   return avg;
// };

// arrayAverage(arr);

// const isEven = (n) => {
//   if (n % 2 == 0) {
//     console.log("Number is Even");
//   } else {
//     console.log("Number is odd");
//   }
// };

// isEven(1028);

// let arr=[
// {
//   name: "sadat",
//   marks: 95,
// },
// {
//   name:"shradha",
//   marks:97,
// },
// {
//   name:"sana",
//   marks:76,
// },
// ];
// let gpa=arr.map((el) =>{
//   return el.marks/10;
// });

// let arr=[2,3,4,6,7,8];
// arr.forEach((el) =>{
//   console.log( el * 2);
// });

// let arr=[2,4,3,5,6,76,73,90,122,3223,54,76,120];
// let max=arr[0];
// for(let i=1; i<arr.length; i++){
//   if(arr[i]>max){
//     max=arr[i];
//   }
// }
// console.log(max);

// let max= arr.reduce((max,el)=>{
//   if(max<el){
//     return el;
//   }else{
//     return max;
//   }
// });

// let array = [20, 30, 40];
// array.every((el) => {
//   if (el % 10 == 0) {
//     console.log("All the elements of array are divided by 10");
//   } else {
//     console.log("All the elements of array are not divided by 10");
//   }
// });
// let array = [20, 30, 40];
//  let ans=array.every((el) => el % 10 == 0);
// console.log(ans);

// let arr = [2, 4, 3, 5, 6, 76, 73, 90, 122, 3223, 54, 76, 120];
// function getMin(arr) {
//   let min= arr.reduce((minimum, el) => {
//     if (minimum < el) {
//       return minimum;
//     } else {
//       return el;
//     }
//   });
//   return min;
// }

// let para= document.createElement("p");
// para.innerText="Hey, I am red!";
// para.style.color="red";
// document.querySelector("body").insertAdjacentElement("beforebegin",para );

// let h3=document.createElement("h3");
// h3.innerText="I am blue h3";
// document.querySelector("body").insertAdjacentElement("afterbegin",h3);
// h3.classList.add("blue");

// let div=document.createElement("div");
// let h1=document.createElement("h1");
// let p=document.createElement("p");
// h1.innerText="I am a div";
// p.innerText="me too";

// div.append(h1);
// h1.append(p);
// div.classList.add("div");
// document.querySelector("body").insertAdjacentElement("beforebegin",div);

// let btns= document.querySelectorAll("button");

// for(btn of btns){
// btn.onclick = sayClick; // write only function name rather than function calling
// }

// for(btn of btns){
//     btn.onmouseenter=sayhello;
// }

// add event listner
// for(btn of btns){
//     btn.addEventListener("click", dbClick);
//     btn.addEventListener("dblclick", sayClick);
// }

// function dbClick(){
//     console.log("you double click me");
// }

// function sayClick(){
//     console.log("click");
// }

// //activity-- importance of event listeners

// let btn= document.querySelector("button");
// let h3= document.querySelector("h3");
// let div=document.querySelector("div");

// btn.addEventListener("click", function(){
//     let getcolor=getRandomColor();

//     h3.innerText=getcolor;
//     div.style.backgroundColor = getcolor;
// });

// // generate random number b/w 0-255
// function getRandomColor() {
//     let red= Math.floor(Math.random() * 255);
//     let green= Math.floor(Math.random() * 255);
//     let blue= Math.floor(Math.random() * 255);

//     let color = `rgb(${red}, ${green}, ${blue})`;
//     return color;
// }

// let btn= document.querySelector("button");

// btn.addEventListener("click", function(){
//     console.log(this.innerText);
// });

// function one(){
//     return 1;
// }

// function two(){
//     return one() + one();
// }

// function three(){
//     return two() + one();
// }
// three();

// // promises
// function saveToDB(data) {
//   return new Promise((resolve, reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//       resolve("success: data was saved");
//     } else {
//       reject("failure: weak connection");
//     }
//   });
// }

// // promise chaining
// saveToDB("first data")
//   .then((result) => {
//     console.log("data1 saved");
//     console.log("result of promise:", result);
//     return saveToDB("second data");
//   })
//   .then((result) => {
//     console.log("data2 saved");
//     console.log("result of promise:", result);
//     return saveToDB("third data");
//   })
//   .then((result) => {
//     console.log("data3 saved");
//     console.log("result of promise:", result);
//   })
//   .catch((error) => {
//     console.log("promise was rejected");
//     console.log("result of promise:", error);
//   });




// api request
// let url = "https://catfact.ninja/fact";

// async function getFacts() {
//   try {
//     let resp = await fetch(url); //request send to api/url
//     let data = await resp.json(); // promise return krte hain
//     console.log(data.fact);

//     let resp2 = await fetch(url);
//     let data2 = await resp2.json(); // promise return krte hain
//     console.log(data2);
//   } catch (e) {
//     console.log("error:", e);
//   }
// }



// // click and generate random text about cat

// let btn=document.querySelector("button");
// btn.addEventListener("click", async ()=>{
// let facts = await getFacts();
// let p = document.querySelector("#result");
// p.innerText = facts;
// });

// // axios library
// let url = "https://catfact.ninja/fact";

// async function getFacts() {
//   try {
//     let resp = await axios.get(url); //request send to api/url
//     return resp.data.fact;
//   } 
//   catch (e) {
//     console.log("error:", e);
//     return "No facts found";
//   }
// }




// // click and image generate 
// let btn=document.querySelector("button");
// btn.addEventListener("click", async ()=>{
// let image = await getImage();
// console.log(image);
// let img = document.querySelector("#image");
// img.src=image;
// });

// let url = "https://dog.ceo/api/breeds/image/random";
// async function getImage() {
//   try {
//     let resp = await axios.get(url); //request send to api/url
//     return resp.data.message;
//   } 
//   catch (e) {
//     console.log("error:", e);
//     return "No Image found";
//   }
// }



// let btn=document.querySelector("button");
// btn.addEventListener("click", async ()=>{
//   let country = document.querySelector("#input").value;
//   let countryARR= await getColleges(country);
//   show(countryARR);
// });

// function show(countryARR) {
//     let list= document.querySelector("#list");
//     list.innerText="";
//   for (col of countryARR) {
//     let li=document.createElement("li");
//     li.innerText=col.name;
//     list.appendChild(li);
//   }
// }

// let url = "http://universities.hipolabs.com/search?name=";
// async function getColleges(country){
//     try{
//        let resp = await axios.get(url + country);
//        return resp.data;
//     } catch(error){
//         return [];
//     }
// }