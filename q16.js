"use strict";
//program from Exercise 15. Add a print statement to the end of your program informing people 
// that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. 
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
Object.defineProperty(exports, "__esModule", { value: true });
// Changing Guest List: You just heard that one of your guests can’t make the dinner,
//  so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program 
// stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new
//  person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
var invitation = ['Mariam', 'Beenish', 'Ahwar'];
var invitation2 = ['Mariam', 'Beenish', 'Ayesha'];
var invitation3 = ['Mahroosh', 'Samaha', 'Amsaal'];
for (var i = 0; i < invitation.length; i++) {
    var message = void 0;
    if (invitation[i] === 'Mariam') {
        message = 'Dear Mariam,\nYou are invited for a dinner tommorow night.';
    }
    else if (invitation[i] == 'Beenish') {
        message = 'Dear Beenish,\nYou are invited for a dinner tommorow night.Be there on time';
    }
    else {
        message = 'Dear Ahwar,\nYou are invited for a dinner tommorow';
    }
    console.log(message);
}
console.log('Attention all guests, Ahwar has notified that she will not be able to join us for the dinner so we would like to invite a new guest instead.');
for (var j = 0; j < invitation2.length; j++) {
    var message1 = void 0;
    if (invitation2[j] == 'Mariam') {
        message1 = 'Dear Mariam,\nYou are invited for a dinner tommorow night.';
    }
    else if (invitation2[j] == 'Beenish') {
        message1 = 'Dear Beenish,\nYou are invited for a dinner tommorow night, be there on time.';
    }
    else {
        message1 = 'Dear Ayesha,\nAs Ahwar can not make it to the dinner on tommorow so instead you are invited for a dinner tommorow';
    }
    console.log(message1);
}
console.log('Attention Guests: We have found a bigger table and have reserved it for the dinner tommorow night, we would like to invite some more guests for the dinner tommorow night.');
for (var k = 0; k < invitation3.length; k++) {
    var message3 = void 0;
    if (invitation3[k] == 'Mahroosh') {
        message3 = 'Dear Mahroosh,\nYou are invited for a dinner tommorow night.';
    }
    else if (invitation2[k] == 'Samaha') {
        message3 = 'Dear Samaha,\nYou are invited for a dinner tommorow night, be there on time.';
    }
    else {
        message3 = 'Dear Amsaal,\nyou are invited for a dinner tommorow';
    }
    console.log(message3);
}
