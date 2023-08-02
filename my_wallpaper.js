//your parameter variables go here!
let orange_size = 50; //changes the size of orange
let orange_posx = 50; // x position of the orange 
let orange_posy = 50; //y position of the ornage

let orangeslice_xy = 33; //first xy point of left diagonal line
let orangeslice_yx = 67; // bottom xy point of left diagonal line

let wholeorange_size = 0.5; // changes the size of the whole orange 







function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(200, 232, 255); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  
  angleMode(DEGREES);

push();
//translate();
scale(wholeorange_size);
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

//cherrys
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
