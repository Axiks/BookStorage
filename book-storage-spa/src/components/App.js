import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import BookList from './Books/BookList'

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
            <BookList />
      </Container>
    </div>
  );
}

export default App;
