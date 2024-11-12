// const Account = {
//     balance:0,
//     deposit:function(amount){
//         this.balance += amount;
//     },
//     withdraw:function(amount){
//         this.balance -= amount;
//     },
//     getBalance:function(){
//         return this.balance;
//     }
// }

const Account = {
    balance: 0,
    deposit: (amount)=>{
        Account.balance += amount;
    },
    withdraw: (amount)=>{
        Account.balance -= amount;
    },
    getBalance: () => Account.balance
}


Account.deposit(100);
Account.deposit(100);
Account.withdraw(50);
console.log(Account.getBalance());