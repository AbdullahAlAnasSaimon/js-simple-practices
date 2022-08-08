// find largest number from three number;

/* var a = 150;
var b = 20;
var c = 10;
console.log(a, b, c);
if(a > b && a > c){
  console.log("The largest number is: " + a);
}else if(b > a && b > a){
  console.log("The largest number is: " + b);
}else if(c > a && c > b){
  console.log("The largest number is: " + c);
}else{
  console.log("you have enter wrong input!");
} */


// find odd or even number

/* var firstInput = 11;
if(firstInput % 2 == 0){
  console.log("The number is even");
}else if(firstInput % 2 == 1){
  console.log("The number is odd");
}else{
  console.log("wrong input");
} */


// fizz-buzz

/* var number = 45;
if(number % 3 == 0 && number % 5 == 0){
  console.log("FizzBuzz");
}else if(number % 3 == 0){
  console.log("Fizz");
}else if(number % 5 == 0){
  console.log("Buzz");
}else{
  console.log("wrong input");
} */


// print all even & odd number.

/* for(i = 0; i <= 10; i += 2){
  console.log(i);
}
for(i = 1; i <= 10; i += 2){
  console.log(i);
} */


// multiplication table

/* for(var x = 0; x <= 10; x++){
  var table = 5 * x;
  console.log("5 * " + x + " " + "=" + " " + table);
} */


// total of aray elements 

/* var sumArray = 0;
var array = [10, 19, 11, 23, 17, 4, 21, 29, 40, 100, 49, 33];
for(i = 0; i < array.length; i++){
  sumArray = sumArray + array[i];
  // console.log(sumArray);
}
console.log("total of array elements is: " + " " + sumArray); */


// driving licence
/* var age = 10;
if(age > 18 && age < 51){
  console.log("You are eligible for driving licence");
}
else if(age < 18){
  console.log("You are too young!");
}
else{
  console.log("You are Too old!");
} */


// skip bigger than 200
/* var booksHolder = 0;
var booksArray = [150, 100, 200, 220, 180, 100, 80, 90, 250];
for(var i = 0; i < booksArray.length; i++){
  booksHolder = booksArray[i];
  if(booksHolder >= 200){
    continue;
  }
  console.log(booksHolder);
} */