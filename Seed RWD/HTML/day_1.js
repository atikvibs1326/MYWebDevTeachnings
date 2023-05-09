let factorial = 1;
let number = prompt("Enter the number");

if (number == 0) {
    console.log("Factorial is: 1");
} else {
    for (let i = 1; i <= number; i++) {
        factorial = factorial * i;
    }
    console.log(`Factorial of ${number} is ${factorial}`);
}
// write a program for prime number or not
// and also work on billing opeartions