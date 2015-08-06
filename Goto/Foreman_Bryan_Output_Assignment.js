/*
Bryan Foreman
Mobile Development
Aug 6th 2015
*/

//amount of chicken in restaurant
var amountofChicken;
//amount of seats in restaurant
var numberofSeats;
//patrons in restaurant
var amountofPatrons;
//If enough chicken
var weHaveEnoughChicken;
//Chef's name is Chef Schmuley
var chefName = "Chef Schmuley";
//Is there enough seats?
var weHaveEnoughSeats;


amountofChicken = 100;
numberofSeats = 50;
amountofPatrons = 4;


//do we have enough seats?
if(numberofSeats >= amountofPatrons){

    weHaveEnoughSeats = true;
}else {
    //Chef Schmuley says if there is too many patrons, dinner cannot be catered.
//we don't have enough seats
    weHaveEnoughSeats = false;
}


if(weHaveEnoughSeats){
    if(amountofChicken >= numberofSeats){

        weHaveEnoughChicken = true;
    }else {
        //dinner cannot be served if there is not enough chicken
        weHaveEnoughChicken = false;
    }
}

if(weHaveEnoughChicken){
    if(weHaveEnoughSeats){
        document.write("Dinner Is Served");
    }

}






