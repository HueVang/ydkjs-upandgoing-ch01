const TAX_RATE = 0.065;
const PHONE_PRICE = 150;
const ACCESSORY_PRICE = 30;
const SPENDING_TRESHOLD = 1850;

var bank_balance;

bank_balance = prompt("Please enter your bank account balance: ");

var calc_tax = (amount) => {
  return amount * TAX_RATE;
}

var format_price = (amount) => {
  return "$" + String(amount.toFixed(2));
}
