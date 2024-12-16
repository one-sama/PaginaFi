
let rightAngle =0;
let leftAngle = 0;
let pupilas = 25;
let posicionPup=0;
let canvasEcho=document.getElementById("elCanvas");
let opacidad=0;
let cont=0;
function setup() {
    createCanvas(400, 400,canvasEcho);
    colorMode(HSB);
  
    // Set angle mode so that atan2() returns angles in degrees
    angleMode(DEGREES);
  
    describe('Two eyes that follow the cursor.');
  }
  
  function draw() {
     
    background(0);
  
    // Draw left eye
  
    let leftX = 150;
    let leftY = 200;
  
    // Calculate angle between left eye and mouse
    
  
    push();
    translate(leftX, leftY);
    fill(255);
    ellipse(0, 0, 50, 50);
    rotate(leftAngle);
    fill(0);
    translate(posicionPup, 0);
    ellipse(12.5, 0, pupilas, pupilas);
    pop();

    push();
    fill(0, opacidad, opacidad);
    translate(180, 160);
    ellipse(100, 100, 80, 40);
    pop();

    
  
    // Draw right eye
  
    let rightX = 250;
    let rightY = 200;
  
    // Calculate angle between right eye and angle
     
  
    push();
    translate(rightX, rightY);
    fill(255);
    ellipse(0, 0, 50, 50);
    rotate(rightAngle);
    fill(0);
    translate(posicionPup, 0);
    ellipse(12.5, 0, pupilas, pupilas);
    pop();

    push();
    fill(0, opacidad, opacidad);
    translate(20, 160);
    ellipse(100, 100, 80, 40);
    pop();
    
    if (mouseIsPressed == false) {
     cont=0;
        if(pupilas>25){
            pupilas = (pupilas - 1);
        }

        
          if(opacidad>0){

            opacidad=(opacidad-1);
    
          }
      

         leftAngle = atan2(mouseY - leftY, mouseX - leftX);
         rightAngle = atan2(mouseY - rightY, mouseX - rightX);
         posicionPup=0;
    }else{
      
        if(pupilas<45){
          pupilas = (pupilas + 1);
          
        }
    
      cont=(cont+1);
      if(cont>=60){

        if(opacidad<100){

          opacidad=(opacidad+1);

        }


      }
    
      leftAngle = 0;
      rightAngle = 0;
      posicionPup=-12;
    }
    
 

  }



  