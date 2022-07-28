function reverse(n){
	n = n + "";
	return n.split("").reverse().join("");
}
var num = prompt("Enter a number to reverse: ");
var reversed_num = Number(reverse(num));
console.log(reversed_num);