
// // function singSong(){
// //     console.log("Oh")
// //     console.log("San")
// //     console.log("am")
// // }
// // singSong()
// // singSong()
// // singSong()

// function sing() {
//     console.log('Do')
//     console.log('Re')
//     console.log('me')
// }

// function greet(person) {
//     console.log(`Firstname is :${person}`);
// }

// function celeblist(firstname, lastname) {
//     console.log(`Hello ${lastname} ${firstname[0]}`)
// }

// function repeat(msg, count) {
//     let res = '';
//     for (let i = 0; i < count; i++) {
//         // res=res+msg;
//         res += msg;
//     }
//     console.log(res);
// }

// //return keyword

// function add1(num1, num2) {
//     //check if the num1 and num2 are type of int
//     if (typeof num1 !== 'number' || typeof num2 !== 'number') {
//         return false;
//     }
//     return num1 + num2;
// }

// function returnDay(num) {
//     const days = [null, 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
//     if (num < 1 || num > 7) {
//         return null;
//     } else {
//         return days[num];
//     }
// }



// //Scope
// //Gloabal variable 
// let totaleggs=0;
// function collectEggs() {
//      totaleggs = 6;
//     //   console.log(totaleggs); this will print the output as it is inside the function
// }

// collectEggs();//we have called the function so that it will run and the totaleggs will get intialized
//             // despite calling it ,still it wont give the outpput


// console.log(totaleggs);// this will give undefined that means we are trying to access the totaleggs
// // variable that is defined inside the function and its scope is inside the function only



// //Block level Scope

// let radius=8;
// if(radius>0){
//     const pi=3.14159;
//     let msg='hi';
// }
// console.log(radius);//op-8
// console.log(pi);//op-Not Defined
// console.log(msg);//op-Not Defined

// //Lexical Scope
// function bankRobbery(){//Grand-Parent

//     const heroes=['Spider-Man','Iron-Man','Captian-America','Loki','Dr Strange'];
//    // console.log(msg);// this will give error as parent is accessing the variable from child 
//         function cryForHelp(){//Parent
//             let msg="Dhoni Win IPL"
//             function inner(){//Child
//                 console.log(msg);
//                 for(let hero of heroes){
//                     console.log(`PLEASE HELP US ${hero.toUpperCase()}`);
//                 }
//             }
//             inner(); 
//         }
//         cryForHelp();
// }

// //Higher Order Function
// // function callTwice(func){
// //     func();
// //     func();
// // }
// // function callTentime(f){
// //     const roll=Math.floor(Math.random()*6)+1
// //     console.log(roll);
// // }

// //returninf a function
// function makeMystry(){
//     const rand= Math.random();
//     if(rand > 0.5){
//         return function(){
//             console.log("HEY HOW ARE YOU")
//         }
//     }else{
//         return function(){
//         alert("Not Welcome")
//     }
// }
// }

//foreach 
// const nums=[1,2,3,4,5,8,10,24,67,2,46,89,100];
// function print(element){
//     console.log(element);
// }
// nums.forEach(print);

// const movies=[{
//                 title:'Iron-Man',
//                 score:98    
//             },
//             {
//                 title:'ShawShank Redemption',
//                 score:99
//             },
//             {
//                 title:'GodFather',
//                 score:89
//             },
//             {
//                 title:'Platform',
//                 score:77
//             }
// ];

// movies.forEach(function (movies){
//     console.log(`${movies.title} - ${movies.score}/100`);
// })

// const greet=(name)=>{
   
//     return `Hey ${name}`
//  }

//  //setTimeout and setInterval

// setTimeout(()=>{
//     console.log("Hello")
// },2000)

// //setinterval
// const id = setInterval(()=>{
//     console.log(Math.random());
// },3000)
// //const id is saving the the setinterval later we can use clearInterval(id) to clear /stop setInterval



// //filter 
// function validUserNames(usernames) {
//     // your code here
//      const filterarr=usernames.filter(function(name){
//          return name.length<10;
//      });
//       return filterarr;
//   }
  
//   function validUserNames(arr){
//       return arr.filter(name=>name.length<10);
//   }



//  //some and every function
//  function allEvens(arr){
//     return arr.every(function(num){
//         return num % 2===0;
//     });
//  } 

const user={
    firstname:'Bravo',
    email:'Bravo12@gmail.com',
    lastname:'khochikar'



}

 function fullname({firstname,lastname=asdas}){
    //    const {firstname,lastname}=user
       return `${firstname} ${lastname}`
 }