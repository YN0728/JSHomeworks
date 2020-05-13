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

  s/// with loops
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
  {id: 5, children:[]},
  {id: 6, children:[]}, 
]
let konch = (arr, id = "root", tempOb = {})=>{
  let branches = arr.filter(item=>item.id===id);
  if(branches.length===0) return;
  let a = branches[0].children
  a.forEach(element => {
    tempOb[element] = konch(arr, element, tempOb[element.children])||{};
  });
  return tempOb
}
console.log(konch(treeNodesChild));
