// 1
let isPrime = n => {
  if (n === 1 || n === 2) return n === 1 ? "no" : "yes";
  for (let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
    if (!(n % i)) {
      return "no";
    }
  }
  return "yes";
};
console.log(isPrime(2));

// 2
function fibonacci(n) {
  if (n < 2) return n;
  else return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(1));

// 3
function fibonacciAll(n) {
  let a = "0";
  for (let i = 1; i <= n + 1; i++) {
    if (fibonacci(i) < n) a += `, ${fibonacci(i)}`;
    else break;
  }
  return a;
}
console.log(fibonacciAll(6));

// 4
let isDivisible = n => {
  if (n === 0) return "Cannot calculate.";
  let sum = 0;
  let product = 1;
  while (n) {
    sum += n % 10;
    product *= n % 10;
    n = Math.floor(n / 10);
  }
  return !(product % sum)
    ? `Quotient is ${product / sum}`
    : `Remainder is ${product % sum}.`;
};
console.log(isDivisible(422));

// 9
let evenlySpaced = (a, b, num) => {
  let d = (b - a) / (num - 1);
  let arr = [];
  for (let i = a; i <= b; i += d) {
    arr.push(i);
  }
  return arr;
};
console.log(evenlySpaced(1, 5, 1));

// 10
let secondMax = arr => {
  let max = Math.max(...arr);
  arr[arr.indexOf(max)] = -Infinity;
  max = Math.max(...arr);
  return arr.indexOf(max);
};
console.log(secondMax([1, 2, 3, 4, -5, -6, 7]));

// 11
let padArray = (arr, pad, repeat) => {
  if (arr.length < pad) return "Invalid padding amount";
  let start = [];
  let end = [];
  for (let i = 0; i < pad; i++) {
    start.push(arr[i]);
    end.unshift(arr[arr.length - 1 - i]);
  }
  while (repeat > 0) {
    arr = start.concat(arr, end);
    repeat--;
  }
  return arr;
};
console.log(padArray([1, 2, 3, 4], 3, 2));
