import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 15px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  width: 80%;
  background-color: #fff;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;

  @media screen and (min-width: 1024px) {
    width: 40%;
  }
`;

export const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

export const Label = styled.label`
  color: #002d77;
  padding-bottom: 8px;
  font-size: 1.5rem;
`;

export const Input = styled.input`
  border-radius: 4px;
  padding: 8px;
  margin-bottom: 8px;
  border: 1px solid #002d27;

  &::placeholder {
    color: #002d77;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Button = styled.button`
  border-radius: 4px;
  background-color: #002d27;
  color: #fff;
  font-size: 0.8rem;
  padding: 8px 12px;
  border: none;

  &:hover {
    background-color: #5c667f;
  }

  &:disabled {
    opacity: 0.6;
  }
`;
