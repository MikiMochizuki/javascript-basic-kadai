// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById("btn");
// btnというidを持つHTML要素を取得し、定数に代入する
const text = document.getElementById("text");

btn.addEventListener("click", () => {
  // 2秒後（2000ミリ秒）に非同期処理を実行する
  setTimeout(() => {
    text.textContent = "ボタンをクリックしました";
  }, 2000);
});
