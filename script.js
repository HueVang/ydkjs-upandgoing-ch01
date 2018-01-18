const TAX_RATE = 0.065;
const PHONE_PRICE;
const ACCESSORY_PRICE;
const SPENDING_TRESHOLD;

var bank_balance;

bank_balance = prompt("Please enter your bank account balance: ");


var calc_tax = (amount) => {
  return amount * TAX_RATE;
}

var format_price = (amount) => {
  return "$" + String(amount.toFixed(2));
}
