//  Implement a Blackjack hand value calculator.

function handValue(hand) {
  let total = 0
  for (i = 0; i < hand.length; i++) {
    let card = hand[i]
    if (card === "K" || card === "Q" || card === "J") {
      total += 10;
    } else if (card === "A" && total >= 11) {
      total += 1;
    } else if (card === "A" && total <= 11) {
      total += 11;
    } else {
      total += Number(card);
    }
    if (hand.includes("A") && total > 21) {
      total -= 10;
    }
  }
  return total;
}
