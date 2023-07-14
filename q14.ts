//Guest List: If you could invite anyone, living or deceased, to dinner,
// who would you invite? Make a list that includes at least three people you’d like to invite to dinner.
// Then use your list to print a message to each person, inviting them to dinner.

let invitation: string[] =['Mariam','Beenish','Ahwar'];

for(let i=0; i< invitation.length;i++)
{
 let message: string; 
 if (invitation[i] === 'Mariam'){
    message ='Dear Mariam,\nYou are invited for a dinner tommorow night.'
 }
 else if(invitation[i] == 'Beenish')
 {
    message = 'Dear Beenish,\nYou are invited for a dinner on Wednesday.'
 }
 else
 {
    message = 'Dear Ahwar,\nYou are invited for a dinner on Thursday'
 }
 console.log (message);
}

export {};