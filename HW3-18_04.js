// 1
let ifOdd = n => {
  if(n > 0) return (n%10)%2===0?false:ifOdd(Math.floor(n/10))
  return true
}
console.log(ifOdd(2135))

// 2
let minPosEl = (a, minm = Infinity) => {
  minm = a[0]>=0?Math.min(a[0], minm):minm;
  if (a.length > 0) {
    a.shift()
    return minPosEl(a,minm)}
  return minm === Infinity?-1:minm;
}
console.log(minPosEl([-9]))

// 3
function fibonacciArray(n) {
  if(n===0) return []
  if (n === 1) return [1]
  else if (n === 2) return [1,1]
  let a = fibonacciArray(n - 1)
  a.push(a[n-2]+a[n-3])
  return a
}
console.log(fibonacciArray(10));

// 4 
let nested = (a, temp = []) =>{
  for(let i =0;i<a.length;i++){
    if(Array.isArray(a[i])) nested(a[i], temp)
    else temp.push(a[i])
  }
  return temp
}
console.log(nested([[[1]],[[]],2]))

// 5
let oneDigit = n => {
  let sum = 0;
  while(n){
    sum+=n%10;
    n = Math.floor(n/10)
  }
  if(sum>9) return oneDigit(sum)
  return sum
}
console.log(oneDigit(29))