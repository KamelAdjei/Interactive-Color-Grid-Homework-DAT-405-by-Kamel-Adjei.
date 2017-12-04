
var Size = 50;

function setup() {
  createCanvas(500, 500); //Use this function to define the size of the output window
  stroke(255);
}

function draw() {
  background(0); //Set your background color to black (0)

  //These 3 variables hold the mapped values from the mouse position
  var mouse1 = map(mouseY, 0, height, 0, 255);
  var mouse2 = map(mouseX, 0, width, 0, 255);
  var mouse3 = map(mouseY, 0, width, 255, 0);

//use the mouse variables to control  these color values
  var color1 = color(255, 37, 54, 255);
  var color2 = color(136, 194, 203, mouse1);
  var color3 = color(136, 194, 203, mouse2);
  var color4 = color(249, 158, 46, mouse3);

  //The nested for-loop creates the grid, and according to the position of the mouse,
  //the fill color of the shape will be different
  for (var y = 0; y < height; y+=Size) {
    for (var x = 0; x < width; x+=Size) {

      if(mouseX>x && mouseX<x+Size && mouseY>y && mouseY<y+Size) fill(color1);
      else if (mouseX>x && mouseX<x+Size) fill(color2);
      else if (mouseY>y && mouseY<y+Size) fill(color3);
      else fill(color4);
      rect(x, y,Size, Size);
    }
  }
}
