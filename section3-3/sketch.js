// テキスト「キーボード操作に反応する」
let x, y, vy;
const g = 1;     // 重力（いろいろな値を試してみましょう）
const jump = 20; // ジャンプ力（いろいろな値を試してみましょう）


function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height - 25;
  vy = 0

}

function draw(){
  background(160, 192, 255);
  ellipse(x, y, 50);
  
  if(keyIsDown(LEFT_ARROW)){ x -= 5; }
  if(keyIsDown(RIGHT_ARROW)){ x += 5; }
  if(keyIsDown("A".charCodeAt(0))&&keyIsDown(RIGHT_ARROW)){ x+= 10; }
  if(keyIsDown("A".charCodeAt(0))&&keyIsDown(LEFT_ARROW)){ x-= 10; }
  y += vy;
  if(y < height - 25){ // 地面より上、つまり空中にいる
    vy += g; // 下方向に重力の影響で加速する
  }
  else{
    vy = 0;
    y = height - 25;
  }
}

function keyPressed(){
  if(key == " "&&y >= height - 25){ // 地面にいるときだけジャンプできる（この条件をなくせば空中ジャンプが可能になります）
    vy = -jump;     
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
