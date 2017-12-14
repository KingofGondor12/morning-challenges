const jwt = require('jsonwebtoken');
const colors = require('colors');
const inquirer = require('inquirer');

class SimpleJwt {
  constructor(props){
    this.state = {
      password: props
    }
  }
  sign (payload) {
    // Return a JWT
    const token = jwt.sign(payload, this.state.password);
    console.log(token.rainbow);
  }
  verify (userToken) {
    // return the contents or a message re failure
    try {
      console.log(jwt.verify(userToken, this.state.password).green)
    }
    catch(err) {
      console.log(`An error occured! ${err}`.red)
    }
  }
}

const simpleJwt = new SimpleJwt('abc')
inquirer.prompt([{
  name: "SignOrVerify",
  message: "What would you like to do?",
  type: "list",
  choices: ["Sign A Token", "Verify A Token"]
}]).then(answers => {
    if (answers.SignOrVerify === "Verify A Token") {
      simpleJwt.verify('eyJhbGciOiJIUzI1NiJ9.aGVsbG8.VAgmvkJuS6IXOU8fN1gkjFHMUpLQK0xYgTxzwrM1YRI')
    } else if (answers.SignOrVerify === "Sign A Token") {
      simpleJwt.sign('hello');
    } else {
      console.log("Please try again.")
    }
});



/*

  CHALLENGE
  ---------

  Review + run the code.

  1. We're hard coding 'abc' as the password. Pass this into the constructor
  instead. e.g. new SimpleJwt('abc'). Update your methods.

  2. Notice the colors package we're importing? Make the console log rainbow 🌈

  3. Test that verifyJwt works.

  4. Wrap the .verify in a try/catch. If everything looks good, return the
  decoded JWT (green). Otherwise show an error (red)

  BEAST MODE
  ----------

  1. Implement https://www.npmjs.com/package/inquirer
  Ask the user if they want to sign or verify a token.

*/
