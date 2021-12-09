import styled from 'styled-components';

export const Container = styled.div`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 15px;
  width: 100%;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: relative;
  background-color: #fff;

  @media screen and (min-width: 1024px) {
    width: 40%;
  }
`;

export const ColumnGrid = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

export const RowGrid = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Title = styled.h2`
  font-weight: bold;
  font-size: 28px;
  margin: 8px 0;
  color: #1c7a3d;

  @media screen and (min-width: 1024px) {
    font-size: 33px;
  }
`;

export const Heading = styled.h3`
  text-transform: capitalize;
  font-size: 24px;
  margin: 8px 0;

  @media screen and (min-width: 1024px) {
    font-size: 28px;
  }
`;

export const Content = styled.p`
  font-size: 18px;
  color: #1c7a3d;
  margin: 8px 8px 8px 0;

  @media screen and (min-width: 1024px) {
    font-size: 20px;
  }
`;

export const Border = styled.hr`
  border-top: 1px dotted #1c7a3d;
  width: 100%;
`;

export const StudioText = styled.h1`
  font-weight: bold;
  font-size: 144px;
  margin: 16px;
  color: #1c7a3d;
`;

export const StudioGrid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
