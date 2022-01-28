// Loops .....
// to repeat the block of code...

// Syntax of while loop...

// while(){
//     // Our code
// }

// Example... 01
// let i = 0;
// while(i<=10){
//     console.log(i);
//     i++;
// }


// Example....02

// let i = 0;
// while(i<=10){
//      console.log(i +"  This is my code" );
//     i++;
// }    

// let a = 0;
// while(a <= 20){
//     document.write("Hello Zubair" + "<br>" + a + "<br>");
//     a++;
// }


// Do While Loop....

// Example  01
// let i = 1;
// do{
//     console.log(i);
//     i++
// }while(i<10);


// Table of Two using While loop....
// let i = 0;

// while(i<=10){
//     document.write("2"+ "*" + i + "=" + 2*i + "<br>");
//     i++
// }

// Table of 8 using do while loop

// let i = 1;
// do{
//     document.write("2" + "*" + i + "=" + 2*i + "<br>"   );
//     i++;
// }while(i<=1000);


// for loop .....
 
// syntax of for loop.....

// for(begin; condition; step){
//     // loop body
// }

// Example  01..
// for (let i = 0; i<3; i++){
//     console.log(i + " Thsi is the first code of for loop")
// }



//  Switch Statement.....
// let a = 0;
// switch(a){
//     case 1:
//         console.log("Today is  Monday");
//         break;
//     case 2:
//         console.log("Today is Tuesday");
//         break;
//     default:
//         console.log("This is Error");        
// }


// Function.....

// function fName(a, b){
    
//     return a+b;

// }
// let add = fName(10,5);
// console.log(add);


///....Function Expression....///

// let fun = function(a,b){
//     return a + b;
// }
// let add = fun(10,20);
// console.log(add);



















// Function Expression,,

// let fn = function(numb1, numb2){
    
//     return sum= numb1 + numb2;
// }
//  let totalSum = fn(10,20);
// console.log(fn);



// Callback Function....




// Arrow Function......


// const sum = () => {
//     let a =10, b = 20;
//     return ` The sum of two Numbers is ${a+b}`
// }
// console.log(sum());

// let sum = (a, b) => a+b;
// console.log(sum(10,20));

// modern way of Arrow function.....

// const sum = () =>  ` here the Sum of two numbers is ${(a=5)+(b=6)}` 
// console.log(sum());




// Debugging ...
// Defination of Debugging:  Debugging is the process to finding and fixing error in the script..



// Object...
// JavaScript object is a non-primitive data-type that allows you to store multiple collections of data.

// let myData = {
//     name : "Zubair",
//     age : 19,
//     class : "JavaScript",
//     section : "Taqpa"
    
// };
// delete myData.section;
// alert(myData.name);
// alert(myData.age);
// alert(myData.section);
// alert(myData.class);


// Object....
  //   JavaScript Object is a non-primitive data type that allows to store multiple collection of data..



//   Example

// let obj = {
//     firstName : "Zubair", 
//     lastName : "Akhtar",
//     age : 19,
//     country : "Pakistan",
// };
// console.log(obj.firstName);
// console.log(obj.lastName);
// console.log(obj.age);
// console.log(obj.country);

// We can store an Arry inside of the object......
// Example
// let obj ={
//     name : "Zubair",
//     myData : ["Zubair", "Akhtar", 13],
// };
// console.log(obj.myData[1]);
// console.log(obj.myData[2]);
// console.log(obj.myData[0]);
// console.log(obj.myData.length);
    
//  Also We can store a function inside of the object.....
//  Example...

// let obj = {
//     myFunction : function() {
//         return  10 + 20;
//     }
    
// };
// console.log(obj.myFunc    tion());





// For in Loop ...

// let obj = {
//   name : "Zubair",
//   age : 19,
//   class : "Js"
// };

// for(let a in obj){
//   document.write(a + ":");
//   document.write(obj[a] + "<br>");
// }






// let obj = {
//   name : "Zubair",
//   age : 19,
//   class : "JavaScript",
//   fn : function(){
    
//     if(this.age > 18){
//       document.write(this.name + " " + "You Are Allowed to Access");
//     }else if(this.age < 18){
//       document.write(this.name + " " + "You are not Allowed to access");
//     }
//   }

// };
// let clone = {}
// for (let key in obj) {
//   clone[key] = obj[key];
// }
// clone.age = 12;


// obj.fn();
// // obj[fn()];
// clone.fn();
// // clone[fn()];  



// let obj = {
//   name : "Zubair",
//   age : 19,
//   class : "JavaScript",
  
//   fn : function(){
    
//     if(this.age > 18){
//       document.write(this.name + " " + "You Are Allowed to Access");
//     }else if(this.age < 18){
//       document.write(this.name + " " + "You are not Allowed to access");
//     }
//   }

// };
// obj.fn();
// let newObj = obj; 
// newObj.name = "Inam";
// document.write(obj.name)


//   let anotherObj ={
//     name : "Khurram",
//     age : 15,
//     class : "typescript",
//     section:"Taqpa"
//   };

//   Object.assign(obj, anotherObj);

// // dot 
//   document.write(obj.name + "<br>");
  // document.write(obj.section + "<br>");


  // Square Notation..
  // document.write(obj["age"] + "<br>")

  // obj.fn();


//   // program for a simple calculator

// // take the operator input
// const operator = prompt('Enter operator ( +, -, * or / ): ');

// // take the operand input
// const number1 = parseFloat(prompt('Enter first number: '));
// const number2 = parseFloat(prompt('Enter second number: '));

// let result;


// if (operator == '+') {
//     result = number1 + number2;
// }
// else if (operator == '-') {
//     result = number1 - number2;
// }
// else if (operator == '*') {
//     result = number1 * number2;
// }
// else if(operator == '/'){
//     result = number1 / number2;
// }else{
//   result = "You Enter Invalid Number";
// }


// // display the result
// document.write(`${number1} ${operator} ${number2} = ${result}`);





// Convert Hours into Minutes....

// let a = prompt("Enter any Hour You want to convert into minutes");
// fn = function(){
//   return a * 60; 
// }

// let b = prompt("Enter any minutes you want to convet into seconds");
// fn_ = function(){
//   return  b * 60;
// }

// document.write("Convert hours into minutes" + "<br>" + fn() + "<br>" + "convert minutes into seconds " + "<br>" + fn_() );


//  Write a Program that ask user or a number n and print the sum of the numbes 1 to n 

// let a = parseFloat(prompt("Enter a number "));
// let sum = 0;
// for(let i = 1; i <= a; i++){
//   sum = a + i;
//   // document.write(`${a} + ${i} = ${sum}  <br>`);
//   document.write(sum + i);

// }

// // document.write(`${a} +  ${sum}  =  ${a}+${sum} `);


// fun = function(){
//   let input = prompt("Enter a number");
//   let i = prompt("Enter second number")
  
  
//   let result = input + i;
//  return result;
  
// }
// fun();





// function fName(para1, para2){
//   alert("Please Get Permision");
//   let age = prompt("Enter Your Age ");
//   if(age >=18 ){
//     document.write("You are Allowed to Drink " + "<br>");
//   }else{
//     document.write("You Are Not Allowed to Drink"+ "<br>");
//   }
// }


// function newFunction(){
// document.write("Thank You")
// }

// newFunction(fName());







// let obj = {

//   name : "Zubair",
//   fun :function fName(){
//   let age = prompt("Enter Your Age ");
//   if(age >=18 ){
//     document.write("You are Allowed to Drink " + "<br>");
//   }else{
//     document.write("You Are Not Allowed to Drink"+ "<br>");
//   }
// }

//   }




// ifee Function .....


// (function(){
//   alert("Please Get Permision");
//     let age = prompt("Enter Your Age ");
//     if(age >=18 ){
//       document.write("You are Allowed to Drink " + "<br>");
//     }else{
//       document.write("You Are Not Allowed to Drink"+ "<br>");
//     }
//   }
// )
// ();






// Closure....
//  Global Scope and Local Scope....

// let fun = function(){
//   let a = "Zubair";
//   let fun2 = function(){
//     alert(a);
    
//   }
//   fun2();
// }
// fun();



// Default parameters..

// function fun(a, b=10){
//    let sum = a + b;
// console.log(sum)
// }
// fun(5);




// Rest Parameters...

// function fun1(a,b, ...theArg){
  
//  let sum = a+b;
//  console.log(sum);
//  console.log(theArg);
//  console.log(theArg.length);
// }
// fun1(2,3,4,5);


// Nested Loop....


// for(let i = 0; i<=2; i++){
//   console.log("Outer loop");
//   for(let a =0; a<=2; a++){
//     console.log("Inner Loop")
//   }
// }



// let i = 0;
// while(i<2){
//   i++;
//   console.log("Outer loop");
 
//   let j = 0;
//   while(j<2){
//     j++;
//     console.log("inner Loop");
//   }
// }


// let arr = [
//       [1,2],[3,4],[5,6]
// ];
// for(let i=0; i<arr.length; i++){
 
//   for(let j=0; j<arr[i].length; j++){
//     console.log(arr[i][j]);
// }
// }




// let n = 5;

// let string = "";

// for(let i = 0; i < n; i++) { 
//   for(let j = 0; j < n; j++) {
//     if(i === 0 || i === n - 1) {
//       string += "*";
//     }
//     else {
//       if(j === 0 || j === n - 1) {
//         string += "*";
//       }
//       else {
//         string += " ";
//       }
//     }
//   }
  
//   string += "\n";
// }

// console.log(string);




// let n = 5;
// let stars;
// for(let i =0; i<n; i++){
//   for(let j = 0; j<n; j++){
//     if(i ==0||i == n-1){
//       stars += "*";
//     }else{
//       stars += ""
//     }
//     console.log(stars);

//   }
// }


// for(let i = 1; i<=5; i++){
//   for(j = 1; j<=i; j++){
//     document.write("*" + " ")
//   }



//   document.write("<br> ")
// }
// document.write("<hr>")


// for(let a = 1; a<=7; a++){
//   for(b = 1; b<=6-a; b++){
//     document.write("*" + " ")
// }

// document.write("<hr>")




// for(let c = 1; c<=10; c++){
//   for(d = 1; d<= 10-c; d++){
//     document.write("*" + " ")
//   }
//   document.write("<br>")
// }











// Creating Object with Constructor...

// function vehical(name,model,engine){
//   this.name = name;
//   this.model= model;
//   this.engine = engine
// }

// let car = new vehical('vits', 'toyota', '1000cc');
// console.log(car.name  + "  " + car.model + "  " + car.engine); 

// let car1 = new vehical('saloon', 'corola', '1500cc')
// console.log(car1.name);
// console.log(car1.model);
// console.log(car1.engine);


//  2).
// Crating Object with Object.create() method....

// let person = {
//  studing : true,
//   detail : function(){
// console.log(`My name is ${this.name} and i am  human  ${this.studing} `)
//   }

 
// }
// let  me = Object.create(person);
// me.name = "Zubair";

// me.detail();




// different ways to write 
// Object Literal 

// let fees = {};

// fees['Ali'] = 200;
// // Object literal declear and initization
// let fees = {
//   ali : 200
// } 


// // Object Constructor
// let fees = new Object();
// fees.Ali = 200;

// // or

// let fees = {};
// fees['Ali'] =200;



//  Factory Function 

// function mobile(){
//   return{
//     model: '105'
//   }
// }
// var nokia = mobile();
// var samsung = mobile(); 

// console.log(nokia);
// console.log(samsung);




// Constructor Function 

// function Mobile(){
//   this.Model = 'Galaxy'
// }
// let samsung =  new Mobile();
// console.log(samsung);