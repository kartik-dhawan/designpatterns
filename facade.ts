// 	Common interface to unify their behavior
interface IAccount {
  deposit?: (amount: number) => void;
  withdraw?: (amount: number) => void;
  invest?: (amount: number) => void;
  getAccountNumber: () => number;
}

// Subsystems with their own logic
class SalaryAccount implements IAccount {
  private balance: number;

  constructor() {
    this.balance = 0;
  }

  deposit(amt: number) {
    this.balance += amt;
    return this.balance;
  }

  withdraw(amt: number) {
    this.balance -= amt;
    return this.balance;
  }

  getAccountNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }
}

// Subsystems with their own logic
class InvestmentAccount implements IAccount {
  private balance: number;

  constructor() {
    this.balance = 0;
  }

  deposit(amt: number) {
    this.balance += amt;
    return this.balance;
  }

  withdraw(amt: number) {
    this.balance -= amt;
    return this.balance;
  }

  invest(amt: number) {
    this.withdraw(amt);
    return this.balance;
  }

  getAccountNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }
}

// Subsystems with their own logic
class SavingsAccount implements IAccount {
  private balance: number;

  constructor() {
    this.balance = 0;
  }

  deposit(amt: number) {
    this.balance += amt;
    return this.balance;
  }

  withdraw(amt: number) {
    this.balance -= amt;
    return this.balance;
  }

  invest(amt: number) {
    this.balance += amt;
    return this.balance;
  }

  getAccountNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }
}

// ✅ Facade — simplifies account creation and interaction
class BankingService {
  public accounts: (IAccount & { accNum: number })[] = [];

  createAccount(type: string) {
    let newAccount: IAccount | null = null;

    if (type === "salary") {
      newAccount = new SalaryAccount();
    } else if (type === "savings") {
      newAccount = new SavingsAccount();
    } else if (type === "invest") {
      newAccount = new InvestmentAccount();
    } else {
      console.log("Select a type");
    }

    if (newAccount?.getAccountNumber()) {
      this.accounts.push({
        ...newAccount,
        accNum: newAccount.getAccountNumber(),
      });
      return newAccount;
    }
    return null;
  }

  getAllAccounts() {
    return this.accounts;
  }
}

const bank = new BankingService();
const salaryAcc1 = bank.createAccount("salary");
console.log(salaryAcc1?.deposit?.(2));
console.log(bank.getAllAccounts());
