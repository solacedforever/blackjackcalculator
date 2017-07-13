/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/
?
//read the points each card has
//read the card face and apply the amount of points to that card
function handValue (hand) {
  // for ( i = 0 ; i < hand.length; i ++) {
    if (hand === "K"||"Q" || "J") {
    hand = 10;
    return hand
    }
  else if (hand  >= 1 && hand <= 10){
    return hand;
  }
  else if (hand === "A") {
    hand = 10 || 1;
  }
    return hand;
  }


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
