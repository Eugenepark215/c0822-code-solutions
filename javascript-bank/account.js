/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {

  if (amount <= 0 || !Number.isInteger(amount)) {
    return false;
  } else {
    var accountNewDeposit = new Transaction('deposit', amount);
    this.transactions.push(accountNewDeposit);
    return true;
  }
};

Account.prototype.withdraw = function (amount) {
  if (amount <= 0 || !Number.isInteger(amount)) {
    return false;
  } else {
    var accountNewWithdraw = new Transaction('withdrawal', amount);
    this.transactions.push(accountNewWithdraw);
    return true;
  }
};

Account.prototype.getBalance = function () {
  var getBalanceResult = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      getBalanceResult += this.transactions[i].amount;
    } else {
      getBalanceResult -= this.transactions[i].amount;
    }
  }
  return getBalanceResult;
};
