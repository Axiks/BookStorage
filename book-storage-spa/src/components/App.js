import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Stack from 'react-bootstrap/Stack';

import BookList from './Books/BookList'
import BookAdd from './Books/Modal/BookAdd';

import '../App.css';

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
