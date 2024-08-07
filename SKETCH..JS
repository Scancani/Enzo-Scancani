function setup() {
  createCanvas(600, 600);
   background("black");
}

 function draw() {
   stroke("black");
   fill("red");
  
  if(mouseIsPessed){
    rect(mouseX,mouseY,20,35);
  }
  
}