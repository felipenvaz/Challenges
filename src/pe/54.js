const { getLines } = require('../file');

/**
  INCOMPLETE
*/

const file = `${__dirname}/files/p054_poker.txt`;

// diamonds, clubs, hearts, spades
const suits = ['D', 'C', 'H', 'S'];
const handSize = 5;

const cardValues = {
  A: 14,
  K: 13,
  Q: 12,
  J: 11,
  T: 10,
};

// 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King, Ace
const parseCardValue = cardValue => cardValues[cardValue] || parseInt(cardValue, 10);

const cardSort = (cardA, cardB) => cardA[0] - cardB[0];

const getHighCardValue = (cards) => {
  if (!cards) return 0;
  return cards.reduce((acc, card) => Math.max(acc, card[0]), 0);
};

const getGroups = (hand, size) => {
  const counts = hand.reduce((acc, card) => {
    acc[card[0]] = acc[card[0]] || 0;
    acc[card[0]] += 1;
    return acc;
  }, {});

  const pairs = [];
  Object.keys(counts).forEach((cardValue) => {
    if (counts[cardValue] === size) {
      const pair = hand.filter(card => card[0] === parseInt(cardValue, 10));
      pairs.push(pair);
    }
  });
  return pairs;
};

const getPairs = hand => getGroups(hand, 2);
const getThreeOfAKind = hand => getGroups(hand, 3);
const getFullHouse = (hand) => {
  const pairs = getPairs(hand);
  const threeGroups = getThreeOfAKind(hand);
  if (pairs.length === 1 && threeGroups.length === 1) return hand;
  return null;
};

const getFlush = (hand) => {
  const suit = hand[0][1];
  for (let i = handSize - 1; i >= 0; i--) {
    if (hand[i][1] !== suit) return null;
  }
  return hand;
};

const getStraight = (hand) => {
  for (let i = 1; i < handSize; i++) {
    if (hand[i][0] !== (hand[i - 1][0] + 1)) return null;
  }
  return hand;
};

const getRoyalFlush = hand => getHighCardValue(hand) === cardValues.A && getStraight(hand) && getFlush(hand);

(async () => {
  const lines = ['KC AC QC TC JC 7D 7S 7H 8D 8H']; // await getLines(file);
  const hands = lines.map((line) => {
    const cards = line.split(' ').map(card => [parseCardValue(card[0]), card[1]]);
    const hand1 = cards.slice(0, 5).sort(cardSort);
    const hand2 = cards.slice(5, 10).sort(cardSort);
    return [hand1, hand2];
  });

  /* let player1Score = 0;
  let player2Score = 0; */
  for (let i = 0; i < hands.length; i++) {
    const player1Hand = getRoyalFlush(hands[i][0]);
    const player2Hand = getFullHouse(hands[i][1]);
    console.log('t');
  }
})();
