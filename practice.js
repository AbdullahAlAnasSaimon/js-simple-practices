// hour to minute to seconds
/* function hourToMinutes(hour){
  let minute = hour * 60;
  let seconds = minute * 60;
  return console.log(hour + " Hour = ", minute + " Minutes", seconds + " Seconds");
}

hourToMinutes(24); 
*/


// leap year 
/* function leapYear(year){
  for(let i = 0; i < year.length; i++){
    let years = year[i];
    if((years % 4 ==0) && (years % 100 != 0) || (years % 400 == 0)){
      console.log(years, "the year is leap year");
    }else{
      console.log(years, "the year is not leap year");
    }
  }
  return year;
}
 let leapYearArray = [2023, 2024, 2025, 2028, 2030, 2000, 1900, 2100];
 console.log(leapYear(leapYearArray)); */

// total of oddSum and evenSum from an array
/* function findOddSum(oddSum){
let sumOdd = 0;
let sumEven = 0;
  for(let i = 0; i < oddSum.length; i++){
    if(oddSum[i] % 2 == 1){
      console.log(oddSum[i], " is odd");
      sumOdd += oddSum[i];
      console.log("total of Odd : " ,sumOdd);
    }else{
      console.log(oddSum[i], " is even");
      sumEven += oddSum[i];
      console.log("total of Even : " ,sumEven);
    }
  }
  return console.log("total of Odd : " , sumOdd, "total of Even : " , sumEven)
}

let numberArray = [1, 4, 3, 6, 8, 9, 11, 21, 24, 28, 15, 29, 12, 28, 13];
console.log(findOddSum(numberArray)); */


// feet to inch 
/* function feetToIn(feet){
  let inch = feet * 12;
  console.log(feet, " feet = " , inch, " inch");
}

feetToIn(15); */


// mile to kilometer
/* function mileToKm (mile){
  let km = mile * 1.609;
  console.log("The km is: ", km);
}

mileToKm(10); */


// sum of number array 
/* function totalOfArray(numArray){
  let sumOfArray = 0;
  for(let i = 0; i < numArray.length; i++){
    sumOfArray += numArray[i];
  }
  return sumOfArray;
}

let arrayHolder = [2, 21, 4, 7, 12, 10, 23, 43, 32, 17, 33, 10];
console.log("Total of Number Array: ", totalOfArray(arrayHolder)); */



// find factorial from an array 
/* function findFactorial(setFactorial){
  let factorial = 0;
  for(let i = 0; i < setFactorial.length; i++){
    factorial = setFactorial[i];
    let totalF = 1;
    for(let a = 1; a <= factorial; a++){
      totalF *= a;
    };
    console.log(factorial, totalF);
  }
  return "factorial has been finded!"
}

let factorialArray = [3, 5, 6, 10, 15, 18, 21, 24, 27, 30];
console.log(findFactorial(factorialArray)); */