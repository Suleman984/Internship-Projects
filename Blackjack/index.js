let cards = [];
let sum = 0;

let message = "";

let startBtn = document.getElementById("start");

let newCardBtn = document.getElementById("newCard");
// messages

let messagEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.querySelector("#card-el");
let isAlive = null;
let hasBlackjack = null;

//Player
let Player = {
  name: "Suleman",
  chips: 250,
  sayHello:function(){
    console.log("Hello Suleman");
  }
};

let playerEl = document.getElementById("player-el");
playerEl.textContent = Player.name + ": $" + Player.chips;

// functions
function startGame() {
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  hasBlackjack = false;
  isAlive = true;
  cards = [firstCard, secondCard];
  sum = cards[0] + cards[1];
  renderGame();
}

function renderGame() {
  if (sum < 21) {
    console.log("Do you want to draw a new card? 🙂");
    message = "Do you want to draw a new card? 🙂";
  } else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack! 🥳");
    hasBlackjack = true;
    message = "Wohoo! You've got Blackjack! 🥳";
  } else {
    console.log("You're out of the game! 😭");
    isAlive = false;
    message = "You're out of the game! 😭";
  }
  messagEl.textContent = message;
  sumEl.textContent = "Sum: " + sum;
  cardEl.textContent = "Cards: ";
  for (i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " , ";
  }
}
// draw new card
function newCardDraw() {
  if (isAlive === true && hasBlackjack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}

// generate random number
function getRandomCard() {
  let randomNumber = parseInt(Math.floor(Math.random() * 11) + 1);
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
  return randomNumber;
}
//click event listners
startBtn.addEventListener("click", startGame);
newCardBtn.addEventListener("click", newCardDraw);
