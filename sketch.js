let poster;

// POSTER VARIABLES

//COLOUR
var posterColor = '#E8E8E8';
var typeColor01 = '#89549C';
var typeColor02 = '#89549C';


// FONTS
var fontSelect01 = ['heal', 'bagard', 'inter'];
var fontSelect02 = ['inter', 'bagard', 'heal'];
var typeContent01 = 'WELCOME TO OPEN POSTER';
var typeContent02 = 'Create your own poster using the user interface controls. There are five sub-sections - two for type on the left, and grids, interactive, and graphic elements to the right. Experiment with different combinations to create unique layouts. To save a copy of your poster, press ENTER.';

// FONT SIZE
var typeSize01 = 80;
var typeSize02 = 20;

// PARAGRAPH
var textBox01;
var textBox02;
var textBox01Max;
var textBox02Max;

var typeLeading01 = 0;
var typeLeading01Min = -200;
var typeLeading02 = 0;
var typeLeading02Min = -200;

var alignCenter01 = true;
var alignRight01 = false;
var alignCenter02 = true;
var alignRight02 = false;

var typeXpos01 = 0;
var typeXpos01Min = -1000;
var typeXpos01Max = 1000;
var typeXpos01Step = 5;
var typeYpos01 = 0;
var typeYpos01Min = -1000;
var typeYpos01Max = 1000;
var typeYpos01Step = 10;

var typeXpos02 = 20;
var typeXpos02Min = -1000;
var typeXpos02Max = 1000;
var typeXpos02Step = 5;
var typeYpos02 = 590;
var typeYpos02Min = -1000;
var typeYpos02Max = 1000;
var typeYpos02Step = 10;

var outlineType01 = false;
var outlineType02 = false;

var rotation01 = 0;
var rotation01Min = 0;
var rotation01Max = 360;
var rotationStep = 10;
var rotation02 = 0;
var rotation02Min = 0;
var rotation02Max = 360;
var rotation02Step = 10;

// TYPE MOTION
var type01MotionA = false;
var type01MotionB = false;
var type02MotionA = false;
var type02MotionB = false;
var motionIntensity = 100;
var motionOffset01 = 1;
var motionOffset01Min = 1;
var motionOffset01Max = 10;
var motionOffset01Step = 1;
var motionOffset02 = 1;
var motionOffset02Min = 1;
var motionOffset02Max = 10;
var motionOffset02Step = 1;

// GRAPHICS
var drawCircle = true;
var drawSquare = false;
var shapeXpos = 0;
var shapeYpos = 0;
var shapeSize = 440;
var shapeSizeMin = 10;
var shapeSizeMax = 1000;
var shapeColor = '#FFFFFF'
var outlineShape = true;
var shapeMotionA = false;
var shapeMotionB = false;

// IMAGE
let img;
var useImage = false;
var imageScale = 10;
var imageScaleMin = -500;
var imageXpos = 0;
var imageYpos = 0;
var desaturate = false;

// GRID
var gridSquare = false;
var gridEllipse = false;
var xCells = 2;
var yCells = 2;
var gridColor = '#FFFFFF';

// PARALLAX
var parallax = false;

// -----------------------------------------------------------------------

function preload() {
  bagard = loadFont('assets/BagnardSans.otf');
  heal = loadFont('assets/HealTheWebB-Regular.otf');
  img = loadImage('assets/tree.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noCursor();
  let posterW = height / 6 * 4;
  let posterH = height / 6 * 5.5;
  //let posterWA3 = 842;
  //let posterHA3 = 1191;
  poster = createGraphics(posterW, posterH);
  poster.clear();
  imageMode(CENTER);
  poster.imageMode(CENTER);
  noStroke();

  textBox01 = posterW;
  textBox02 = 500;
  textBox01Max = posterW;
  textBox02Max = posterW;

  // GUI

  gui = createGui('TYPE 01').setPosition(10, 10);
  sliderRange(5, 200, 5);
  gui.addGlobals('typeContent01', 'fontSelect01', 'typeSize01', 'typeColor01', 'textBox01', 'typeLeading01', 'alignCenter01', 'alignRight01', 'typeXpos01', 'typeYpos01', 'rotation01', 'outlineType01', 'type01MotionA', 'type01MotionB', 'motionOffset01');

  gui2 = createGui('TYPE 02').setPosition(220, 10);
  sliderRange(5, 200, 5);
  gui2.addGlobals('typeContent02', 'fontSelect02', 'typeSize02', 'typeColor02', 'textBox02', 'typeLeading02', 'alignCenter02', 'alignRight02', 'typeXpos02', 'typeYpos02', 'rotation02', 'outlineType02', 'type02MotionA', 'type02MotionB', 'motionOffset02');

  gui3 = createGui('GRAPHIC').setPosition(width - 210, 10);
  sliderRange(-1000, 1000, 10);
  gui3.addGlobals('posterColor', 'motionIntensity', 'useImage', 'desaturate', 'imageScale', 'imageXpos', 'imageYpos', 'drawCircle', 'drawSquare', 'shapeXpos', 'shapeYpos', 'shapeSize', 'shapeColor', 'outlineShape', 'shapeMotionA', 'shapeMotionB');

  gui4 = createGui('GRIDS').setPosition(width - 420, 10);
  sliderRange(0, 20, 1);
  gui4.addGlobals('gridSquare', 'gridEllipse', 'xCells', 'yCells', 'gridColor');

  gui5 = createGui('INTERACTIVE').setPosition(width - 420, 270);
  sliderRange(0, 20, 1);
  gui5.addGlobals('parallax');

}

// -----------------------------------------------------------------------

function draw() {

  background(50);
  translate(-width / 2, -height / 2);
  let posterW = height / 6 * 4;
  let posterH = height / 6 * 5.5;
  let waveA = sin(radians(frameCount) * 0.8) * motionIntensity;
  let waveB = tan(radians(frameCount)) * motionIntensity;
  let waveC = cos(radians(frameCount)) * motionIntensity;

  // POSTER


  poster.background(posterColor);

  // GRID

  poster.push();
    
    poster.ellipseMode(CORNER);
    var gridSizeX = posterW/xCells;
    var gridSizeY = posterH/yCells;

  for (var x = 0; x < posterW; x += gridSizeX) {
		for (var y = 0; y < posterH; y += gridSizeY) {
			
      if (gridSquare == true){
      poster.noFill()
			poster.stroke(gridColor);
      poster.strokeWeight(2);
			poster.rect(x, y, gridSizeX, gridSizeY);
		} else

    if (gridEllipse == true){
      poster.fill(gridColor);
      poster.noStroke();
      poster.ellipse(x, y, gridSizeX, gridSizeY);
    }
	}
}
poster.pop();

  // POSTER IMAGE

  img.resize(0, posterH + 100 + imageScale);

  if ((useImage == true) && (desaturate == true)){
    poster.image(img, posterW / 2 + imageXpos, posterH / 2 + imageYpos);
    poster.filter(GRAY);
  } else
  if (useImage == true) {
    poster.image(img, posterW / 2 + imageXpos, posterH / 2 + imageYpos);
  }


  // POSTER SHAPE

  poster.push();
  poster.ellipseMode(CENTER);
  poster.rectMode(CENTER);
if (outlineShape == true){
      poster.noFill();
      poster.strokeWeight(3);
      poster.stroke(shapeColor);
} else {
  poster.fill(shapeColor);
  poster.noStroke();
}

if ((drawCircle == true) && (shapeMotionA == true) && (drawSquare == false)){
  poster.circle(posterW / 2 + shapeXpos + waveA, posterH / 2 + shapeYpos + waveC, shapeSize);
} else

if ((drawCircle == true) && (shapeMotionB == true) && (drawSquare == false)){
  poster.circle(posterW / 2 + shapeXpos, posterH / 2 + shapeYpos, shapeSize + waveB);
} else

if ((drawCircle == true) && (drawSquare == false)){
  poster.circle(posterW / 2 + shapeXpos, posterH / 2 + shapeYpos, shapeSize);
} else

if ((drawCircle == false) && (shapeMotionA == true) && (drawSquare == true)){
  poster.square(posterW / 2 + shapeXpos + waveA, posterH / 2 + shapeYpos + waveC, shapeSize);
} else

if ((drawCircle == false) && (shapeMotionB == true) && (drawSquare == true)){
  poster.square(posterW / 2 + shapeXpos, posterH / 2 + shapeYpos, shapeSize + waveB);
} else

if ((drawCircle == false) && (drawSquare == true)){
  poster.square(posterW / 2 + shapeXpos, posterH / 2 + shapeYpos, shapeSize);
}

  poster.pop();

  // POSTER TEXT

  poster.rectMode(CORNER);

  // TYPE 01

  poster.push();

  var index01;
  var fontStyle01 = [heal, bagard, "Inter"];
  switch (fontSelect01) {

    case 'heal':
      index01 = 0;
      break;

    case 'bagard':
      index01 = 1;
      break;

    case 'inter':
      index01 = 2;
      break;
  }


  if ((alignCenter01 == true) && (alignRight01 == false)) {
    poster.textAlign(CENTER);
  } else if ((alignCenter01 == false) && (alignRight01 == true)) {
    poster.textAlign(RIGHT);
  } else {
    poster.textAlign(LEFT);
  }

  if (outlineType01 == true) {
    poster.strokeWeight(3);
    poster.stroke(typeColor01);
    poster.noFill();
  } else {
    poster.fill(typeColor01);
    poster.noStroke();
  }

  poster.textSize(typeSize01);
  poster.textLeading(typeSize01 + typeLeading01);
  poster.textFont((fontStyle01[index01]));
  poster.rotate(radians(rotation01));

  if (type01MotionA == true) {
    poster.text(typeContent01, typeXpos01, typeYpos01 + waveB * motionOffset01, textBox01, poster.height);
  } else

    if (type01MotionB == true) {
      poster.text(typeContent01, typeXpos01 + waveB * motionOffset01, typeYpos01, textBox01, poster.height);
    } else {
      poster.text(typeContent01, typeXpos01, typeYpos01, textBox01, poster.height);
    }

  poster.pop();

  // TYPE 02

  poster.push();

  var index02;
  var fontStyle02 = ["Inter", bagard, heal];
  switch (fontSelect02) {

    case 'inter':
      index02 = 0;
      break;

    case 'bagard':
      index02 = 1;
      break;

    case 'heal':
      index02 = 2;
      break;
  }

  if ((alignCenter02 == true) && (alignRight02 == false)) {
    poster.textAlign(CENTER);
  } else if ((alignCenter02 == false) && (alignRight02 == true)) {
    poster.textAlign(RIGHT);
  } else {
    poster.textAlign(LEFT);
  }

  if (outlineType02 == true) {
    poster.strokeWeight(3);
    poster.stroke(typeColor02);
    poster.noFill();
  } else {
    poster.fill(typeColor02);
    poster.noStroke();
  }

  poster.textSize(typeSize02);
  poster.textLeading(typeSize02 + typeLeading02);
  poster.textFont((fontStyle02[index02]));
  poster.rotate(radians(rotation02));

  if (type02MotionA == true) {
    poster.text(typeContent02, typeXpos02, typeYpos02 + waveB * motionOffset02, textBox02, poster.height);
  } else

    if (type02MotionB == true) {
      poster.text(typeContent02, typeXpos02 + waveB * motionOffset02, typeYpos02, textBox02, poster.height);
    } else {
      poster.text(typeContent02, typeXpos02, typeYpos02, textBox02, poster.height);
    }

  poster.pop();

  image(poster, width / 2, height / 2);

  // SKETCH
  
  push();
  fill(255);
  stroke(typeColor01);
  strokeWeight(1);
  //circle(mouseX, mouseY, 30);
  translate(mouseX, mouseY, 50);
  sphere(20);
  pop();

    // CAMERA

    var xParallax = map(mouseX,0,width,200,-200);
    var yParallax = map(mouseY,0,height,200,-200);

    if (parallax == true){
    camera(xParallax, yParallax, (height/2) / tan(PI/6), 0, 0, 0, 0, 1, 0);
    } else {
      camera(0, 0, (height/2) / tan(PI/6), 0, 0, 0, 0, 1, 0);
    }

}

// -----------------------------------------------------------------------

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
  if (keyCode === ENTER) {
  poster.save('my_poster.png');
}
}

// function keyPressed() {
//   if (keyCode === SHIFT) {

//   }
// }