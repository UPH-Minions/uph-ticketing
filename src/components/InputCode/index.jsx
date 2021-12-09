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
            {STUDENT.map(
              (item) =>
                inputCode === item.CODE && (
                  <Link to='/ticket'>
                    <Button key={item.ID}>Redeem Ticket</Button>
                  </Link>
                )
            )}
          </ButtonContainer>
        </InputContainer>
      </Container>
      <Switch>
        <Route path='/ticket'>
          {STUDENT.map(
            (item) =>
              inputCode === item.CODE && (
                <Ticket
                  name={item.NAME}
                  school={item.SCHOOL}
                  row={item.ROW}
                  seat={item.SEAT}
                />
              )
          )}
        </Route>
      </Switch>
    </Router>
  );
};

export default InputCode;
