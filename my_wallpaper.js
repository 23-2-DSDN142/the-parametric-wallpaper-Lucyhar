//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;
let backgroundcirc_size = 4;
let circ_position = 150;
let flower_size = 90;

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
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
  

  fill(71, 71, 71); //grey  
  circle(360, circ_position, backgroundcirc_size);   
  circle(380, circ_position, backgroundcirc_size);   
  circle(400, circ_position, backgroundcirc_size); 
  circle(420, circ_position, backgroundcirc_size); 
  circle(440, circ_position, backgroundcirc_size);  

  push();
  translate(100, 130);
  
  stroke(9, 105, 9);
  strokeWeight(2);

  rotate(-20);
  fill(9, 105, 9); //green
  ellipse(30, 0, 55,15); // leaf4
  rotate(-30);
  ellipse(30, 0, 45,12); // leaf

  stroke(255, 140, 148);
  strokeWeight(0);
  
  if (flower_size == 90){
    fill(255,255,255)//white
  }
  else {
    fill(157, 105, 240)//purple 
  }

  ellipse(0, 0, 80,30); // petal
  ellipse(0, 0, 25,flower_size); // petal

  rotate(45);
  ellipse(0, 0, 25,flower_size); //petal
  rotate(90);
  ellipse(0, 0, 25,flower_size); //petal
  pop();
  fill(252, 177, 0); //yellow


  stroke(255, 140, 148);
  strokeWeight(0);
  circle(100, 130,30); // middle
 

}


