// alert("script added!");
var randomNumber1 = Math.floor(Math.random()*6) + 1;

var randomDiceImage1 = "dice" + randomNumber1 + ".png";

var randomDiceSource1 = "images/" + randomDiceImage1;

// alert(randomDiceSource);

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src" , randomDiceSource1);



// FOR 2nd DICE

var randomNumber2 = Math.floor(Math.random()*6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomDiceSource2 = "images/" + randomDiceImage2;

// alert(randomDiceSource);

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src" , randomDiceSource2);


if (randomDiceImage1 > randomDiceImage2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
}
else if (randomDiceImage1 < randomDiceImage2) {
  document.querySelector("h1").innerHTML = "🚩 Player 2 wins!";
}
else{
  document.querySelector("h1").innerHTML = "Draw!";
}
