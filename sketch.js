var posX;
var posY;

var r;
var g;
var b;

var buttonX;
var buttonY;

var phrase = ("usethekeyboard");
var phrasePosition = 0;

function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  noCursor();

  r = random(255);
  g = random(255);
  b = random(255);

  randomButton();
}

function draw() {
  background('#663399');
  posX = mouseX;
  posY = mouseY;


  //clickable Area
  noStroke();
  fill(r,g,b, 10);
  ellipse(buttonX,buttonY,70);

  fill('gold');
  textFont('Shrikhand');
  textSize(100);
  text(phrase[phrasePosition],buttonX-30,buttonY+30);

  //weird pointer
  push()
    translate(width,height);
    applyMatrix(-1,0,0,-1,0,0);
    fill('gold');
    triangle(
      posX, posY,
      posX-12, posY+24,
      posX-24, posY+12
    );
  pop();



}

function mousePressed() {
  // Check if mouse is inside the circle
  var d = dist(posX, posY, buttonX, buttonY);

  if (d < 100) {
    newButton();
}
}

function newButton(){
  r = random(255);
  g = random(255);
  b = random(255);
  randomButton();
  phrasePosition++;
  if(phrasePosition >= phrase.length)
    phrasePosition = 0;

}

function randomButton(){
  buttonX = random(100, windowWidth-100);
  buttonY = random(100, windowHeight-100);
}

function keyPressed(){
  if (key === phrase[phrasePosition]){
    newButton();
  }
}
