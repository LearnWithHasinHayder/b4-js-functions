const Account = {
    balance: 100,
    
    // getBalance: function(){
    //     return this.balance;
    // }

    // getBalance: () => {
    //     return Account.balance;
    // }

    getBalance: () => Account.balance
}

console.log(Account.getBalance())