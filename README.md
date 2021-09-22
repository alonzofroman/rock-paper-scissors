# Unit 03 Mini-Project: Rock, Paper, Scissors

In this activity, you will work with a pair to build a game using only JavaScript.

## Instructions

The completed application should meet the following criteria:

* As a user, I want to play Rock, Paper, Scissors against an automated opponent.

* As a user, I can enter R, P, or S to signify my choice of rock, paper, or scissors.

* As a user, I expect the computer to choose R, P, or S in return.

* As a user, I want the option to play again whether I win or lose.

* As a user, I want to see my total wins, ties, and losses after each round.

### Specifications

* Must use the `alert()`, `confirm()`, and `prompt()` methods to collect user input and display information to the user.

* The computer's selection must be random to ensure a fair game.

## 💡 Notes

Refer to the documentation:

* [MDN Web Docs on window.alert()](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert)

* [MDN Web Docs on window.confirm()](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm)

* [MDN Web Docs on window.prompt()](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt)

* [MDN Web Docs on Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your pair to further your knowledge:

* How can you customize the appearance of the `alert()`, `confirm()`, and `prompt()` dialog boxes?

Use [Google](https://www.google.com) or another search engine to research this.

---

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.

## Steps - pseudocode

-Have the window pop up
    -Asking for player input
    -Tracking what the user puts in into a variable
-Have the site randomly generate a variable

-Have the site compare the two and determine the winner
    -Person picks Rock > Computer picks Scissors - person wins
    -Person picks Scissors > Computer picks Paper - person wins
    -Person picks Paper > Computer picks Rock - Person Wins
    -Person picks same variable as computer - tie
    -else - computer wins
    
-Display result message

-If draw - 0 score
-If player wins - player win count goes up 1
-If player loses - computer win count goes up 1

-Display score in fixed message

-Try Again/Cancel