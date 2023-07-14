// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that You just earned 5 points for shooting the alien.

// • If the alien’s color isn’t green, print a statement that You just earned 10 points.

// • Write one version of this program that runs the if block and another that runs the else block.

let alien1_color : string = 'green';

if (alien1_color == 'green'){
    console.log("You just earned 5 points  for shooting the alien..")
}

else if (alien1_color == 'red')
{
    console.log("You just earned 10 points.");
}
else {
    console.log("You just earned 10 points.");
}

let alien2_color : string = 'yellow';
if (alien2_color == 'green'){
    console.log("You just earned 5 points  for shooting the alien..")
}

else if (alien2_color == 'red')
{
    console.log("You just earned 10 points.");
}
else  {
    console.log("You just earned 10 points.");
}


export{};