// console.log("fuck off");
// console.log("you're shit");

// window.alert("why are you looking here ?");
// window.alert("mind your own business fucker");

// document.getElementById("shit").textContent = `It won't change the fact that you're still a piece of shit`;

// document.getElementById("crap").textContent = `I can't believe world is such a crapy place to be in !!`

// let age =20;
// let world = 'shitty place';

// console.log(`our world is a ${world} `);
// console.log(`now i'm fucking ${age} years old.`);


//4. accept user input
// let username;
// username = window.prompt("what is your username?");
// console.log(username);

// let username;
// document.getElementById("mySubmit").onclick= function(){
//   username= document.getElementById("myText").value;
//   document.getElementById("myH1").textContent = `hey ${username}`
// }

// let username;
// document.getElementById("submit").onclick = function(){
//   username = document.getElementById("text").value;
//   document.getElementById("header").textContent = "this world is rotton"
// }


//5. Type conversion
  // age = window.prompt("what is your age ?");
  // age= Number(age);
  // age+=1;
  // console.log(age);

  // x= "Tokyo";
  // y= "Kyoto";
  // z= "Osaka";

  // x= Number(x);
  // y = String(y);
  // z= Boolean(z);

  // console.log(x,typeof x);
  // console.log(y , typeof y);
  // console.log(z, typeof z);

//6. Constants  
  // const PI=3.14159;
  // let radius;
  // document.getElementById("submit").onclick = function(){
  //   radius = document.getElementById("radius").value;
  //   radius = Number(radius);
  //   circumference = PI * radius * 2;
  //   document.getElementById("answer").textContent = circumference + " cm";
  // }


//7. Counter Program 

  // const countLabel  = document.getElementById("countLabel");
  // const decreaseBtn = document.getElementById("decreaseBtn");
  // const resetBtn = document.getElementById("resetBtn");
  // const increaseBtn =document.getElementById("increaseBtn");

  // let count = 0;

  // increaseBtn.onclick = function(){
  //   count ++;
  //   countLabel.textContent = count;
  // }
  // resetBtn.onclick = function(){
  //   count =0;
  //   countLabel.textContent = count;
  // }
  // decreaseBtn.onclick = function(){
  //   count --;
  //   countLabel.textContent = count;
  // }



// 8. Math objects

  // let x = 10.23;
  // let z;

  // z= Math.round(x);
  // z= Math.floor(x);
  // z= Math.ceil(x);
  // z= Math.trunc(x);
  
  // console.log(z);


  // a=10;
  // b=2;
  // d=100
  // let c;

  // c= Math.pow(a,b);
  // c= Math.sqrt(d);
  // c = Math.log(a);
  // c= Math.sin(a);
  // c = Math.con(a);
  // c = Math.tan(a);

  // console.log(c);


  // let p = -10;
  // let q = 10;
  // let r = 0;
  // let t;

  // t = Math.abs(p);
  // t = Math.sign(p); 

  // console.log(t);

  // let max = Math.max(p,q,r);
  // console.log(max);

  // let min = Math.min(p,q,r);
  // console.log(min);


// 9. Random Number Generator

  // const min = 1;
  // const max = 6;
  // const Roll = document.getElementById("dice");
  // const mylabel = document.getElementById("mylabel");
  // let ranNum;


  // dice.onclick = function(){
  //   ranNum = Math.floor(Math.random()*max)+min
  //   mylabel.textContent = ranNum;
  // }
  

//10 - if statements

  //  let age = 18;
  //  let hasLicence = false;

  //  if (age >= 16){
  //     console.log("your're eligible to drive");

  //     if (hasLicence){
  //       console.log("you can drive the car");
  //     } else{
  //       console.log("you don't have licence yet");
  //     }
  //  }else{
  //   console.log("you're not eligible to drive");
  //  }

  
// const mytext = document.getElementById("mytext");
// const Btn = document.getElementById("Btn");
// const reply = document.getElementById("reply");
// let age ;

// Btn.onclick = function(){

//   age = mytext.value ;
//   age = Number(age);

//   if (age >= 100){
//     reply.textContent = "too old to enter";
//   }else if (age === 0 ){
//     reply.textContent = ("you were just born");
//   }else if (age <0 ){
//     reply.textContent  ="your age can't be less than 0 ";
//   }else if (age < 18){
//     reply.textContent = ("you must be 18+");
//   } else {
//     reply.textContent= ("you can enter ")
//   }
// }


// 14 - String Methods

  // let Name = " Zeren ";

  // let letter1 = Name.charAt(0);
  // let letter2 = Nane.charAt(1);
  // console.log(letter);
  // console.log(letter2);

  // console.log(Name.indexOf("r"));
  // console.log(Name.indexOf("e"));

  // console.log(Name.lastIndexOf("e"));

  // console.log(Name.length)

  // Name = Name.trim(); // trim white spaces
  // console.log(Name);

  // Name = Name.toUpperCase();
  // console.log(Name);
  // Name = Name.toLowerCase();
  // console.log(Name);

  // Name = Name.repeat(5);
  // console.log(Name);

  // let result = Name.startsWith(" "); //to check wether it start with given string
  // let result2 = Name.includes("");

  // if (result){
  //   console.log("your name can't begin with ' ' ");
  // }else{
  //   console.log(Name);
  // }


  // let phoneNumber = "123-456-7890";

  // phoneNumber = phoneNumber.replaceAll("-", "");
  // console.log(phoneNumber);

  // phoneNumber = phoneNumber.padStart(15,"0"); // pad string , first value -> lenth ,second -> values we wanna put
  // console.log(phoneNumber);
 

//15 - string slicing

  // const fullName = "Blue Prince";

  // let firstName = fullName.slice(0,4);
  // let lastName = fullName.slice (5,11);
  // console.log(firstName);
  // console.log(lastName);

  // let firstchar = fullName.slice(0,1);
  // let lastchar = fullName.slice(-1);
  // console.log(firstchar);
  // console.log(lastchar);

  // let first = fullName.slice(0, fullName.indexOf(" "))
  // console.log(first);

  // let second = fullName.slice(0, fullName.length);
  // console.log(second);

  // let third = fullName.slice(fullName.indexOf(" ")+ 1);
  // console.log(third);

  // const email = "blahblah@gmail.com";

  // let username = email.slice(0, email.indexOf("@"));
  // let extension = email.slice(email.indexOf("@"));
  // console.log(username);
  // console.log(extension);


// 16- method chaining

  // let userName = window.prompt("enter your username: ");

  // userName = userName.trim().slice(0).charAt(0).toUpperCase() + userName.trim().slice(1).toLowerCase();

  // console.log(userName);


// 18 - Strict equality

  // = assignment operator
  // == comparision operator (compare if values are equal)
  // === strict equality operator (compare if values & datatype are equal)
  // != inequality operator
  // !== strict inequality operator


// 19- while loops 

  // let username = "";

  // while (username === ""){
  //   username= window.prompt("enter your name:");
  // }
  // console.log(`hello ${username}`);


  //  let logedIn = false;
  //  let username ;
  //  let password ;

  //  while (!logedIn){
  //   username = window.prompt ("enter your username");
  //   password = window.prompt("enter your password");

  //   if (username === "myUsername" && password === "myPassword"){
  //     logedIn = true;
  //     console.log(`you've loged in `);
  //   }else {
  //     console.log("invalid credentials ");
  //   }
  //  }


// 22 - functions

  // function HappyBirthday(name,age){
  //   console.log(`Happy Birthday to you !`);
  //   console.log(`Happy Birthday to you !`);
  //   console.log(`Happy Birthday Dear ${name} !`);
  //   console.log(`Now you're ${age} year old`);
  // }

  // HappyBirthday("Ana", 250);


  // function Add (a,b){
  //   return a+b ;
  // }
  // console.log(Add(3,5));

  //   function Substract (a,b){
  //   return a-b ;
  // }
  // console.log(Substract(3,5));

  // function isEven(number){
  //   let answer = (number % 2 === 0 ) ? true : false;
  //   // return answer;
  //   console.log(answer);
  // }
  // isEven(10);

  // function isValidEmail(email){
  //   let result = (email.includes("@")) ? true : false;
  //   console.log(result);
  // }
  // isValidEmail("blahblah@gmail.com");


// 23 - variable scope = where a variable is recognized and accessible (local vs global)

  // x = 3;

  // function function1(){
  //   x= 1;
  //   console.log(x); // local variable will get accessed first instead of global
  // }
  // function function2(){
  //   x =2 ;
  //   console.log(x);
  // }

  // function1();



// 24-  temperature conversion

  // const textbox= document.getElementById("textbox");
  // const toFahrenheit = document.getElementById("toFahrenheit") ;
  // const toCelsius = document.getElementById("toCelsius");
  // const answer = document.getElementById("answer");
  // // const submitBtn = document.getElementById("submitBtn");
  // let temp;

  // function convert(){
  

  //   if(toFahrenheit.checked){
  //     temp = Number(textbox.value);
  //     temp = temp*9/5 + 32;
  //     answer.textContent = temp + "°F" ;

  //   } else if (toCelsius.checked){
  //     temp = Number(textbox.value);
  //     temp = (temp-32)*5/9;
  //     answer.textContent = temp.toFixed(1) + "°C";
  //   }else{
  //     answer.textContent = "select unit";
  //   }
  // }
  
  

//25- Arrays

  // let fruits = ["apple", "orange", "banana","coconut"];

  // console.log(fruits[0]);
  // console.log(fruits[1]);

  // for (let i = 0; i<fruits.length; i++){
  //   console.log(fruits[i]);
  // }

  // for (let fruit of fruits){
  //   console.log(fruit);
  // } //shortcut version

  //fruits.sort();
  //fruits.sort().reverse();


// 26- spread operator

  // spread operator = ... allows an iteratble such as an
  //                   array or string to be expanded
  //                   into seprate elements (unpack the elements)
  

  // let numbers = [1,2,3,4,5,6];
  // let max = Math.max(...numbers);
  // let min = Math.min(...numbers); 

  // console.log(min);
  // console.log(max);
  // console.log(numbers)

  // let username = "Bro Code";
  // let letters = [...username];
  // console.log(letters);

  // let letters2 = [...username].join("-");
  // console.log(letters2);

  // let fruits = ["apple", "orange", "banana"];
  // let vegetables = ["carrots","celery", "potatoes"]

  // let newFruits = [...fruits, ...vegetables, "eggs", "milk"]; //using spread operatro to combine two arrays

  // console.log(newFruits);


// 27 - rest parameters = (...rest) allow a function work 
//                        with a variable number of arguments
//                        by bundling them into an array

//                        spread = expands an array into seperate elements 
//                        rest = bundles sepearate elements into an array


  // function openFridge(...food){
  //   console.log(food);
  // }
  // function getfood(...foods){
  //   return foods;
  // }

  // const food1 = "pizza";
  // const food2 = "hamburger";
  // const food3 = "sushi";
  // const food4 = "noodles";
  // const food5 = "cake";

  // openFridge(food1, food2,food3,food4 ,food5);

  // const foods = getfood(food1, food2, food3,food4,food5);
  // console.log(foods);


  // function sum(...numbers){

  //   let result = 0;
  //   for (let number of numbers){
  //     result += number;
  //   }
  //   return result;
  // }
  // const total = sum(1,2,5);

  // console.log(`your total is $${total}`)


  // function getAverage(...numbers){

  //   let result = 0;
  //   for (let number of numbers){
  //     result += number;
  //   }
  //   return result/numbers.length;
  // }

  // const total = getAverage(10,10,10,10,10)
  // console.log(total);


  // function combineStrings(...strings){
  //   return strings.join(" ");
  // }
  // const prince =combineStrings("dark","blue", "prince", "II");
  // console.log(prince);



// 30 - Callbacks

  // callback = a function that is passed as an argument to another function
  
  //          used to handle asynchronous operations:
  //          1. Reading a file
  //          2. Network requests
  //          3. Interacting with databases
  
  //         " Hey , when you're done ,call this next. "


  // function hello(callback){
  //   console.log("hello");
  //   callback();
  // }
  // function leave(){
  //   console.log("leave");
  // }

  // hello(leave);


  // function sum (callback,x , y){
  //   let result = x + y;
  //   callback (result);
  // }
  // function displayResult(result){
  //   console.log(result);
  // }
  // sum(displayResult, 10 ,20);

  // function displayHeader(result){
  //   document.getElementById("my").textContent = result;
  // }
  // sum(displayHeader,10,10);



// 31 - forEach()

  // forEach() = method used to iterate over the elements
  //             of an array and apply a specified function ( callback)
  //            to each element 
  //            array.forEach(callback)
  //            element, index, array are provided


  // let numbers = [11,22,33,44,55];

  // numbers.forEach(double);
  // numbers.forEach(triple);
  // numbers.forEach(display);

  // function double(element ,index,array){
  //   array[index] = element*2;
  // }
  // function triple(element ,index,array){
  //   array[index] = element*3;
  // }

  // function display(element){
  //   console.log(element);
  // }


  // let fruits = ["orange","apple", "banana","kiwi","grape"];

  
  // fruits.forEach(UpperCase);
  // fruits.forEach(firstUpCase);
  // fruits.forEach(display);
  

  // function UpperCase(element,index,array){
  //   array[index] = element.toUpperCase();
  // }

  // function firstUpCase(element,index,array){
  //   array[index] = element.charAt(0).toUpperCase()+ element.slice(1);
  // }
  // function display(element){
  //   console.log(element);
  // }


// 32- map()

//  map() = accepts a callback and applies that function to
//          each element of an array, then return a new array

  // const number= [1,2,3,4,5];

  // const squares = number.map(square);

  // console.log(squares);

  // function square (element){
  //   return Math.pow(element,2);
  // }

  // const cubes = number.map(cube);
  // console.log(cubes);

  // function cube(element){
  //   return Math.pow(element,3);
  // }


  // const students = ["spongebob","patrick", "squidward", "sandy"];

  // const StudentsUppercase = students.map(uppercase);
  // console.log(StudentsUppercase);

  // function uppercase(element){
  //   return element.toUpperCase();
  // }

  // const dates = ["2024-5-23","2004-7-04","2015-9-12","2023-10-15"];

  // const formatedDates = dates.map(formatDates);
  // console.log(formatedDates);

  // function formatDates (element){
  //   const parts = element.split("-");
  //   return `${parts[1]}/${parts[2]}/${parts[0]}`;
  // }


// 33- filter()

// filter() = creates a new array by filtering out elements

  // let numbers = [1,2,3,4,5,6,7];

  // let evenNumbers = numbers.filter(isEven);
  // console.log(evenNumbers);

  // function isEven(element){
  //   return element % 2 === 0;
  // }

  // let oddNumbers = numbers.filter(isOdd);
  // console.log(oddNumbers);

  // function isOdd(element){
  //   return element % 2 !== 0;
  // }

  
  // const ages = [16,17,18,14,19,20,25];

  // const minors = ages.filter(isNotAdult);
  // console.log(minors);

  // function isNotAdult (element){
  //   return element< 18;
  // }

  // const adults= ages.filter(isAdult);
  // console.log(adults);

  // function isAdult(element){
  //   return element >= 18;
  // }


  // const words = ["apple","orange","banana","kiwi","pomegranate","watermelon","pineaple"];

  // const longWords = words.filter(getLongwords);
  // console.log(longWords);

  // function getLongwords (element){
  //   return element.length > 6;
  // }

  // const shortWords = words.filter(getShortwords);
  // console.log(shortWords);

  // function getShortwords(element){
  //   return element.length > 6;
  // }



// 34- reduce()

// reduce() = reduce the elements of an array to a single value

  // const prices = [5,30,10,25,15,20];

  // const total = prices.reduce(sum);
  // console.log(`$${total.toFixed(2)}`);  //toFixed() method is useful

  // function sum(accumulator, element){
  //   return accumulator + element;
  // }


  const grades =[75,50,90,80,65,95];

  const maximum = grades.reduce(getMax);
  console.log(maximum);

  function getMax(accumulator,element){
    return Math.max(accumulator,element);
  }

  const minimum = grades.reduce(getMin);
  console.log(minimum);
  
  function getMin (previous,element){
    return Math.min(previous,element);
  }
