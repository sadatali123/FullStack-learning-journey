// map, filter, arrow function

//1. map
// const input =[1,2,3,4];

// const ans = input.map((i) =>{ //here i takes each element of input array
//     return i*2;
// })
// console.log(ans);

const input =[1,2,3,4];

  const result = input.map((i) =>{
    const transformerArr =[];
    if (i%2==0){
        transformerArr.push(i);
    }
    else{
        return false;
    }

  })






//2. filter
const input2 = [1, 2, 3, 4, 5];
const ans2 = input2.filter((i) => {
  if (i % 2 == 0) {
    return true;
  } else {
    return false;
  }
});
console.log(ans2);
