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





