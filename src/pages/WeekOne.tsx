import React, { useState } from 'react';
import { Container, Grid, Card, Button, Checkbox, Slider, Text } from '@mantine/core';


const WeekOne: React.FC = () => {

    const [password, setPassword] = useState<string>('')
    const [isError, setIsError] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>('')
    const [passwordLength, setPasswordLength] = useState<number>(5)
    const [isUppercase, setIsUppercase] = useState<boolean>(false);
    const [isLowercase, setIsLowercase] = useState<boolean>(false);
    const [isNumber, setIsNumber] = useState<boolean>(false);
    const [isSymbol, setIsSymbol] = useState<boolean>(false);

    const generatePassword = () => {
      if(!isUppercase && !isLowercase && !isSymbol && !isNumber) {
        setIsError(true)
        setErrorMessage('Please check a box to complete the password generation!')
      } 
      else {
        const randomNumber = (min: number, max: number) => {
          // Function to generate a random number between min and max (inclusive)
          const minCeil = Math.ceil(min);
          const maxFloor = Math.floor(max);
          let random_num = Math.floor(Math.random() * (maxFloor - minCeil + 1) + 0);
          return random_num
          };
          
          const randomLower = () => {
            // Function to generate a random lowercase letter
            const alphabet = "abcdefghijklmnopqrstuvwxyz"
            let randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]
            return randomCharacter 
          };
          
          const randomUpper = () => {
            // Function to generate a random uppercase letter
            let upperCaseCharacter = randomLower().toUpperCase()
            return upperCaseCharacter
          };
          
          const randomSymbol = () => {
            // Function to generate a random symbol
            const symbols = "!@#$%^&*_-+=";
            let randomSymbol = symbols[Math.floor(Math.random() * symbols.length)]
            return randomSymbol 
          };
      
          let password = ""
    
          for (let i = 0; i < passwordLength; i++) {
            let choice = randomNumber(0, 3);
            if (isLowercase && choice === 0) {
              password += randomLower();
            } else if (isUppercase && choice === 1) {
              password += randomUpper();
            } else if (isSymbol && choice === 2) {
              password += randomSymbol();
            } else if (isNumber && choice === 3) {
              password += randomNumber(0, 10);
            } else {
              i--;
            }
          }
          setIsError(false)
          setPassword(password);
      }
      
    };


    return (
    <Container size="sm">
      <h1 className="title mt-5">Password Generator</h1>
      <Grid>
        <Grid.Col span={12}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <h2>Pick a length and check at least one option to generate a password</h2>
            <form>
              <div className='mb-10'>
              <Text size="sm">Length of password</Text>
          <Slider
          style={{marginBottom: '30px'}}
              color="blue"
              min={5}
              max={20}
              marks={[
                { value: 5, label: '5' },
                { value: 10, label: '10' },
                { value: 15, label: '15' },
                { value: 20, label: '20' },
              ]}
              value={passwordLength} onChange={setPasswordLength}
            />
            </div>
              <Checkbox
               style={{marginBottom: '5px'}} 
                radius = 'xl'
                label = 'Uppercase letters'
                onChange={(event) => setIsUppercase(event.currentTarget.checked)}
              />
              <Checkbox
              style={{marginBottom: '5px'}} 
                radius = 'xl'
                label = 'Lowercase letters'
                onChange={(event) => setIsLowercase(event.currentTarget.checked)}
              />
              <Checkbox
              style={{marginBottom: '5px'}} 
                radius = 'xl'
                label = 'Symbols'
                onChange={(event) => setIsSymbol(event.currentTarget.checked)}
              />
              <Checkbox
              style={{marginBottom: '5px'}} 
                radius = 'xl'
                label = 'Numbers'
                onChange={(event) => setIsNumber(event.currentTarget.checked)}
              />
              <Button
                mt="sm"
                onClick={generatePassword}
              >
                Generate Password
              </Button>
            </form>
            <p style={{textAlign: 'center'}}>
               <strong style={{fontSize: '20px'}}>{!isError ? password : errorMessage}</strong>
            </p>
          </Card>
        </Grid.Col>
       
      </Grid>
    </Container>
  );
};

export default WeekOne;
