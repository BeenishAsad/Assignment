// Changing Guest List: You just heard that one of your guests can’t make the dinner,
//  so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program 
// stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new
//  person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.

let invitation: string[] =['Mariam','Beenish','Ahwar'];
let invitation2: string[]=['Mariam','Beenish','Ayesha']

for(let i=0; i< invitation.length;i++)
{
 let message: string; 
 if (invitation[i] === 'Mariam'){
    message ='Dear Mariam,\nYou are invited for a dinner tommorow night.'
 }
 else if(invitation[i] == 'Beenish')
 {
    message = 'Dear Beenish,\nYou are invited for a dinner tommorow night.Be there on time'
 }
 else
 {
    message = 'Dear Ahwar,\nYou are invited for a dinner tommorow'
 }
 console.log (message);
}
console.log('Attention all guests, Ahwar has notified that she will not be able to join us for the dinner so we would like to invite a new guest instead.')

for(let j=0; j<invitation2.length;j++)
{
    let message1 : string

    if (invitation2[j] == 'Mariam'){
        message1 ='Dear Mariam,\nYou are invited for a dinner tommorow night.'
     }
     else if(invitation2[j] == 'Beenish')
     {
        message1 = 'Dear Beenish,\nYou are invited for a dinner tommorow night, be there on time.'
     }
     else
     {
        message1 = 'Dear Ayesha,\nAs Ahwar can not make it to the dinner on tommorow so instead you are invited for a dinner tommorow'
     }
     console.log (message1);
}

export {};