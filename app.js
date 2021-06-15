const btn = document.querySelector("button");
const h1 = document.querySelector("h1");

//Reload the page
btn.addEventListener("click", function () {
  location.reload();
});

//Creating Random Numbers
const randomNumber1 = Math.trunc(Math.random() * 6 + 1);
const randomNumber2 = Math.trunc(Math.random() * 6 + 1);

//Selecting Dice Image elements
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");

//Setting attributes for image source
img1.setAttribute("src", `images/dice${randomNumber1}.png`);
img2.setAttribute("src", `images/dice${randomNumber2}.png`);

//Checking for outcome and changing header
if (randomNumber1 > randomNumber2) {
  h1.innerText = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  h1.innerText = "Player 2 Wins!";
} else {
  h1.innerText = "It's a draw!";
}
