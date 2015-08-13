/*
 Bryan Foreman
 Mobile Development
 Aug 13th 2015
 */

//height of forged sword
var swordHeight;
//width of forged sword
var swordWidth;
//depth of forged sword
var swordDepth;
//length of leather shoulder strap in inches
var strapLength;
//width of leather shoulder strap in inches
var strapWidth;
//dimensions of average sword strap length in inches
strapLength = 22;
//dimensions of average sword strap width in inches
strapWidth = 2;

//height prompt of sword
swordHeight = prompt("Enter height of sword forged in inches: ");
//width prompt of sword
swordWidth = prompt("Enter width of sword forged in inches: ");
//depth prompt of sword
swordDepth = prompt("Enter depth of sword forged in inches: ");
//dimensions of finished sword in inches
var swordDimensions = [0, 0, 0];
//sword dimensions for height input by user
swordDimensions[0] =Number(swordHeight);
//sword dimensions for width input by user
swordDimensions[1] =Number(swordWidth);
//sword dimensions for depth input by user
swordDimensions[2] =Number(swordDepth);
//calculating area of sword's dimensions
var totalSwordArea = swordDimensions[0] * swordDimensions[1] * swordDimensions[2];
//area squared of leather shoulder strap
var areaStrap = strapLength + strapWidth;
//total area of material for sword shoulder strap
console.log("Total area of material needed for your sword strap will be " + areaStrap + " inches ");
//total area of sword after finishing heat treating
console.log("The total area of your finished sword will be " + totalSwordArea + " inches ");

