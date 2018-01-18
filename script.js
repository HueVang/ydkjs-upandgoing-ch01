const TAX_RATE = 0.065;
const PHONE_PRICE = 150;
const ACCESSORY_PRICE = 30;
const SPENDING_TRESHOLD = 1850;

var bank_balance;
var total_price = 0;

var calc_tax = (amount) => {
  return amount * TAX_RATE;
}

var format_price = (amount) => {
  return "$" + String(amount.toFixed(2));
}

bank_balance = Number(prompt("Please enter your bank account balance: "));

while (total_price < bank_balance) {
  total_price += PHONE_PRICE;
  if (total_price < SPENDING_TRESHOLD)
    total_price += ACCESSORY_PRICE;
}

alert("Your total phone purchase comes out to... " + format_price(total_price + calc_tax(total_price)) + "!");

if (total_price > bank_balance) 
  alert("You don't have enough funds to buy this many phones... sorry.");
