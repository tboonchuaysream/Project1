/*
@author Thanaphat Boonchuaysream
This program contains an interactive game for children
It has 4 different games in total
Drawing game, math game, animal game, and fruit game
*/

//different states
var state;
var stateMenu = 1;
var stateDrawingGame = 2;
var stateNumberGame = 3;
var stateAnimalGame = 4;
var stateFruitCatch = 5;

//musis for entire interface
var music;

//skeleton for the interface
var heightIntervals;

var font;
var buttonColor;

//variables for number game
var numberOne;
var numberTwo;
var coinFlip;
var numberResult;

//variables for animal game
var cowSound;
var goatSound;
var hummingbirdSound;

//variables for fruit catch game
var fruitDrop;
var chipsDrop;
var burgerDrop;
var cokeDrop;
var randomDropPosition;
var status;
var cheer;

// preload() will execture before setup()
function preload() {
  
  //font
  font = loadFont('assets/Quicksand-Bold.otf');

  music = loadSound('assets/music.mp3');

  //for animal game
  cowImg = loadImage('assets/cow.png');
  cowSound = loadSound('assets/cowSound.mp3');
  goatImg = loadImage('assets/goat.png');
  goatSound = loadSound('assets/goatSound.mp3');
  hummingbirdImg = loadImage('assets/hummingbird.png');
  hummingbirdSound = loadSound('assets/hummingbirdSound.mp3');

  //for fruit game
  basketImg = loadImage('assets/basket.png');
  appleImg = loadImage('assets/apple.png');
  chipsImg = loadImage('assets/chips.png');
  burgerImg = loadImage('assets/burger.png');
  cokeImg = loadImage('assets/coke.png');
  cheerSound = loadSound('assets/cheer.mp3');
  
}

function setup() {
	
	createCanvas(1000, 600);
  
  	background(174, 214, 241);

  	heightIntervals = height/6;
	
  	menu();

}

function draw() {

	//to change between the different states
	if(state == stateDrawingGame){
  		drawingGame();
  	} else if (state == stateMenu) {
  		menu();
  	} else if (state == stateNumberGame){
  		numberGame();
  	} else if (state == stateAnimalGame) {
  		animalGame();
  	} else if (state == stateFruitCatch) {
  		fruitCatchGame();
  	}

}

//--- INTERFACE ----
function keyPressed() {

	//to register the diffent states and set variables that I do not want looped
	//as soon as the user presses the different keys, the variables here will set the stage for that state
	//these variables will stay static and will not be involved in the loop
 if(key == "d"){
 	
 	background(253, 235, 208);
 	state = stateDrawingGame;

 } else if (key == "m") {
 	
 	background(174, 214, 241);
 	state = stateMenu;

 } else if (key == "n") {
 	
 	background(163, 228, 215);
 	numberOne = int(random(500));
 	numberTwo = int(random(500));

 	//use to decide whether to show the correct answer
 	coinFlip = int(random(2));

 	//if 1, it will show the correct answer
 	//if not, it will show a random number
	if(coinFlip == 1){
		numberResult = numberOne + numberTwo;
	} else {
		numberResult = int(random(1000));
	}

 	state = stateNumberGame;

 } else if (key == "a") {
 	
 	background(215, 189, 226);
 	state = stateAnimalGame;

 } else if (key == "f") {
	
	//randomize the location that fruit drop from top of screen
 	fruitDrop = 0;
 	chipsDrop = 0;
 	burgerDrop = 0;
 	cokeDrop = 0;
 	randomDropPosition = int(random(1000));
 	randomChipsPosition = int(random(1000));
 	randomBurgerPosition = int(random(1000));
 	randomCokePosition = int(random(1000));

 	status = "Catch the healthy food!";

 	background(249, 231, 159);
 	state = stateFruitCatch;

 } else if (key == "p") {

 	//allows user to play background music
 	if(music.isPlaying()) {
 		music.stop();
 	} else {
 		music.play();
 	}
 }

}

function drawingGame() {

	//creates line to show drawing (uses previous location and current location to create line)
	if(mouseIsPressed){
		line(mouseX, mouseY, pmouseX, pmouseY);
	}

	//hold mouse to draw label
	fill(0);
	textAlign(LEFT);
	textSize(25);
 	text('Hold mouse to draw!', 10, 30);

 	//press d to erase label
 	fill(0);
	textAlign(LEFT);
	textSize(25);
 	text('Press d to erase', 10, 570);

 	//press m to go back to game menu label
 	fill(0);
 	textAlign(RIGHT);
	textSize(25);
 	text('Press m for game menu', 990, 570);

}

function menu() {

	//Label
	textFont(font);
 	textAlign(CENTER, CENTER);
 	textSize(44);
 	text('Choose a Minigame!', width/2, heightIntervals*1);

 	//drawing game button
 	textAlign(CENTER, CENTER);
 	fill(247, 220, 111);
  	rect(350,(heightIntervals*2)-30,300,60);
  	fill(0);
  	textSize(20);
 	text('Press d to draw!', 500, heightIntervals*2);

 	//number game button
 	textAlign(CENTER, CENTER);
 	fill(247, 220, 111);
  	rect(350,(heightIntervals*3)-30,300,60);
  	fill(0);
  	textSize(20);
 	text('Press n for Math game!', 500, heightIntervals*3);

 	//animal game button
 	textAlign(CENTER, CENTER);
 	fill(247, 220, 111);
  	rect(350,(heightIntervals*4)-30,300,60);
  	fill(0);
  	textSize(20);
 	text('Press a for animal facts!', 500, heightIntervals*4);

 	//fruit catch game button
 	textAlign(CENTER, CENTER);
 	fill(247, 220, 111);
  	rect(350,(heightIntervals*5)-30,300,60);
  	fill(0);
  	textSize(20);
 	text('Press f to catch fruits!', 500, heightIntervals*5);

 	//play or pause music
 	textAlign(RIGHT);
  	fill(0);
  	textSize(20);
 	text('Press p to play/pause music', 990, 15);

}

function numberGame() {

	//press n to generate a set of new numbers
 	fill(0);
	textAlign(LEFT);
	textSize(25);
 	text('Press n to for new number', 10, 570);

 	//press m to go back to game menu label
 	fill(0);
 	textAlign(RIGHT);
	textSize(25);
 	text('Press m for game menu', 990, 570);

 	//ask whether calculation is right or not
	fill(0);
	textAlign(LEFT);
	textSize(25);
 	text('Is the following calculation true or false?!', 10, 30);

	stroke(1);

	//shows number one
	textAlign(CENTER, CENTER);
	fill(247, 220, 111);
  	rect(200,(heightIntervals*2)-30,200,60);
  	fill(0);
  	textSize(20);
 	text(numberOne, 300, heightIntervals*2);

 	//plus sign
 	textAlign(CENTER, CENTER);
 	fill(0);
  	textSize(30);
 	text("+", 500, heightIntervals*2);

 	//shows number two
 	textAlign(CENTER, CENTER);
	fill(247, 220, 111);
  	rect(600,(heightIntervals*2)-30,200,60);
  	fill(0);
  	textSize(20);
 	text(numberTwo, 700, heightIntervals*2);

	//plus sign
 	textAlign(CENTER, CENTER);
 	fill(0);
  	textSize(40);
 	text("=", 500, heightIntervals*3); 	

 	//shows number result
 	textAlign(CENTER, CENTER);
	fill(247, 220, 111);
  	rect(400,(heightIntervals*4)-30,200,60);
  	fill(0);
  	textSize(20);
 	text(numberResult, 500, heightIntervals*4);

 	//true box
 	fill(118, 215, 196);
 	rect(200,(heightIntervals*5)-30,200,60);
	textAlign(CENTER, CENTER);
 	fill(0);
  	textSize(20);
 	text("True", 300, heightIntervals*5);

 	//false box
 	fill(241, 148, 138);
 	rect(600,(heightIntervals*5)-30,200,60);
 	textAlign(CENTER, CENTER);
 	fill(0);
  	textSize(20);
 	text("False", 700, heightIntervals*5);

 	//checks if user is pressing on the true box
 	//rectangle replaces whatever word is written there
 	//compares the 2 numbers to the results, if correct, output corret
 	//if wrong, output wrong
 	if(mouseIsPressed && ((mouseX > 200 && mouseX < 400) &&(mouseY > (heightIntervals*5)-30 && mouseY < (heightIntervals*5)+30))){
 		fill(163, 228, 215);
 		noStroke();
 		rect(400,heightIntervals*1-50,200,100);
 		if(numberResult == (numberOne + numberTwo)){
 			textAlign(CENTER, CENTER);
 			fill(0);
  			textSize(20);
 			text("CORRECT!!!", 500, heightIntervals*1);
 		} else if (numberResult != (numberOne + numberTwo)){
 			textAlign(CENTER, CENTER);
 			fill(146, 43, 33);
  			textSize(20);
 			text("Try again", 500, heightIntervals*1);
 		}
 	}

 	//checks if user is pressing on the false box
 	//rectangle replaces whatever word is written there
 	//compares the 2 numbers to the results, if correct, output corret
 	//if wrong, output wrong
 	if(mouseIsPressed && ((mouseX > 600 && mouseX < 800) &&(mouseY > (heightIntervals*5)-30 && mouseY < (heightIntervals*5)+30))){
 		fill(163, 228, 215);
 		noStroke();
 		rect(400,heightIntervals*1-50,200,100);
 		if(numberResult != (numberOne + numberTwo)){
 			textAlign(CENTER, CENTER);
 			fill(0);
  			textSize(20);
 			text("CORRECT!", 500, heightIntervals*1);
 		} else if (numberResult == (numberOne + numberTwo)){
 			textAlign(CENTER, CENTER);
 			fill(146, 43, 33);
  			textSize(20);
 			text("Try again", 500, heightIntervals*1);
 		}
 	}

}

function animalGame() {

	//tells the user to click the animals for sound
 	fill(0);
	textAlign(LEFT);
	textSize(20);
 	text('Click the animals for sound!', 10, 570);

 	//press m to go back to game menu label
 	fill(0);
 	textAlign(RIGHT);
	textSize(20);
 	text('Press "m" for game menu', 990, 570);

 	//tells user to learn about animals and their sound
	fill(0);
	textAlign(CENTER);
	textSize(25);
 	text('Learn fun facts about these animals and how they sound!', 500, 30);

 	//cow picture
	image(cowImg, 100, 100, cowImg.width / 2, cowImg.height / 2);

	//cow label
 	fill(169, 204, 227);
 	rect(100,(heightIntervals*3)-30,200,60);
 	textAlign(CENTER, CENTER);
 	fill(0);
  	textSize(20);
 	text("Cow", 200, heightIntervals*3);

 	//cow information
 	textAlign(CENTER,CENTER);
 	fill(0);
  	textSize(20);
 	text("1. There are well over 1 billion \n cattle in the world.", 200, heightIntervals*4);
 	text("2. Cattle are herbivores \n that eat vegetation \n such as grass.", 200, heightIntervals*5);

 	//ensure that the cow sound do not play over each other
 	if(mouseIsPressed && ((mouseX > 100 && mouseX < 300) &&(mouseY > 100 && mouseY < 250))){
 		if(cowSound.isPlaying()) {
 			cowSound.stop();
 		} else {
 			cowSound.play();
 		}
 	}

 	//goat picture
	image(goatImg, 400, 100, 220, 160);

	//goat label
 	fill(169, 204, 227);
 	rect(400,(heightIntervals*3)-30,200,60);
 	textAlign(CENTER, CENTER);
 	fill(0);
  	textSize(20);
 	text("Goat", 500, heightIntervals*3);

 	//goat information
 	textAlign(CENTER,CENTER);
 	fill(0);
  	textSize(20);
 	text("1. The life span of a goat is \n about that of a dog", 500, heightIntervals*4);
 	text("2. Goats can be taught their \n name and to \n come when called.", 500, heightIntervals*5);

 	//ensure that the goat sound do not play over each other
 	if(mouseIsPressed && ((mouseX > 400 && mouseX < 600) &&(mouseY > 100 && mouseY < 250))){
 		if(goatSound.isPlaying()) {
 			goatSound.stop();
 		} else {
 			goatSound.play();
 		}
 	}

 	//hummingbird picture
	image(hummingbirdImg, 700, 100, hummingbirdImg.width / 2, hummingbirdImg.height / 2);

	//hummingbird label
 	fill(169, 204, 227);
 	rect(700,(heightIntervals*3)-30,200,60);
 	textAlign(CENTER, CENTER);
 	fill(0);
  	textSize(20);
 	text("Hummingbird", 800, heightIntervals*3);

 	//ensure that the hummingbird sound do not play over each other
 	if(mouseIsPressed && ((mouseX > 700 && mouseX < 900) &&(mouseY > 100 && mouseY < 250))){
 		if(hummingbirdSound.isPlaying()) {
 			hummingbirdSound.stop();
 		} else {
 			hummingbirdSound.play();
 		}
 	}

 	//hummingbird information
 	textAlign(CENTER,CENTER);
 	fill(0);
  	textSize(20);
 	text("1. Hummingbirds are the only \n birds that can fly backwards", 800, heightIntervals*4);
 	text("2. Hummingbirds have no \n sense of smell.", 800, heightIntervals*5);

}

function fruitCatchGame() {

	background(249, 231, 159);

	//tells the user to click the animals for sound
 	fill(0);
	textAlign(LEFT);
	textSize(25);
 	text('Press "m" for menu', 10, 30);


	//Label
	textFont(font);
 	textAlign(CENTER, CENTER);
 	textSize(44);
 	text(status, width/2, heightIntervals*1);

	fruitDrop = fruitDrop + 5;
	chipsDrop = chipsDrop + 3;
	burgerDrop = burgerDrop + 4;
	cokeDrop = cokeDrop + 6;

	image(chipsImg, randomChipsPosition, chipsDrop, 60, 60);
	image(burgerImg, randomBurgerPosition, burgerDrop, 60, 60);
	image(cokeImg, randomCokePosition, cokeDrop, 60, 60);
	image(appleImg, randomDropPosition, fruitDrop, 60, 60);

	image(basketImg, mouseX, 550, 100, 60);

	//checking what is hitting the basket and outputing a message
	if(fruitDrop == 550 && (randomDropPosition > mouseX && randomDropPosition < (mouseX+100))) {
		status = "Good job!";
		cheerSound.play();
	} else if (fruitDrop == 600 && (status != "Good job!")) {
		status = "Oh no...";
	} else if (chipsDrop == 552 && (randomChipsPosition > mouseX && randomChipsPosition < (mouseX+100))) {
		status = "That is bad for you";
	} else if (burgerDrop == 552 && (randomBurgerPosition > mouseX && randomBurgerPosition < (mouseX+100))) {
		status = "That is bad for you";
	} else if (cokeDrop == 552 && (randomCokePosition > mouseX && randomCokePosition < (mouseX+100))) {
		status = "That is bad for you";
	}

}


