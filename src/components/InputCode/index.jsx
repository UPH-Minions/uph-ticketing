import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { Button, ButtonContainer, InputContainer } from './styles';
import { Label } from './styles';
import { Input } from './styles';
import { Container } from './styles';
import STUDENT from '../DATA/DATA';
import { Ticket } from '..';

const InputCode = () => {
  const [inputCode, setInputCode] = useState('');

  const valueChangeHandler = (event) => {
    setInputCode(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputCode);
    setInputCode('');
  };

  return (
    <Router>
      <Container>
        <InputContainer onSubmit={handleSubmit}>
          <Label>Code Redemption</Label>
          <Input
            type='text'
            placeholder='Enter Your Code'
            onChange={valueChangeHandler}
            value={inputCode}
          />
          <ButtonContainer>
            {STUDENT.map((item) =>
              inputCode === item.code ? (
                <Link to='/ticket'>
                  <Button key={item.id}>Redeem Ticket</Button>
                </Link>
              ) : (
                <div key={item.id} />
                // <Button disabled>Redeem Ticket</Button>
              )
            )}
          </ButtonContainer>
        </InputContainer>
      </Container>
      <Switch>
        <Route path='/ticket'>
          {STUDENT.map((item) =>
            inputCode === item.code ? (
              <Ticket
                name={item.name}
                school={item.school}
                ticket={item.ticket}
              />
            ) : (
              <div key={item.id} />
            )
          )}
        </Route>
      </Switch>
    </Router>
  );
};

export default InputCode;
