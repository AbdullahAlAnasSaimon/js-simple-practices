// area of triangle 

function areaOfTriangle(a, b, c){
  let s = (a+b+c) / 2;
  let triangle = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  return triangle;
}

console.log(areaOfTriangle(50, 45, 87));