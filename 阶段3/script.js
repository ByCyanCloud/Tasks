
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highscore = 0;
console.log(secretNumber);
document.querySelector(".bt").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guessContentInput").value);

  // 没有输入数字
  if (!guess) {
    document.querySelector(".tips").textContent = "请输入数字!";
  }

  // 正确答案
  else if (guess === secretNumber) {
    if (score > highscore) {
      document.querySelector(".highScores").textContent = score;
    }
    document.querySelector(".tips").textContent = "答案正确!";
    document.querySelector(".scores").textContent = score;
    document.querySelector("body").style.backgroundColor = "rgb(180, 255, 226)";
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector(".tips").textContent =
        guess > secretNumber ? "大了" : "小了";
      document.querySelector(".scores").textContent = score;
    } else {
      document.querySelector(".tips").textContent = "你输了!";
    }
  }

});

document.querySelector(".agains").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 10;
  guess = "";
  document.querySelector("body").style.backgroundColor = "";
  document.querySelector(".scores").textContent = "10";
  document.querySelector(".tips").textContent = "开始猜数字!";
});

document.querySelector(".renews").addEventListener("click", function () {
  highscore = 0;
  document.querySelector(".highScores").textContent = highscore;
  document.querySelector(".guessContentInput").value = "";
});
