//// 1

let binary = (arr, n, l = 0, r = arr.length) => {
  let mid = arr[Math.floor((l + r) / 2)];
  if (mid !== n) {
    if (n > mid) return binary(arr, n, (l = Math.floor((l + r) / 2)), r);
    else return binary(arr, n, l, (r = Math.floor((l + r) / 2)));
  }
  return Math.floor((l + r) / 2);
};
console.log(binary([1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 14, 16, 19], 16));

  /// with loops
let binary1 = (arr, n, start = 0, end = arr.length) => {
  while (arr[Math.floor((start + end) / 2)] !== n) {
    if (n > arr[Math.floor((start + end) / 2)])
      start = Math.floor((start + end) / 2);
    else end = Math.floor((start + end) / 2);
  }
  return Math.floor((start + end) / 2);
};
console.log(binary1([1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 14, 16, 19], 1));




//// 2

let treeNodesChild = [
  {id: 1, children:[3,4]},
  {id: 4, children:[6]},
  {id: "root", children:[1,2]},
  {id: 2, children:[5]},
  {id: 3, children:[]},
  {id: 5, children:[]},
  {id: 6, children:[]}, 
]
let tree = (arr, id = "root", tempOb = {})=>{
  debugger;
  let branches = arr.reduce((acc, x)=> acc = x.id===id?x:acc).children;
  if(branches.length===0) return;
  branches.forEach(element => {
    tempOb[element] = tree(arr, element)||{};
  });  
  return tempOb
}
console.log(tree(treeNodesChild));