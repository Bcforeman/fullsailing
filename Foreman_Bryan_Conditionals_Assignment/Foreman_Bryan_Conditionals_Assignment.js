/*
 Bryan Foreman
 Mobile Development
 Aug 20th 2015
 */

//amount of cake needed to be ordered
var amountOfCake;
//amount of people needed to be served
var amountOfGuests;
//amount of rooms needed for party guests
var amountOfRooms;
//amount of slices of cake for party guests
var amountOfSlices;
//amount of supplies that will be provided for the party
var amountOfSupplies;
//prompt for the amount of people at party
amountOfGuests = prompt("Enter the amount of people in your party: ");
//prompt for the amount of rooms needed
amountOfRooms = prompt("Enter the amount of rooms needed for your party ");
//amount of slices of cake people will eat
amountOfSlices = prompt("Enter the amount of slices your party will eat");
//
var partyOrder = [0,1,2];
//
partyOrder[0] = Number(amountOfGuests);
//
partyOrder[1] = Number(amountOfRooms);
//
partyOrder[2] = Number(amountOfSlices);
//
amountOfCake = partyOrder [0] / partyOrder [2];
//
amountOfSupplies = partyOrder [0] * partyOrder [1];
//
if(amountOfGuests >= amountOfSlices){
    notEnoughCake = true;
    } else {
    notEnoughCake = false;
}
    document.write ("Your order cannot be placed");

