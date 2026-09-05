
const accountId = 1445553    
let accountEmail = "lavkushhelium@gmail.com"
var accountPassword = "1234567"
 accountCity = "Ghaziabad"

let accountState;     /* agar ham koi cheez kewal variable likhkar chhoe dete hai to uska op unndefined aata hai*/
  

// accountId = 2    // not allowed

accountEmail = "lk96967567@gmail.com"
accountPassword = "3456782"
accountCity = "prayagraj"


            // prefer not to use var
            // because of issue in Block scope and functional scope

console.log(accountId);

console.table([ accountId , accountEmail , accountPassword , accountCity, accountState ])