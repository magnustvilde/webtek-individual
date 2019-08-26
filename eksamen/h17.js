// var age = prompt("Type in ur age: ");
// var next = age + 1;
// alert("On your next birthday, you'll be " + next);
// console.log("Onyour next birthday, you'll be " + next);

book = new Array(1,2,3,4,5,6,7,8);
document.write(book[1]);
book[10]=10;
document.write(book[10]);

//a function receiving a date
var xMas = new Date("2018-12-24");
var inDays = null;
function daysUntilXmas(str) {
	var today = new Date(str);
   var xmasMs = Date.parse(String(xMas));
   var todayMs = Date.parse(today);
   console.log("1970 - Xmas : " + xmasMs);
   console.log("1970 - today : " + xmasMs);
   var difference = xmasMs-todayMs;
   var inDays = difference/(1000*60*60*24)
   console.log("Milliseconds left: " + difference);
   console.log("Days left: " + inDays);

	return inDays;
}
daysUntilXmas("2018-12-17");
