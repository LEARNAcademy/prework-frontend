import React from 'react';
import {Row, Col , Button, Form, Input, Label} from 'reactstrap'
import './style.css'

class NewUser extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            user: {
                email: null,
                password:null,
            }
        }
    }

      getPasswordOptions() {
        // Variable to store length of password from user input
        let length = parseInt(
          prompt('How many characters would you like your password to contain?')
        );
      
        // Conditional statement to check if password length is a number. Prompts end if this evaluates false
        if (isNaN(length) === true) {
          alert('Password length must be provided as a number');
          return;
        }
      
        // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
        if (length < 8) {
          alert('Password length must be at least 8 characters');
          return;
        }
      
        // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
        if (length > 128) {
          alert('Password length must less than 129 characters');
          return;
        }
      
        // Variable to store boolean regarding the inclusion of special characters
        let hasSpecialCharacters = window.confirm(
          'Click OK to confirm including special characters.'
        );
      
        // Variable to store boolean regarding the inclusion of numeric characters
        let hasNumericCharacters = window.confirm(
          'Click OK to confirm including numeric characters.'
        );
      
        // Variable to store boolean regarding the inclusion of lowercase characters
        let hasLowerCasedCharacters = window.confirm(
          'Click OK to confirm including lowercase characters.'
        );
      
        // Variable to store boolean regarding the inclusion of uppercase characters
        let hasUpperCasedCharacters = window.confirm(
          'Click OK to confirm including uppercase characters.'
        );
      
        // Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
        if (
          hasSpecialCharacters === false &&
          hasNumericCharacters === false &&
          hasLowerCasedCharacters === false &&
          hasUpperCasedCharacters === false
        ) {
          alert('Must select at least one character type');
          return;
        }
      
        // Object to store user input
        let passwordOptions = {
          length: length,
          hasSpecialCharacters: hasSpecialCharacters,
          hasNumericCharacters: hasNumericCharacters,
          hasLowerCasedCharacters: hasLowerCasedCharacters,
          hasUpperCasedCharacters: hasUpperCasedCharacters
        };
      
        return passwordOptions;
      }
      getRandom = (arr) => {
        let randIndex = Math.floor(Math.random() * arr.length);
        let randElement = arr[randIndex];
      
        return randElement;
      }
      // Function to generate password with user input
      generatePassword() {
        var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        var specialCharacters = [
            '@',
            '%',
            '+',
            '\\',
            '/',
            "'",
            '!',
            '#',
            '$',
            '^',
            '?',
            ':',
            ',',
            ')',
            '(',
            '}',
            '{',
            ']',
            '[',
            '~',
            '-',
            '_',
            '.'
          ];
        var lowerCasedCharacters = [
          'a',
          'b',
          'c',
          'd',
          'e',
          'f',
          'g',
          'h',
          'i',
          'j',
          'k',
          'l',
          'm',
          'n',
          'o',
          'p',
          'q',
          'r',
          's',
          't',
          'u',
          'v',
          'w',
          'x',
          'y',
          'z'
          ];
        var upperCasedCharacters = [
              'A',
              'B',
              'C',
              'D',
              'E',
              'F',
              'G',
              'H',
              'I',
              'J',
              'K',
              'L',
              'M',
              'N',
              'O',
              'P',
              'Q',
              'R',
              'S',
              'T',
              'U',
              'V',
              'W',
              'X',
              'Y',
              'Z'
            ];
        let options = this.getPasswordOptions()
        console.log("options", options)
        // Variable to store password as it's being concatenated
        let result = [];
      
        // Array to store types of characters to include in password
        let possibleCharacters = [];
      
        // Array to contain one of each type of chosen character to ensure each will be used
        let guaranteedCharacters = [];
      
        // Conditional statement that adds array of special characters into array of possible characters based on user input
        // Push new random special character to guaranteedCharacters
        if (options.hasSpecialCharacters) {
          possibleCharacters = possibleCharacters.concat(specialCharacters);
          guaranteedCharacters.push(this.getRandom(specialCharacters));
        }
      
        // Conditional statement that adds array of numeric characters into array of possible characters based on user input
        // Push new random special character to guaranteedCharacters
        if (options.hasNumericCharacters) {
          possibleCharacters = possibleCharacters.concat(numericCharacters);
          guaranteedCharacters.push(this.getRandom(numericCharacters));
        }
      
        // Conditional statement that adds array of lowercase characters into array of possible characters based on user input
        // Push new random lower-cased character to guaranteedCharacters
        if (options.hasLowerCasedCharacters) {
          possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
          guaranteedCharacters.push(this.getRandom(lowerCasedCharacters));
        }
      
        // Conditional statement that adds array of uppercase characters into array of possible characters based on user input
        // Push new random upper-cased character to guaranteedCharacters
        if (options.hasUpperCasedCharacters) {
          possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
          guaranteedCharacters.push(this.getRandom(upperCasedCharacters));
        }
      
        // For loop to iterate over the password length from the options object, selecting random indices from the array of possible characters and concatenating those characters into the result variable
        for (let i = 0; i < options.length; i++) {
          let possibleCharacter = this.getRandom(possibleCharacters);
      
          result.push(possibleCharacter);
        }
      
        // Mix in at least one of each guaranteed character in the result
        for (let i = 0; i < guaranteedCharacters.length; i++) {
          result[i] = guaranteedCharacters[i];
        }
      
        // Transform the result into a string and pass into writePassword
        let passw = result.join('');
        if(passw !== undefined){
            let updatePass = this.state.user 
            updatePass.password = passw
            this.setState({user:updatePass})
            alert("Password saved")
        }
      }
      handleSubmit() {
        let {user} = this.state 
        fetch('http://localhost:3000/users', {
            body: JSON.stringify({
                user:{
                    email:user.email,
                    password:user.password,
                    password_confirmation:user.password
                }
            }),
            headers: {
                "Content-type":"application/json"
            },
            method:"POST"
        }).then((response)=> {
            if(response.ok){
                alert("it worked homie")
            }
        })
      }
      updateEmail(email){
        let updatedUser = this.state.user
        updatedUser.email = email
        this.setState({user:updatedUser})
      }
      updatePassword(password){
        let updatedUser = this.state.user
        updatedUser.password = password 
        this.setState({user:updatedUser})
    }

    render(){
        return(
            <>
                <Row>
                    <Col sm={12}>
                        <Row>
                            <Col sm={12}>
                                <h3>LEARN Prework App User Creator</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <h2>Create a New User</h2>
                            </Col>
                        </Row>
                        <Form>
                            <Row>
                                <Col>
                                    <Label for="email">Email</Label>
                                    <Input type="email" id="email" onChange={e => {
                                        let email = e.target.value 
                                        this.updateEmail(email)
                                    }}/>
                                </Col>
                            </Row>
                        </Form>
                        <Row>
                            <Col>
                                <Button onClick={()=>this.generatePassword()}>Generate Password</Button>
                            </Col>
                            <Col>
                                <Button onClick={()=>this.handleSubmit()}>Create User</Button>
                            </Col>
                        </Row>
                        {this.state.user.password !== null && 
                        <>
                            <Row>
                                <Col>
                                    <p>Users Password:</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p>{this.state.user.password}</p>
                                </Col>
                            </Row>
                        </>
                        }
                    </Col>
                </Row>
            </>
        )
    }
}

export default NewUser