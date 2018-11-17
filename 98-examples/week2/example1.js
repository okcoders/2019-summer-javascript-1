var message = "This is statement"

// console.log(message + " " + 1);
// console.log(message + " " + 2);
// console.log(message + " " + 3);
// console.log(message + " " + 4);
// console.log(message + " " + 5);
// console.log(message + " " + 6);
// console.log(message + " " + 7);
// console.log(message + " " + 8);

// var number = 1;

// Demonstrate how to use a loop
// while(number <= 100){
//     console.log(message + " " + number);
//     // number = number + 1;
//     number++;
// }

for(var num = 99; num > 0; num--){
    console.log(num + " Bottles of beer on the wall");
    console.log(num + " Bottles of beer");
    console.log("Take on down, pass it around");
    if( (num - 1) != 0 ){
        console.log((num - 1) + " Bottles of beer on the wall");
    } else {
        console.log("No more bottles of beer on the wall");
    }
    console.log("");
}