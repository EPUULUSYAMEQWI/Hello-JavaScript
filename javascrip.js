// let num1=1
// let num2=2
// let num3=num1+num2
// console.log(num3);



// let age = 18;
// if(age<=8){
//     console.log('You are allowed to vote')
// }

// let fruits=['mango','apple','orange'];
// for(i in fruits);
//      console.log(fruits[1])
    
//1.Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five print
// "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
// for(var i=1; i<=100; i++)
// {
//      if (i%3==0 && i%5==0)
//     {
//     console.log("FIZZBUZZ");
// }
// else if(i%3==0)
// {
//     console.log("FIZZ");
// }
// else if(i%5 ==0)
// {
//     console.log("BUZZ");
// }
// else
// {
// console.log(i);
// }
// }
//2. Write a JavaScript program to sum the multiples of 3 and 5 under 1000.

// var sum = 0;
// for (var x = 0; x < 1000; x++)
// {
//     if (x % 3 == 0 || x % 5 ==0)
//     {
//        sum += x;
//     }
// }
// console.log(sum);

//3.Write a JavaScript for loop that will iterate from 0 to 20. For each iteration, it will
// check if the current number is odd or even, and display a message to the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"

// for (var x = 0; x <=20; x++){
  
//     if(x%2==0)
//         console.log(x + "is even");
//     else {
//         console.log(x + "is odd");}
       
//     }
//4. Write a JavaScript conditional statement to find the largest of five numbers in the
// given array.
// Let num = [-2, 4,-5, 6,0]

// let num = [-2,4,-5,6,0];
// number=num.sort()
// largest=number.pop()
//         console.log(largest)

// 5.Using conditional statements, write a JavaScript program to find the largest of the
// following two numbers: 10 & 40
let two=[10,40];
one=two.sort()
maximum=one.pop()
console.log(maximum)





//6.Write a JavaScript program to find leap years from 2000 to 2022
// function leap_year_range(st_year, end_year) {
//         var year_range = [];
//         for (var i = st_year; i <= end_year; i++)
//         {
//              year_range.push(i);
//         }
//         var new_array = [];
    
//     year_range.forEach(
//     function(year)
//     { 
//        if (test_LeapYear(year)) 
//        new_array.push(year);
//     });
    
//     return new_array;
//      }
    
//     function test_LeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
//                 return year;
//         } else {
//                 return false;
//         }
//     }
    
//     console.log(leap_year_range(2000,2022));
    
    