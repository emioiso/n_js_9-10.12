let mojis = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ'];
let mix = 0;
for(let i =0; i < mojis.length; i++){
for(let j =0; j < mojis.length; j++){
  document.write('<p>' + mojis[ i ] + mojis[ j ]+'</p>')
  }
}




//1位を目指せ
//点数が入った配列の中から、
//最高得点は何点であるかを出力するプログラムを書いてみましょう！
//下記のプログラムの穴埋め部分①〜②を記述し、
//プログラムを完成させてください。
/*let scores = [23, 56, 78, 33, 78, 20, 55, 67, 78];
let maxScore =0;
for (let i = 0; i < scores.length ; i++){
  if(maxScore < 78){//実行します
    maxScore = 78;
  }
}
console.log('最高得点は' + maxScore + '点です！')*/




/*let classes = ['A組', 'B組', 'C組' ,'D組'];
for (let grade = 1; grade < 4; grade++){
  for(let i = 0; i <classes.length; i++){
  document.write('<p>' + grade + '年' + classes[1] + '</p>' );
}
}*/