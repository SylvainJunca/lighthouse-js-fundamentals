function range(start, end, step) {
  var result = [];
  if (start === undefined || end === undefined || step === undefined || start > end || step < 0){
    return(result);
  }
  while (start <= end) {
    result.push(start);
    start = start + step;
  }
  return(result);
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));