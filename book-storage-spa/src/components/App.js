import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import BookPage from './BookPage';
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
            <BookPage />
      </Container>
    </div>
  );
}

export default App;
