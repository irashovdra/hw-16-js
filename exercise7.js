let totalTransactions = 0;

const account = {
  balance: 1500,
  deposit(amount) {
    amount = prompt("Поповнити рахунок");
    this.balance += parseInt(amount);
    totalTransactions += 1;
    return alert(`На рахунку залишилось ${this.balance}`);
  },
  checkBalance() {
    return `Ваш баланс становить ${this.balance}`;
  },
  withdraw() {
    const amount = prompt("Скільки грошей бажаєте зняти?");
    this.balance -= parseInt(amount);
    totalTransactions += 1;
    return alert(`Ваш рахунок складає ${this.balance}`);
  },
  getTransationHistory() {
    return `Всього було зроблено ${totalTransactions} транзакції`;
  },
};

console.log(account.deposit());
console.log(account.withdraw());
console.log(account.checkBalance());
console.log(account.getTransationHistory());
