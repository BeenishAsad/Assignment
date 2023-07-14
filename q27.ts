// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

let alien1_color : string = 'green';


if (alien1_color == 'green'){
    console.log("You just earned 5 points.")
}

else if (alien1_color == 'red')
{
    console.log("You just earned 10 points.");
}
else if (alien1_color == 'yellow')
{
    console.log("You just earned 15 points.");
}
else {
    console.log("You earned nothing.");
}

let alien2_color : string = 'yellow';
if (alien2_color == 'green'){
    console.log("You just earned 5 points.")
}

else if (alien2_color == 'red')
{
    console.log("You just earned 10 points.");
}
else if (alien2_color == 'yellow')
{
    console.log("You just earned 15 points.");
}
else {
    console.log("You earned nothing.");
}


let alien3_color : string = 'yellow';
if (alien3_color == 'green'){
    console.log("You just earned 5 points.")
}

else if (alien3_color == 'red')
{
    console.log("You just earned 10 points.");
}
else if (alien3_color == 'yellow')
{
    console.log("You just earned 15 points.");
}
else {
    console.log("You earned nothing.");
}


export{};