// normal loop 1-10
// for(let i=0;i<=10;i++){
//     console.log(i);
// }

// Even Numbs 0-20
// for(let i=0; i<=20;i=i+2){
//     console.log(i)
// }

// Odd numbers
// for(let i=1;i<=20;i+=2){
//     console.log(i)
// }

// count from 100,90,80,70...0
// for(let i=100;i>=0;i-=10){
//     console.log(i)
// }

// const animals=['Cat','Dog','Lion','Goat','Shark','Eagle','Elephant','hippo',
// 'swan','buffalo','Sheep']
// //iterating over arrays
// // for(let i=0;i<animals.length;i++){
// //     console.log(i,animals[i])
// // }

// for(let i=animals.length-1;i>=0;i--){
//     console.log(i,animals[i])
// }

// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]

// for(let i=0;i<people.length;i++){
//     console.log(people[i].toUpperCase())
// }

// Nested For loop
const studs=[
    ['Namita','Kunal','Atik'],
    ['Jack','boutamer','inglewood'],
    ['eza','hanneman','ruth']
]

for(let row of studs){
    for(let stu of row ){
        console.log(stu)
    }
}

// for(let i=0;i<studs.length;i++){
//     const row=studs[i];
//     for(let j=0;j<row.length;j++){
//         console.log(row[j]);
//     }
// 

//While loops
// let count=0;
// while(count<10){
//     count++;
//     console.log(count)
   


// const passcode="Hippo";
// let guess=prompt("Enter the passcode!")
// while(guess !== passcode){
//     guess =prompt("Enter the passcode")

// }
// console.log("You got the passcode")

// let input=prompt("Say something");

// while(true){
//     input=prompt(input);
//     if(input==="stop"){
        
//         break;
//     }
// }
// console.log("You win ");    

//Guessing the number Game

// let maximum=parseInt(prompt("Enter the maximum  number!"));
//     while(!maximum)
//     {
//         maximum=parseInt( prompt("Enter the Valid number!"));
//     }

// const targetnum=Math.floor((Math.random () * maximum )+1)
// console.log(targetnum)


// let guess=prompt("enter a Guess!")

// while(parseInt(guess)!==targetnum){

//     if(guess==='q'){
//         break;
//     }
//     if(guess > targetnum){
//         guess=prompt("to high! entert a new guess")
//     }else{
//          guess=prompt("to low! enter a new guess")
//     }

// // }


// let maximum = parseInt(prompt("Enter the maximum number!"));
// while (!maximum) {
//     maximum = parseInt(prompt("Enter a valid number!"));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;
// console.log(targetNum)

// let guess = parseInt(prompt("Enter your first guess!"));
// let attempts = 1;

// while (parseInt(guess) !== targetNum) {
//     if (guess === 'q') break;
// //     attempts++;
// //     if (guess > targetNum) {
// //         guess = prompt("Too high! Enter a new guess:");
// //     } else {
// //         guess = prompt("Too low! Enter a new guess:");
// //     }

// if (guess === 'q') {
//     console.log("OK, YOU QUIT!")
// } else {
//     console.log("CONGRATS YOU WIN!")
//     console.log(`You got it! It took you ${attempts} guesses`)
// }

//For of loop

const subredits=['cringe','funny','football','sad','cats','Dogs','chickens','cars']

// for(let i=0;i<subredits.length;i++){
//     console.log(`Visits redit.com/r/${subredits[i]}`);
// }

//similar output using for..of loop
    for(let sub of subredits){
        console.log(`Visits redit/r/${sub}`);
    }































