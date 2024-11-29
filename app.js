let num1 = 15;
let num2 = 10;
let sum = num1 + num2;
console.log(sum);






const sum2 = [1,2,3,4].reduce(add, 0); 
function add(accumulator, a) {
  return accumulator + a;
}
console.log(sum);




function isEven(n) {
    return (n % 2 == 0);
}
let n = 15000;

isEven(n) ? console.log("Even") : console.log("Odd");












function contains(a, obj) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
}








function largest(a){
    let num = 0;
    for (let i = 0; i < a.length; i++){
      if (a[i] >= num){
        num = a[i];
      }
    }
    return num;
  }
  
  const arr = [100000,10000,5000,1000000];
  console.log(largest(arr));







  const arr2 = ['this', 'is', 'a test'];

console.log(arr.includes('this'));

const arr3 = [
  { id: '123', name: 'Ali' },
  { id: '345', name: 'Dan' },
  { id: '33', name: 'Mark' },
];





const reverseArray=array=> {
  let newArray=[];
  for (let i=array.length-1 ; i>=0; i--){
  return newArray.push(array[i])}
  };
  
  const array = ['sense.','make', 'all', 'will', 'This'];
  console.log(reverseArray(array));






  var names = ["Daniel","Lucas","Gwen","Henry","Jasper","Lucas","Daniel"];

  const uniqueNames = [];
  const namesArr = names.filter((val, id) => {
      names.indexOf(val) == id;
  });