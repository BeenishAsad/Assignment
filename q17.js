"use strict";
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time
// for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying 
// that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. 
// Each time you pop a name from your list, print a message to that person letting them know 
// you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make 
// sure you actually have an empty list at the end of your program.
Object.defineProperty(exports, "__esModule", { value: true });
var invitation = ['Mariam', 'Beenish', 'Ahwar'];
var invitation2 = ['Mariam', 'Beenish', 'Ayesha'];
var invitation3 = ['Mahroosh', 'Samaha', 'Amsaal'];
var guestlist = ['Mariam', 'Beenish', 'Amsaal', 'Ayesha', 'Ahwar', 'Mahroosh', 'Samaha'];
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
console.log('Attention Guests: we are sorry to announce that the table we reserved will not be available until later, whish will be too late, instead we resereved the availabale table which can only accomadate 2 guests, we are very sorry to announce that only 2 guests will be shortlisted for the dinner tommororw.');
while (guestlist.length > 2) {
    var removedGuest = guestlist.pop();
    if (removedGuest) {
        console.log("Sorry, ".concat(removedGuest, ", but I can't invite you to dinner."));
    }
}
for (var _i = 0, guestlist_1 = guestlist; _i < guestlist_1.length; _i++) {
    var remainingGuest = guestlist_1[_i];
    console.log("You're still invited, ".concat(remainingGuest, "!"));
}
//   guestlist = [];
console.log("Final guest list:", guestlist);
