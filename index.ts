import menuStart from './menu';

import Account from './Account';
import Client from './Client'

let account = new Account('Andre', 2000)
let client = new Client('Andre Teixeira','Rio Tinto', 1000, account)

menuStart(client);