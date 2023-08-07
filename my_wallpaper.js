//your parameter variables go here!
let orange_size = 50; //changes the size of orange
let orange_posx = 50; // x position of the orange 
let orange_posy = 50; //y position of the ornage

let orangeslice_xy = 33; //first xy point of left diagonal line
let orangeslice_yx = 67; // bottom xy point of left diagonal line

let orangeone_size = 1.5; // changes the size of the whole orange 
let orangetwo_size = 1; 


let strawberry_posx = -50; // changes x position of strawberry on page 
let strawberry_posy = strawberry_posx + 20; // changes y position of strawberry on page relative to the x position 
let strawberry_size = 1; //changes size of whole strawberry

let watermelon_size = 1; //changes size of whole watermelon

let cherryOn = false;

let othercherryOn = false;

let strawberryOn = false;

let watermelonOn = true;

let orangeOn = false;





function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(NINE_PORTRAIT);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  //if statement background colour 
if (strawberry_size == 1) { background(200, 232, 255); }
else {background('#5C7AFF'); }

if (watermelonOn == false) { background('#F61379'); }
else { fill('#ff9f1c' );}
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  
  angleMode(DEGREES);


if (orangeOn == true) { 
  //orange 1
push();
//translate();
scale(orangeone_size);
fill('#ff9f1c' );//orange
stroke('#FFFFFF'); //notshowing
strokeWeight(0);
circle(orange_posx, orange_posy, orange_size +5); //underneath orange

fill('#ff9f1c' );//orange
stroke('#FFFFFF'); //white outterline
strokeWeight(1);
circle(orange_posx, orange_posy, orange_size); //Orange

line(orangeslice_xy, orangeslice_xy, orangeslice_yx, orangeslice_yx) //left diagonal
line( 50, 75, 50, 25) // middle vertical line
line( orangeslice_yx, orangeslice_xy, orangeslice_xy, orangeslice_yx) // right diagonal line
line( 75, 50, 25, 50) // middle horizontal line

pop();


//ornage two 
push();
translate(100,100);
scale(orangetwo_size);
fill('#ff9f1c' );//orange
stroke('#FFFFFF'); //notshowing
strokeWeight(0);
circle(orange_posx+5, orange_posy +5, orange_size +10); //underneath orange

fill('#ff9f1c' );//orange
stroke('#FFFFFF'); //white outterline
strokeWeight(1);
circle(orange_posx+5, orange_posy+5, orange_size+5); //Orange

line(36, 36, 74, 74) //left diagonal
line( 55, 82, 55, 28) // middle vertical line
line( 74, 36, 36, 74) // right diagonal line
line( 82, 55, 28, 55) // middle horizontal line

pop();
}

if(cherryOn == true){

//cherrys 1
push();
translate (-60,60);
stroke('#008000'); //green stalk
strokeWeight(2);
line( 100, 90, 110, 60) // left stalk
line( 110, 60, 125, 100) // right stalk

fill('#D2042D' );//red
stroke('#008000'); //not showing
strokeWeight(0);

circle(100, 100, 20); //cherrys
circle(122, 100, 20); //cherrys


fill('#008000' );//green leaf
rotate(-30);
ellipse(72, 122, 20,5); // leaf
pop();
}

if (othercherryOn == true) { 
//cherrys 2
translate (100,40);
scale(0.6);
stroke('#008000'); //green stalk
strokeWeight(2);
line( 100, 90, 110, 60) // left stalk
line( 110, 60, 125, 100) // right stalk

fill('#D2042D' );//red
stroke('#008000'); //not showing
strokeWeight(0);

circle(100, 100, 20); //cherrys
circle(122, 100, 20); //cherrys

push();
fill('#008000' );//green leaf
rotate(-30);
ellipse(72, 122, 20,5); // leaf
pop();

}

//strawberry

if(strawberryOn == true)
{ push()
  stroke('#f21d52' );//pink
  fill('#f21d52')
  
  strokeWeight(10)
  strokeJoin(ROUND); //outline of strawberry
  //noFill()
  
  translate (strawberry_posx, strawberry_posy); //position of strawberry
  scale(strawberry_size); //size of strawberry
  
  
  beginShape();
  vertex(30, 20); // triangle for strawberry
  vertex(80, 20);
  vertex(55, 75);
  
  endShape(CLOSE);
  
  translate (55,10);
  scale(0.6);
  stroke('#123613' );//green leaves 
  fill('#123613')
  
  strokeWeight(0)
  fill(9, 105, 9); //green
  
  rotate(150);
  ellipse(30, 0, 45,15); // leaf4
  
  
  rotate(-30);
  ellipse(30, 0, 45,12); // leaf of strawberry
  
  rotate(-30);
  ellipse(30, 0, 45,12); // leaf of strawberry
  
  rotate(-30);
  ellipse(30, 0, 45,12); // leaf of strawberry
  
  rotate(-30);
  ellipse(30, 0, 45,12); // leaf of strawberry
  
  circle(3, 5, 20); //circle to join leaves of strawberry
  
  
  fill(0); //black seeds
  rotate(60);
  ellipse(50, -15, 8,3); // strawberry seeds
  
  rotate(0);
  ellipse(50, 15, 8,3); // strawberry seeds
  
  rotate(0);
  ellipse(70, 20, 8,3); // strawberry seeds
  
  rotate(0);
  ellipse(70, 5, 8,3); // strawberry seeds
  
  rotate(0);
  ellipse(70, -10, 8,3); // strawberry seeds
  
  rotate(0);
  ellipse(70, -20, 8,3); // strawberry seeds
  
  rotate(0);
  ellipse(90, 10, 8,3); // strawberry seeds
  
  rotate(0);
  ellipse(90, 0, 8,3); // strawberry seeds
  
  rotate(0);
  ellipse(90, -10, 8,3); // strawberry seeds
  
  rotate(0);
  ellipse(110, 0, 8,3); // strawberry seeds
  
  pop();}




//watermelon 

if (watermelonOn == true) { 
push();
translate(30,-20);
scale(watermelon_size);

push();
fill('#123613') 
scale(2.4);
translate (60,48);
rotate(150);
arc(80, 80, 50, 50, 185, PI + QUARTER_PI, PIE);
pop();


push();
fill('#FFBBB4') 
scale(2);
translate (50,51);
rotate(150);
arc(80, 80, 50, 50, 185, PI + QUARTER_PI, PIE);
pop();

push();
fill('#F35588') 
scale(1.7);
translate (40,55);
rotate(150);
arc(80, 80, 50, 50, 185, PI + QUARTER_PI, PIE);
pop();

push ();
translate(-20,-10);

fill('#FFFFFF') 

rotate(-80);
ellipse(-70, -60, 10,5); // watermelon seeds

rotate(-80);
ellipse(70, -90, 10,5); // watermelon seeds

rotate(-80);
ellipse(100, 20, 10,5); // watermelon seeds

rotate(-80);
ellipse(-20, 130, 10,5); // watermelon seeds

rotate(-80);
ellipse(-110, 5, 10,5); // watermelon seeds

rotate(-80);
ellipse(-10, -140, 10,5); // watermelon seeds
}
pop();

pop();
}
