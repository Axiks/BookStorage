import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from './BookCard';
import Stack from 'react-bootstrap/Stack';
import BookAdd from './Modal/BookAdd';
import Container from 'react-bootstrap/esm/Container';


export default function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:85/api/storage`)
    .then(res => {
      const books = res.data;
      setBooks(books);
    })
  });

  function handleAddBook(name, description){            
    axios.post(`http://localhost:85/api/storage`, { 
      name: name,
      description: description
     })
    .then(res => {
      console.log(res.data);
      const newBookArr = books
      newBookArr.push(res.data)
      setBooks(newBookArr)

    }, (error) => {
      console.log(error);
    });
  }

  function handleUpdateBook(bookId, name, description){            
    axios.put(`http://localhost:85/api/storage/${bookId}`, { 
      name: name,
      description: description
     })
    .then(res => {
      console.log(res);
      console.log(res.data);
    })

    const newBookArr = books.map(book => {
      return book.id === bookId ? { ...book, name: name, description: description } : book
    });

    setBooks(newBookArr)
  }

  function handleDeleteBook(bookId){      
    axios.delete(`http://localhost:85/api/storage/${bookId}`)
      .then(res => {
        console.log(`Delete btn press for id: ${bookId}`)
        console.log(res);
        console.log(res.data);
      })

      const newBookArr = books.filter(book => {
        return book.id !== bookId;
      });

      console.log(newBookArr)
      setBooks(newBookArr)
  }

  return(
    <Container>
      <div style={{marginTop: 1 + 'em'}}/>
      <BookAdd onAdd={handleAddBook} />
      <div style={{marginTop: 1 + 'em'}}/>
      <Stack direction="horizontal" gap={3}>
          {books.map((book) => {
              return <BookCard key={book.id} id={book.id} name={book.name} description={book.description} onDelete={handleDeleteBook} onUpdate={handleUpdateBook} />
          })}
      </Stack>
    </Container>
  );
}