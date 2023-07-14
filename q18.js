"use strict";
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
Object.defineProperty(exports, "__esModule", { value: true });
// • Sort your array so it’s stored in alphabetical order. Print the array to show
// that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. 
// Print the list to show that its order has changed.
var LocationP = ['Canada', 'England', 'America', 'Denmark', 'Brazil'];
console.log('Orignal Order \n');
console.log(LocationP, '\n');
console.log('Alphabatical Order \n');
console.log([LocationP].sort(), '\n');
console.log('Orignal Order');
console.log(LocationP, '\n');
console.log('Reverse Alphabatical Order \n');
console.log([LocationP].sort().reverse(), '\n');
console.log('Orignal Order \n');
console.log(LocationP, '\n');
console.log('Reverse Order but permenently changing the orignal array order\n');
console.log(LocationP.reverse(), '\n');
console.log('Now Orignal Order\n');
console.log(LocationP, '\n');
console.log('Alphabatical Order\n');
console.log([LocationP].sort(), '\n');
console.log('Reverse Alphabatical Order\n');
console.log([LocationP].reverse(), '\n');
