import styled from 'styled-components';

export const Container = styled.div`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 15px;
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

export const ColumnGrid = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 33px;
  color: #8a9abf;
`;

export const Content = styled.p`
  font-size: 24px;
  color: #8a9abf;
`;

export const Divider = styled.hr`
  height: 2px;
  border-width: 0;
  color: #8a9abf;
`;
