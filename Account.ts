class Account {
    name;
    balance;

    constructor(name: string , balance: number){
        this.name = name;
        this.balance = balance;
    }

    setName(name: string) {
        this.name = name;
    }

    setBalance(balance: number) {
        this.balance = balance;
    }
}

export default Account;