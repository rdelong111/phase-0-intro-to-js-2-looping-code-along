const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);

function writeCards(names, eventname) {
  const cards = [];
  for (let i = 0; i < names.length; i++) {
    cards[i] = (`Thank you, ${names[i]}, for the wonderful ${eventname} gift!`);
  }

  return cards;
}

function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }

  return;
}
