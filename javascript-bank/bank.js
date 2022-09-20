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
  for (var j = 0; j < this.accounts.length; j++) {
    if (this.accounts[j].number === number) {
      return this.accounts[j];
    // } else {
    //   return null;
    }
  }
};

Bank.prototype.getTotalAssests = function (number) {

};
