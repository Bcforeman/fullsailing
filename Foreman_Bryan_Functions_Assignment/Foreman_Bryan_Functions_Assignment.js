/**
 * Created by Nosferocktu on 8/26/15.
 */

//Generate 2 Lottery Numbers
// One must be Powerball with a PB Numbers
// one Must...not
//
function GenerateLotto(lottoType) {
    var lottoNumbers;
    //Lotto Numbers to Generate
    var lottoRange;
    if(lottoType == 1) {
        //User Chose Florida Lottery
        lottoNumbers = [0,0,0,0,0];
        lottoRange = 53;
    } else {
        //User Chose Powerball
        lottoNumbers = [0,0,0,0,0,0];
        lottoRange = 59;
    }

    //Variable to store our next random number
    var nextRandom;
    //Loop through all of our lottery numbers
    var i = 0;
    while (i < 5) {
        //Generate Random Number
        nextRandom = Math.floor(Math.random() * lottoRange) + 1;
        console.log ("[" + i + "] Random is " + nextRandom);

        //Check that we don't already have that number
        for (var j = 0; j < lottoNumbers.length; j++) {
            if(lottoNumbers[j] == nextRandom.value) {
                //Number exists, decrement lotto number
                i--;
                //Exit for loop
                break;
            } else {
                //Store the lotto number in the appropriate index
                lottoNumbers[i] = nextRandom;
            }
        }

        //Increment lotto number index
        i++;
    }

    if(lottoType == 2) {
        lottoNumbers[lottoNumbers.length - 1] = Math.floor(Math.random() * 35) + 1;
    }

    return lottoNumbers;
}

//Ask the user what kind of lottery they wish to play
var lottoType = prompt(" Press 1 - Florida, Press 2 - Powerball");
var Lottery = GenerateLotto(lottoType);

var OutWords = "Here are your numbers for the " + ((lottoType == 1) ? "Florida" : "Powerball") + " lottery:\n";

for(var i = 0; i < Lottery.length; i++) {
    OutWords += Lottery[i];
    if(i < Lottery.length - 1) {
        OutWords += ", ";
    }
}


if(lottoType == 2) {
    OutWords += " Powerball";
}

console.log(OutWords + "\nGood Luck!");
