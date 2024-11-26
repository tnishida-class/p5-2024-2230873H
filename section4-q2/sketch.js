// テキスト「配列を使った描画」練習問題：円グラフ

function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(20, 100); // 60以上100未満のランダムな数を代入
  }

  // 円グラフを描くには割合が必要なので合計を計算しておく
  let total = 0;
  for(let i = 0; i < scores.length; i++){ total += scores[i]; }
  console.log(total);
  // BLANK[1]

  fill(179,18,98);

  arc(200, 200, 150, 150, 0, TWO_PI*scores[1]/total,PIE);
  arc(200, 200, 150, 150, TWO_PI*scores[1]/total, TWO_PI*scores[1]/total+TWO_PI*scores[2]/total,PIE);
  arc(200, 200, 150, 150,  TWO_PI*scores[1]/total+TWO_PI*scores[2]/total, TWO_PI*scores[1]/total+TWO_PI*scores[2]/total+TWO_PI*scores[3]/total,PIE);
  arc(200, 200, 150, 150,  TWO_PI*scores[1]/total+TWO_PI*scores[2]/total+TWO_PI*scores[3]/total, TWO_PI*scores[1]/total+TWO_PI*scores[2]/total+TWO_PI*scores[3]/total+TWO_PI*scores[4]/total,PIE);
  arc(200, 200, 150, 150,  TWO_PI*scores[1]/total+TWO_PI*scores[2]/total+TWO_PI*scores[3]/total+TWO_PI*scores[4]/total, TWO_PI*scores[1]/total+TWO_PI*scores[2]/total+TWO_PI*scores[3]/total+TWO_PI*scores[4]/total+TWO_PI*scores[5]/total,PIE);
  arc(200, 200, 150, 150,  TWO_PI*scores[1]/total+TWO_PI*scores[2]/total+TWO_PI*scores[3]/total+TWO_PI*scores[4]/total+TWO_PI*scores[5]/total, TWO_PI*scores[1]/total+TWO_PI*scores[2]/total+TWO_PI*scores[3]/total+TWO_PI*scores[4]/total+TWO_PI*scores[5]/total+TWO_PI*scores[6]/total,PIE);
  arc(200, 200, 150, 150,  TWO_PI*scores[1]/total+TWO_PI*scores[2]/total+TWO_PI*scores[3]/total+TWO_PI*scores[4]/total+TWO_PI*scores[5]/total+TWO_PI*scores[6]/total, TWO_PI*scores[1]/total+TWO_PI*scores[2]/total+TWO_PI*scores[3]/total+TWO_PI*scores[4]/total+TWO_PI*scores[5]/total+TWO_PI*scores[6]/total+TWO_PI*scores[7]/total,PIE);
  arc(200, 200, 150, 150,  TWO_PI*scores[1]/total+TWO_PI*scores[2]/total+TWO_PI*scores[3]/total+TWO_PI*scores[4]/total+TWO_PI*scores[5]/total+TWO_PI*scores[6]/total+TWO_PI*scores[7]/total, TWO_PI*scores[1]/total+TWO_PI*scores[2]/total+TWO_PI*scores[3]/total+TWO_PI*scores[4]/total+TWO_PI*scores[5]/total+TWO_PI*scores[6]/total+TWO_PI*scores[7]/total+TWO_PI*scores[8]/total,PIE);
  arc(200, 200, 150, 150,  TWO_PI*scores[1]/total+TWO_PI*scores[2]/total+TWO_PI*scores[3]/total+TWO_PI*scores[4]/total+TWO_PI*scores[5]/total+TWO_PI*scores[6]/total+TWO_PI*scores[7]/total+TWO_PI*scores[8]/total, TWO_PI*scores[1]/total+TWO_PI*scores[2]/total+TWO_PI*scores[3]/total+TWO_PI*scores[4]/total+TWO_PI*scores[5]/total+TWO_PI*scores[6]/total+TWO_PI*scores[7]/total+TWO_PI*scores[8]/total+TWO_PI*scores[9]/total,PIE);
  arc(200, 200, 150, 150,  TWO_PI*scores[1]/total+TWO_PI*scores[2]/total+TWO_PI*scores[3]/total+TWO_PI*scores[4]/total+TWO_PI*scores[5]/total+TWO_PI*scores[6]/total+TWO_PI*scores[7]/total+TWO_PI*scores[8]/total+TWO_PI*scores[9]/total,0,PIE);





  }


