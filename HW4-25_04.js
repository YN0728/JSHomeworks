// 1. Unshift
let newUnshift = (arr, i=0) => {
  arr[i]=arr[i+1]
  i++
  i<arr.length?newUnshift(arr,i):arr.pop();
  return arr
}
console.log(newUnshift([]))

// 2. key-value - val-key
let valKey = obj => {
  let newObj = {};
  for (let key in obj){
    if(newObj[obj[key]]){
      if(Array.isArray(newObj[obj[key]])) newObj[obj[key]].push(key)
      else {
        let val = newObj[obj[key]];
        newObj[obj[key]] = []
        newObj[obj[key]].push(val, key)
      }
    }
    else newObj[obj[key]]=key;
  }
  return newObj
}
console.log(valKey({"aa":10, 11:"dd", 22:"dd", 23:"dd"}));


// 3. book order by percent and read status is true
let a = [
  { book: "Catcher in the Rye", readStatus: true, percent: 40},
  { book: "Animal Farm", readStatus: true, percent: 20},
  { book: "Solaris", readStatus: false, percent: 90 },
  { book: "The Fall", readStatus: true, percent: 50 },
  { book: "White Nights", readStatus: false, percent: 60 },
  { book: "After Dark", readStatus: true, percent: 70 }
]
let bookOrder = bookList => bookList.filter(x=>x.readStatus===true).sort((a,b)=>b.percent-a.percent).map(x=>x.book)
console.log(bookOrder(a));

// 4. rotate first/last c elements
let rotateN = (arr, c) => {
  c = c<0?arr.length+c:c;
  arr.push(arr.shift())
  c--;
  if(c>0) rotateN(arr,c)
  return arr
}
console.log(rotateN([1,2,3,4,5,6],2))
console.log(rotateN([1,2,3,4,5,6],-2))


// 5. tree
let treeNodes = [
  {parent: null, id:0},
  {parent: 0, id:1},
  {parent: 0, id:2},
  {parent: 1, id:3},
  {parent: 1, id:4},
  {parent: 2, id:5},
  {parent: 4, id:6},
]

let tree = (arr, tempObj = {}) =>{
  debugger
  for(let i of arr){
    if (i.parent === null) {
      tempObj[i.id] = {}
      arr.splice(arr.indexOf(i),1)
      break 
    }
  }
  for (let line of arr){
    if (tempObj.hasOwnProperty(line.parent)) {
      tempObj[line.parent][line.id] = {}
      arr.splice(arr.indexOf(line),1)
      tree(arr, tempObj)
      tree(arr, tempObj[line.parent])
    } 
  }
  return tempObj
}
console.log(tree(treeNodes))


// 6. combinations
let combination = (arr,r,index=0,temp=[],i=0, final = []) =>{
  if(index === r){
    return final.push(temp.slice(0,3))
  }
  if(i<arr.length){
   
  temp[index] = arr[i]
  combination(arr, r, index + 1, temp, i+1, final); 
  combination(arr, r, index, temp, i+1, final);
  }
  return final
}

console.log(combination([1,2,3,4,5],3))


// 7 Map
let NewMap = function(){
  this.mapn = function(fn){
    let accumulator={}
    for (let i in this){
      if(i !== "mapn" && i !== "accumulator") {
        accumulator[i] = fn(this[i]);
      }
      else if (i === "mapn"){
        accumulator[i] = this[i]
      }
    }
    return accumulator;
  }
}
let example = new NewMap()
example.a = 1;
example.b = 2;
example.c = "3";

let a = example.mapn(x=>x+"1")
console.log(a.mapn(x=>x**2));
