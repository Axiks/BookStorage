import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import BookUpdate from './BookUpdate';

export default class BookCard extends React.Component {
      constructor(props){
        super(props);

        this.state = {
          id: props.id,
          name: props.name,
          description: props.description
        }
      }
      render() {
        this.handleDeleteSubmit = event => {
          event.preventDefault();
      
          axios.delete(`http://localhost:85/api/storage/${this.state.id}`)
            .then(res => {
              console.log(`Delete btn press for id: ${this.state.id}`)
              console.log(res);
              console.log(res.data);
            })
        }

        return (
          <Card className="p-2" style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{this.state.name}</Card.Title>
                <Card.Text>{this.state.description}</Card.Text>
                <BookUpdate id={this.state.id} name={this.state.name} description={this.state.description} />
                <Button className="m-1" variant="danger"  onClick={this.handleDeleteSubmit}>Delete</Button>
            </Card.Body>
          </Card>
        )
      }
}