// Greetings: Start with the array you used in Exercise 11,
// but instead of just printing each person’s name, print a message to them.
// The text of each message should be the same, but each message should be 
// personalized with the person’s name.



let names: string[] =['Mariam','Beenish','Ahwar'];

for (let i=0;i<names.length;i++)
{

    let message: string = 'How are you?';
    console.log ('Hello', names[i],'!', message);
}
export{};