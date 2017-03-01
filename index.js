function Bank() {
    var name = '';
    var account = '';
    var amount = '';

    this.setName = function(_name) {
        this.name = _name;
    };

    this.getName = function () {
        return this.name;
    };

    this.setAccount = function(_account) {
        this.account = _account;
    };

    this.getAccount = function () {
        return this.account;
    };

    this.setAmount = function(_amount) {
        this.amount = _amount;
    };

    this.getAmount = function () {
        return amount;
    };
}

function BankStrategy(strategy, bank) {
    this.strategy = strategy;
    this.bank = bank;
}

BankStrategy.prototype.doStrategy  = function () {
    return this.strategy();
};

var deposit = function(bank, value) {
    var amount = bank.getAmount() + value;
    console.log("Deposite strategy -> " , amount,  bank.getAmount());
}

var withdraw = function(bank, value) {
    var amount = bank.getAmount() - value;
    console.log("Witdraw strategy ->", amount);
}

function Main() {
    var name = window.prompt("What is your bank name?");
    var account = window.prompt("What is your Account");
    var amount = parseInt(window.prompt("What is your amount"));

    var bank = new Bank();
    bank.setName(name);
    bank.setAccount(account);
    bank.setAmount(amount);

    var option = parseInt(window.prompt('1 - Deposito\n 2-Withdraw'));
    var value = 0;

    while(option !== 0) {
        value = parseInt(window.prompt("Enter amount: "));
        if (option === 1) {
            return new BankStrategy(deposit(bank, value));
        }

        if (option === 2) {
            return new BankStrategy(withdraw(bank, value));
        }
    }

    console.log(bank.getAmount(), bank.getName(), bank.getAccount());
};
// console.log( bank.getAccount(), bank.getName(), bank.getAmount());
Main();
