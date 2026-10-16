class BankAccount{
    accountNumber
    accountHolder 
    balance
    sum = this.balance

    constructor(accountNumber,accountHolder,balance){
        this.accountNumber = accountNumber
        this.accountHolder = accountHolder
        this.balance = balance
    }

    deposit(amt) {
            if (amt>0) {
                this.sum = this.balance + amt
                console.log(this.sum);
            } else {
                console.log("Enter a valid amount");
            }
    }

    withdraw(amt) {
            if (amt>0) {
                console.log(this.sum- amt);
            } else if(balance <= 0){
                console.log("Insufficient balance");
            }
            else {
                console.log("Enter a valid amount");
            }
    }
}

const a = new BankAccount(123,"Varanasya",30)
console.log(a.balance);
a.deposit(20)
a.withdraw(10)
