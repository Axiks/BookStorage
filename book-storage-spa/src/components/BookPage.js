import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookList from './Books/BookList';

export default function BookPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_DOMAIN}/api/storage`)
    .then(res => {
      const books = res.data;
      setBooks(books);
      console.log('res')
      console.log(books)
    })
  },[]);

  return(
    <BookList books={books} />
  );
}