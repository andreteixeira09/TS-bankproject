import inquirer from 'inquirer';
import Client from './Client'
import { depositar, levantar, close } from './escolhas'

var menu = function(client: Client){

console.log("Bem-vindo à Covet Bank",client.name)
console.log("Saldo da conta: ", client.account.balance)
console.log("Saldo do cliente: ", client.value)

console.log("\n")

inquirer
  .prompt([
      {
          type: 'list',
          name: "escolha",
          message: "Tipo de transação",
          choices: [client.actions.deposit, client.actions.withdraw, client.actions.close]
      },
    ])
  .then((answers) => {
      if (answers.escolha == client.actions.deposit) {
            depositar(client)
      }
      else if(answers.escolha == client.actions.withdraw) {
            levantar(client)
      }
      else if(answers.escolha == client.actions.close) {
            close()    
      }
      return true
  })
}

export default menu;