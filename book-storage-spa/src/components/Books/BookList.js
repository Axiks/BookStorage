import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import BookCard from './BookCard';
import Stack from 'react-bootstrap/Stack';
import BookAdd from './Modal/BookAdd';
import Container from 'react-bootstrap/esm/Container';

export const MyBooksContext = createContext("");

export default function BookList(props) {
  console.log('props')
  console.log(props)

  const [books, setBooks] = useState(props.books);

  useEffect(() => {
      setBooks(props.books);
  },[]);

  function handleAddBook(name, description){            
    axios.post(`${process.env.REACT_APP_API_DOMAIN}/api/storage`, { 
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
    axios.put(`${process.env.REACT_APP_API_DOMAIN}/api/storage/${bookId}`, { 
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
    axios.delete(`${process.env.REACT_APP_API_DOMAIN}/api/storage/${bookId}`)
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
    <MyBooksContext.Provider value={{ handleAddBook, handleUpdateBook, handleDeleteBook }}>
      <Container>
        <div style={{marginTop: 1 + 'em'}}/>
        <BookAdd />
        <div style={{marginTop: 1 + 'em'}}/>
        <Stack direction="horizontal" gap={3}>
            {books.map((book) => {
                return <BookCard key={book.id} id={book.id} name={book.name} description={book.description}  />
            })}
        </Stack>
      </Container>
    </MyBooksContext.Provider>
  );
}