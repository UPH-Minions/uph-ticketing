import React from 'react';
import PropTypes from 'prop-types';
import {
  Border,
  ColumnGrid,
  Container,
  Content,
  Heading,
  RowGrid,
  StudioGrid,
  StudioText,
  Title,
} from './styles';

const Ticket = ({ name, school, row, seat }) => (
  <Container>
    <ColumnGrid>
      <Title>UPH MEDAN CAMPUS</Title>
      <Border />
      <StudioGrid>
        <Content>
          <Heading>High School Student Leaders Christmas Gathering</Heading>
          <Content>
            DATE: <span>Friday, 10 December 2021</span>
          </Content>
          <Content>
            TIME: <span>15:00</span>
          </Content>
          <RowGrid>
            <Content>
              Row: <span>{row}</span>
            </Content>
            <Content>
              Seat: <span>{seat}</span>
            </Content>
          </RowGrid>
        </Content>
        <StudioText>4</StudioText>
      </StudioGrid>
      <Border />
      <Content>
        Name: <span>{name}</span>
      </Content>
      <Content>
        School: <span>{school}</span>
      </Content>
    </ColumnGrid>
  </Container>
);

export default Ticket;

Ticket.propTypes = {
  name: PropTypes.string,
  school: PropTypes.string,
  row: PropTypes.string,
  seat: PropTypes.string,
};

Ticket.defaultProps = {
  name: '',
  school: '',
  row: '',
  seat: '',
};
