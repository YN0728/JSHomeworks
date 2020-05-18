// 1
let isUnique = a =>{
  debugger;
  let newArr = new Set(a);
  return newArr.size === a.length
}
console.log(isUnique([1,2,3,6,4,4]));

// 2
let sumOfEven = arr => arr.reduce((acc, value)=> acc+=Math.sqrt(value)%2===0?value:0,0)
console.log(sumOfEven([1,4,3,9,16]));

// 3
let isPalindrome = str => str.split("").reverse().join("")===str
console.log(isPalindrome("asdsa"));

// 4
let allAnagrams = (str, arr) => arr.filter(x=>x.split("").sort().join("")===str.split("").sort().join(""))
console.log(allAnagrams("asd", ['aaa', 'sad', 'asde', 'dsa']));