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
