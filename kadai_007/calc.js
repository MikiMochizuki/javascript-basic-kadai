//変数を１～１００とする//
const min = 1;
const max = 100;
//変数に１～１００までのランダムな整数を代入する//
let num = Math.floor(Math.random() * (max - min + 1)) + min;

// 変数numの値を出力する（確認用）
console.log(num);

// 3と5の倍数かどうかをチェックして分岐する
if (num % 3 === 0 && num % 5 === 0) {
  console.log("3と5の倍数です");
} else if (num % 3 === 0) {
  console.log("3の倍数です");
} else if (num % 5 === 0) {
  console.log("5の倍数です");
} else {
  console.log(num);
}
