// 最終課題を制作しよう

// テキスト「キーボード操作に反応する」
 // ジャンプ力（いろいろな値を試してみましょう）


// テキスト「キーボード操作に反応する」
// テキスト「キーボード操作に反応する」
let x, y, vy;
const g = 1.3;     // 重力（いろいろな値を試してみましょう）
const jump = 25; // ジャンプ力（いろいろな値を試してみましょう）


function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height - 40;
  vy = 0

}

function draw(){
  background(160, 192, 255);
  if(x< width*2/3-25){
  ellipse(x, y, 50);
  }
  else if(x> width*2/3-25){
    ellipse(x,y, 50)
  }
  line(0, height-15, width*2/3, height-15);
  line(width*2/3, height-15, width*2/3,height-200);
  line(width*2/3, height-200, width, height-200);

  if(keyIsDown(RIGHT_ARROW)&&x>= width*2/3-27&&y<=height - 40&&y>height-225){ x += 0; }
  else if(keyIsDown(RIGHT_ARROW)){x += 2;}
  if(keyIsDown("A".charCodeAt(0))&&x>=width*2/3-27&&y<=height - 40&&y>height-225){ x += 0; }
  else if(keyIsDown("A".charCodeAt(0))&&keyIsDown(RIGHT_ARROW)){ x+= 3; }
  
  if(keyIsDown(LEFT_ARROW)){ x -= 2; }
  
  if(keyIsDown("A".charCodeAt(0))&&keyIsDown(LEFT_ARROW)){ x-= 3; }
  
  y += vy;
  if(y < height-225&&x> width*2/3-25||y<height-40&&x< width*2/3-20){ // 地面より上、つまり空中にいる
    vy += g; // 下方向に重力の影響で加速する
  }
  else if (x> width*2/3-25){
    vy = 0;
    y = height-225;
  }
  else if(x<= width*2/3-24){
    vy = 0;
    y = height-40;
  }
}

function keyPressed(){
  if(key == " "&&y >=height-225&&x> width*2/3-25||key == " "&&y >= height - 40&&x< width*2/3-25){ // 地面にいるときだけジャンプできる（この条件をなくせば空中ジャンプが可能になります） 
    vy = -jump;     
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}