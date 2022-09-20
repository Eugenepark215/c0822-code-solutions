/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance <= 0 || !Number.isInteger(balance)) {
    return null;
  } else {
    var newAccount = new Account(this.nextAccountNumber, holder);
    newAccount.deposit(balance);
    this.accounts.push(newAccount);
    this.nextAccountNumber++;
  }
  return this.nextAccountNumber - 1;
};

Bank.prototype.getAccount = function (number) {
  var nullvalue = null;
  for (var j = 0; j < this.accounts.length; j++) {
    if (this.accounts[j].number === number) {
      nullvalue = this.accounts[j];
      return nullvalue;
    }
  }
  return nullvalue;
};

Bank.prototype.getTotalAssets = function () {
  var totalAssets = 0;
  if (this.accounts.length > 0) {
    for (var i = 0; i < this.accounts.length; i++) {
      totalAssets += this.accounts[i].getBalance();
    }
  } return totalAssets;
};
