var timeAa = new Date()
var day = timeAa.getDate();
var month = timeAa.getUTCMonth() +1;
var year = timeAa.getFullYear();
var hours = timeAa.getHours();
var minutes = timeAa.getMinutes();

console.log(`*******${day} / ${month} / ${year}********`)
console.log(`Time right now -- ${hours}:${minutes}`);


if (hours <= 12) {
  console.log(`Good morning!`);
} else if (hours > 12) {
  console.log(`Good afternoon!`);
} else {
  console.log(`Good night!`);
}
 