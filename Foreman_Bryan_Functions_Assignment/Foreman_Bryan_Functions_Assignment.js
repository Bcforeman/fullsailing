/**
 * Created by Nosferocktu on 8/26/15.
 */

//Generate 2 Lottery Numbers
// One must be Powerball with a PB Numbers
// one Must...not
//
    function GenerateLotto( type, numbers) {
        //Lotto Numbers to Generate
        var lottoNumbers;
        var lottoRange;
        if(lottoType == 1) {
            //User Chose Florida Lottery
            lottoNumbers = new Array(5);
            lottoRange = 53;
        } else {
            //User Chose Powerball
            lottoNumbers = new Array(6);
            lottoRange = 59;
        }

        //Variable to store our next random number
        var nextRandom;
        //Loop through all of our lottery numbers
        var i = 0;
        while(i < 5){


            //Generate Random Number
            nextRandom = Math.random() * lottoRange + 1;

        //Check that we don't already have that number
        for (var j = 0; j < 5; j++) {
            if(lottoNumbers[j] == nextRandom) {
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
        lottoNumbers[6] = Math.random() * 53 + 1;
    }
}

//Ask the user what kind of lottery they wish to play
var lottoType = prompt(" Press 1 - Florida, Press 2 - Powerball");
var lottoNumbers;

GenerateLotto(lottoType, lottoNumbers);

Console.write("Here are your numbers for the " + lotteryName + " lottery:");
for(var i = 0; i < numberCount - 1; i++) {
    Console.write(lotteryNumbers[i] + ", ");
}

Console.write(LotteryNumbers[numberCount]);
Console.write("Good Luck!");



