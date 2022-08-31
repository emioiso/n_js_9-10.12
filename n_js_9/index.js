//【Q】Fizz Buzz （フィズ・バズ）を実装してみましょう。
//Fizz Buzz とは、数字を数えていく英語圏の言葉遊びで、
//1 から順番に数字を発言していくものです。

for(let i =1 ; i <= 100; i++){
  if(i % 15 === 0){
    document.write('Fizz Buzz');
  }else if(i % 3 === 0){
    document.write('Fizz');
  }else if(i % 5 === 0){
    document.write('Buzz');
  } else{
    document.write(i);
  }
  document.write('<br>');
}

// やりたいこと
// 10から0までのカウントダウンをしたい
//for(let i =10; i >= 0 ; i--){
  // console.log('i:', i);
  // document.write('emidayo!');
  //document.write('あと' + i + '日<br>');
//}



/*  for (let i = 1; i<=100000; i++){
  document.write(i+' ');
 }

for (let i = 1; i<=100000; i++){
  document.write(i+);
 } */