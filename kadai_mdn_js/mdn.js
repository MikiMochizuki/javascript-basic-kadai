function formatDate(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // 月は0から始まるため、1を足す
  const day = date.getDate();

  return `${year}年${month}月${day}日`;
}

const today = new Date();
const formattedDate = formatDate(today);

console.log(formattedDate); // 例: 2024年7月20日
