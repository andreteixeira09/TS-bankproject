import Account from "./Account";

class Client {
    name;
    city;
    value;
    account;
    
    constructor(name: string, city: string , value: number, account: Account){
        this.name = name;
        this.city = city;
        this.value = value;
        this.account = account;
    }

    actions  =  {
        withdraw: "Withdraw Money.",
        deposit: "Deposit Money.",
        close: "Close Program.",
        restart: "Back to the main menu."
    };

    depositoValido(input: number){
        if (input <= 0 || input.toString() == "" ) return 'Invalid value';
        if(isNaN(input)) return 'Only Numbers'
        if(input > this.value) return 'Not enough value'
        return true; 
    }

    levantamentoValido(input: number) {
        if (input <= 0 || input > this.account.balance) return "Invalid value"
        if(isNaN(input)) return 'Only numbers'
        return true; 
    }

    setName(name: string) {
        this.name = name;
    }

    setCity(city: string) {
        this.city = city;
    }

    setValue(value: number) {
        this.value = value;
    }
}

export default Client;