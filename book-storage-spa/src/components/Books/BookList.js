import React from 'react';
import axios from 'axios';
import BookCard from './BookCard';
import Stack from 'react-bootstrap/Stack';
import BookAdd from './Modal/BookAdd';
import Container from 'react-bootstrap/esm/Container';


export default class BookList extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      books: []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:85/api/storage`)
      .then(res => {
        const books = res.data;
        this.setState({ books });
      })
  }

  render() {
    this.handleAddBook = (name, description) => {            
      axios.post(`http://localhost:85/api/storage`, { 
        name: name,
        description: description
       })
      .then(res => {
        console.log(res.data);
        const newBookArr = this.state.books
        newBookArr.push(res.data)
        this.setState({ books: newBookArr }, () => 
        console.log(newBookArr));

      }, (error) => {
        console.log(error);
      });
    }

    this.handleUpdateBook = (bookId, name, description) => {            
      axios.put(`http://localhost:85/api/storage/${bookId}`, { 
        name: name,
        description: description
       })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })

      const newBookArr = this.state.books.map(book => {
        return book.id === bookId ? { ...book, name: name, description: description } : book
      });

      this.setState({ books: newBookArr }, () => 
        console.log(newBookArr));
    }
  
    this.handleDeleteBook = (bookId) => {      
      axios.delete(`http://localhost:85/api/storage/${bookId}`)
        .then(res => {
          console.log(`Delete btn press for id: ${bookId}`)
          console.log(res);
          console.log(res.data);
        })

        const newBookArr = this.state.books.filter(book => {
          return book.id !== bookId;
        });

        console.log(newBookArr)
        this.setState({ books: newBookArr });
    }

    return (
      <Container>
        <div style={{marginTop: 1 + 'em'}}/>
        <BookAdd onAdd={this.handleAddBook} />
        <div style={{marginTop: 1 + 'em'}}/>
        <Stack direction="horizontal" gap={3}>
            {this.state.books.map((book) => {
                return <BookCard key={book.id} id={book.id} name={book.name} description={book.description} onDelete={this.handleDeleteBook} onUpdate={this.handleUpdateBook} />
            }
            )}
        </Stack>
      </Container>
    )
  }
}