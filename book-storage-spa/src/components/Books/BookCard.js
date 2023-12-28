import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import BookUpdate from './Modal/BookUpdate';

export default class BookCard extends React.Component {

      render() {
        return (
          <Card className="p-2" style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{this.props.name}</Card.Title>
                <Card.Text>{this.props.description}</Card.Text>
                <BookUpdate id={this.props.id} name={this.props.name} description={this.props.description} onUpdate={this.props.onUpdate} />
                <Button className="m-1" variant="danger"  onClick={() => this.props.onDelete(this.props.id)}>Delete</Button>
            </Card.Body>
          </Card>
        )
      }
}