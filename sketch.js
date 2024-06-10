function setup() {
    //cria uma tela de 400px de largura por 400px de altura
    createCanvas(600, 600);
    background("black")
  }
  
  function draw() {
  stroke("black");
  fill("purple");
    
    if (mouseIsPressed); {
      rect(mouseX, mouseY, 20, 35);
    }
  }
