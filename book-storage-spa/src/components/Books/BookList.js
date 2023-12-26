import React from 'react';
import axios from 'axios';
import BookCard from './BookCard';
import Stack from 'react-bootstrap/Stack';


export default class BookList extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    axios.get(`http://localhost:85/api/storage`)
      .then(res => {
        const books = res.data;
        this.setState({ books });
      })
  }

  render() {
    return (
        <Stack direction="horizontal" gap={3}>
            {this.state.books.map((book) => {
                return <BookCard key={book.id} id={book.id} name={book.name} description={book.description} />
            }
            )}
        </Stack>
    )
  }
}