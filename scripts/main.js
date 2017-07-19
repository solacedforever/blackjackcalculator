//  Implement a Blackjack hand value calculator.

function handValue(hand) {
    let total = 0;
    for (i = 0; i < hand.length; i++) {
        let card = hand[i];
        if (card === "K" || card === "Q" || card === "J") {
            total += 10;
        } else if (card === "A") {
            total += 1;
        } else {
          total += Number(card);
        }
    }
    if (hand.includes("A") && total <12) {
      total += 10;
    }
  return total;
}
