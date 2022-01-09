
const age = 18;
const isFemale = true;
const driverStatus = "designated";
const firstName = "Carlijn";
const totalAmount = 30;

if (firstName === "Bram" || firstName === "Sarah") {
    console.log("Congrats you get a free beer!")

} else {
    console.log("Sorry no free beer for you!")

} if (age >= 18) {
    console.log("You may go in.");
} else {
    console.log("✋ You may not go in.");

} if (age >=18 && age <= 25) {
    console.log("You get 50% off!");

} else console.log("No discount!");

if (isFemale) {
    console.log("Your ticket tells me you're a woman.");
} else {
    console.log(
        "Your ticket tells me you're not a woman, so you can't come in tonight"
    );
}
if (totalAmount >= 25) {
    console.log("You get free (veggie) bitterballen!");
    
} else if (totalAmount >= 50) {
    console.log("You get a free portion of nachos");

} else if (totalAmount >= 100)
    console.log("You get a free bottle of champagne!");


if (driverStatus === "designated") {
    console.log("You're the designated driver, you can drive!");
 
} else 
    console.log("You're the designated driver, shall I call a cab?")
