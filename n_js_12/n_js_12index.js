//先ほどの時間あてゲームにおいて、 start と stop という関数で書かれていた箇所も、
//時間あてゲームの振る舞いの一部として game オブジェクト内に表現してみましょう。

let game = {
  startTime: null,
  displayArea: document.getElementById('display-area'),
  start: function() {
    game.startTime = Date.now();
    document.body.onkeydown = game.stop;
  },
  stop: function() {
    let currentTime = Date.now();
    let seconds = (currentTime - game.startTime) / 1000;
    if (9.5 <= seconds && seconds <= 10.5) {
      game.displayArea.innerText = seconds + '秒でした。すごい。';
    } else {
      game.displayArea.innerText = seconds + '秒でした。残念。';
    }
  }
};
if (confirm('OKを押して10秒だと思ったら何かキーを押して下さい')) {
  game.start();
}


/*let game = {
  startTime: null,
  displayArea: document.getElementById('display-area')
};
function start() {
  game.startTime = Date.now();
  document.body.onkeydown = stop;
}
function stop() {
  let currentTime = Date.now();
  let seconds = (currentTime - game.startTime) / 1000;
  if (9.5 <= seconds && seconds <= 10.5) {
    game.displayArea.innerText = seconds + '秒でした。すごい。';
  } else {
    game.displayArea.innerText = seconds + '秒でした。残念。';
  }
}
if (confirm('OKを押して10秒だと思ったら何かキーを押して下さい')) {
  start();
}*/