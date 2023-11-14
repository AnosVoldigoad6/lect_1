// function sum() {
//     return 2+3;
// }
// console.log(sum());

// let sum2 =() =>{
//     return 4+4;
// }
//  console.log(sum2());

//  let sum3 =() =>{
//     return -2+4;
// }
//  console.log(sum3());




//  (
//     function () {
//         console.log('Hello World');
//     }
//  ) ();
//  function sumNums(num){
//     let a

//     for(let i=1; i<=num; i++){
//         a = i
//     }
//     return a
//  }
//  console.log(sumNums(10));







// #Task 1

function sumTwoNumber(num1, num2){

    return num1 + num2
}
console.log(sumTwoNumber(2,3));
console.log(sumTwoNumber(4,4));
console.log(sumTwoNumber(-2,4));


// #Task 2

function checkNumber (b){

    if(b>0)
    {
        return 'positive';
    }
    else if(b<0)
    {
        return 'negative';
    }
    else if(b==0)
    {
        return 'zero';
    }
    
}
    console.log(checkNumber(5));
    console.log(checkNumber(-8));
    console.log(checkNumber(0));


// #Task 3

function generateMultiplicationTable(sum){
    for(let i=1; i<=10; i++)
    {
         console.log(sum*i);
    }

      
}
console.log(generateMultiplicationTable(5))


// #Task 4

function endNine(a){
    if(a%10==9)
    {
        return 'Yes';
    }
     else (a%10!=9)
    {
        return 'No';
    }
    
}
console.log(endNine(149));
console.log(endNine(387));
console.log(endNine(29));




// #Task 5

function century(a){
return Math.ceil(a/100)
}
console.log(century(1701));
console.log(century(1900));
console.log(century(2000));









// #Task 6

function calculateCircleArea(a){
   return Math.ceil(3.14*a*a) 

}
console.log(calculateCircleArea(5));
console.log(calculateCircleArea(8));
console.log(calculateCircleArea(3));




// #Task 7

function sum3Digit(sum){
    
    return  Math.ceil(sum/100+sum/100%10+sum%10) 
     

}
console.log(sum3Digit(123));
console.log(sum3Digit(345));
console.log(sum3Digit(321));


// #Task 8


function sumOfDigits(sum){
    if(sum%2==0)
    {
        return sum+1
    }
    else if(sum%2!=0)
    {
        return sum-2
    }
}
console.log(sumOfDigits(22));
console.log(sumOfDigits(4));
console.log(sumOfDigits(3));



// #Task 9

function lessThan100(a, b){
    if(a+b>100)
    {
        return 'True'
    }
    else if(a+b<100)
    {
        return 'False'
    }
}

console.log(lessThan100(22,15));
console.log(lessThan100(83,34));
console.log(lessThan100(3,77));


// #Task 10

function longestTime(h, m, s){

  let hours = h*3600;
  let minn =  m*60;
    if(hours>minn & hours>s)
    {
        return h;
    }

    else if(minn>hours & minn>s)
    {
        return m;
    }

    else if(s>hours & s>minn)
    {
        return s;
    }

}
console.log(longestTime(1, 59, 3598));
console.log(longestTime(2, 300, 15000));
console.log(longestTime(15, 955, 59400));

