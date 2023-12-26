import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import BookList from './BookList'
import BookAdd from './BookAdd';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>BookStorage App</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <div style={{marginTop: 1 + 'em'}}/>
          <Stack direction="horizontal" gap={3}>
            <BookAdd />
          </Stack>
          <div style={{marginTop: 1 + 'em'}}/>
          <Col>
            <BookList />
          </Col>
        </Row>
      </Container>
    </div>
  );


}

export default App;
