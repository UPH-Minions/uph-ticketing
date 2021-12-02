import React from 'react';
import PropTypes from 'prop-types';
import { ColumnGrid, Container, Content, Divider, Title } from './styles';

const Ticket = ({ name, school, ticket }) => (
  <Container>
    <ColumnGrid>
      <Title>UPH MEDAN CAMPUS</Title>
      <Divider />
      <Content>
        Name: <span>{name}</span>
      </Content>
      <Content>
        School: <span>{school}</span>
      </Content>
      <Content>
        Ticket: <span>{ticket}</span>
      </Content>
    </ColumnGrid>
  </Container>
);

export default Ticket;

Ticket.propTypes = {
  name: PropTypes.string,
  school: PropTypes.string,
  ticket: PropTypes.string,
};

Ticket.defaultProps = {
  name: '',
  school: '',
  ticket: '',
};
