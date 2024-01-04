import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import BookUpdate from './Modal/BookUpdate';
import { MyBooksContext } from './BookList';

export default function BookCard(props){
  const bookContext = useContext(MyBooksContext);

  return (
    <Card className="p-2" style={{ width: '18rem' }}>
      <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <BookUpdate id={props.id} name={props.name} description={props.description} onUpdate={props.onUpdate} />
          <Button className="m-1" variant="danger"  onClick={() => bookContext.handleDeleteBook(props.id)}>Delete</Button>
      </Card.Body>
    </Card>
  )
}