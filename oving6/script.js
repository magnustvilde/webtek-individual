
var income = document.getElementById("income");
var wealth = document.getElementById("wealth");
var tax = document.getElementById("tax");
var button = document.getElementById("submitButton");
var calculatedTax;

income.addEventListener("input", updateTax);
wealth.addEventListener("input", updateTax);

function updateTax() {
   calculate(income.value,wealth.value);
   tax.value = calculatedTax;
}

function calculate(inc, wea) {
   calculatedTax = (0.35 * inc) + (0.25 * wea);
   console.log(calculatedTax);
}
