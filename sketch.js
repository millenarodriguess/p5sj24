function setup() {
  createCanvas(400, 400);

let xJogador1 = 0;
let xJogador2 = 0;

function draw() {
  background(220);
  textSize(40);
  text("😊", xJogador1, 100);
  text("😁", xJogador2, 180);
  rect(350, 0, 10, 400);
  
  function keyReleaser() {
    if (key=="a") {
      XJogador1=XJogador1+random(5);
    }
 if(key=="s") {
    XJogador2=Jogador2+random(5)
 }
 }      

  if (xJogador1 > 350) {
    text("Jogador 1 venceu!", 20, 200);
    noLoop();
  }
  if (xJogador2 > 350) {
    text("Jogador 2 venceu!", 20, 200);
    noLoop();
  }