/*コラッツ問題をシミュレーションする関数を作成してみましょう。
コラッツ問題とは、まだ証明されていない数学の問題です。
これは、任意の正の整数 n に対して
n が偶数である場合は、 n を 2 で割る。
n が奇数である場合は、 n に 3 をかけて 1 を足す。
という手順を繰り返していくと、どういうわけか 1 に辿りつくというものです。
collatz(n) という関数を作成して、引数の n に対して処理を行なっていく
プログラムを記述せよ。
この問題は、関数の中で関数をさらに実行する再帰関数と呼ばれる関数のように
作成していくと良いでしよう。
例えば n が偶数である場合に、n を 2 で割り、
再び関数を実行するようなプログラムは下記のように書くことができます。

function collatz(n) {
  if (n % 2 === 0) {
    collatz(n / 2);
  }
} */


function collatz(n) {
  console.log(`n の値が ${n} になりました。`);
  if (n === 1) {
    console.log(`終了`);
  } else if (n % 2 === 0){
    collatz(n / 2);
  } else {
    collatz(n * 3 + 1);
  }
}
collatz(9999);


//あっちの饅頭(まんじゅう)の方が大きい
//どのような半径に対しても面積を求められる関数を作りましょう。
//そして、その関数を用いて半径 5cm, 10cm, 15cm の円の面積を 
//HTML に出力するプログラムを書いてみましょう。
//円の面積は 半径 × 半径 × 3.14 で求められます。

//下記のプログラムの穴埋め部分①〜②を記述し、
//プログラムを完成させてください。

/*function areaOfCircle(r) {
  let area = r * r * 3.14 ;
  return area;
}
document.write('<p>半径 5cm の円の面積は ' + areaOfCircle(5) + 'です。</p>');
document.write('<p>半径 10cm の円の面積は ' + areaOfCircle(10) + 'です。</p>');
document.write('<p>半径 15cm の円の面積は ' + areaOfCircle(15) + 'です。</p>');*/




/*生まれてから秒計算
let myBirthTime = new Date('1992-02-09 23:00'); 
function updatePragraph(){
  let now = new Date();
let seconds = (now.getTime() - myBirthTime.getTime()) / 1000;
document.getElementById('birth-time').innerText =
 '生まれてから' + seconds + '秒経過。';
}
setInterval(updatePragraph,50);*/
