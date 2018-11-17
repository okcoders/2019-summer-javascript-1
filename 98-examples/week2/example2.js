
function makeMessage(test, message){
    console.log(message);
    if(test){
        console.log("Evaluated as True");
    } else {
        console.log("Evalueded as False");
    }
}

makeMessage(NaN, "Evaluate this");

// Just bad
// lotsofwordinarow
// Camel Case
// lotsOfWordsInARow
// Snake Case
// lots_of_words_in_a_row

// makeMessage(true);
// makeMessage(false);
// makeMessage(true);
// makeMessage(false);
// makeMessage(true);
// makeMessage(false);

// console.log("What is the status of: " + test);

// loops inside of loops
// for(var num1 = 1; num1 < 38; num1++){
//     message = ""
//     for(var num2 = 1; num2 <= num1; num2++){
//         message = message + num2 + " ";
//     }
//     console.log(message);
// }