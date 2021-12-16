import inquirer from "inquirer"
import Client from "./Client"
import menuStart from './menu'

export function depositar(client: Client){
    inquirer
            .prompt([
                  {
                  type: 'input',
                  name: "valor",
                  message: "Escolha a quantia a depositar:",
                  validate: client.depositoValido.bind(client)
            }]).then(answers => {
                  client.value = client.value - Number(answers.valor)
                  client.account.balance = client.account.balance + Number(answers.valor)
                  console.log("Novo saldo do cliente:", client.value, "\nNovo saldo da conta:", client.account.balance)
                  restart(client)
                  })            
            } 

export function levantar(client: Client){
    inquirer
            .prompt([
                  {
                  type: 'input',
                  name: "valor",
                  message: "Escolha a quantia a levantar:",
                  validate: client.levantamentoValido.bind(client)
            }]).then(answers => {
                  client.value = client.value + Number(answers.valor)
                  client.account.balance = client.account.balance - Number(answers.valor)
                  console.log("Novo saldo do cliente:", client.value, "\nNovo saldo da conta:", client.account.balance)
                    restart(client)
                  })                  
            } 

export function close(){
        console.log('\nObrigado e volte novamente\n')
}

function restart(client: Client) {
  inquirer
    .prompt([
      {
        type: "confirm",
        name: "after",
        message: "Deseja voltar ao menu inicial?",
      },
    ])
    .then((answers) => {
      if (answers.after == true) {
        menuStart(client);
      } else {
        console.log("\nObrigado e volte sempre\n");
      }
    });
}

