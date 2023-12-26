import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default class BookUpdate extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            name: props.name,
            description: props.description,
            id: props.id
        }
    }

    render() {
        this.handleClose = event => {
            console.log('handleClose');
            this.setState({ show: false });
        }
    
        this.handleShow = event => {
            console.log('handleShow');
            this.setState({ show: true });
        }

        this.handleChangeName = event => {
            this.setState({ name: event.target.value });
        }
    
        this.handleChangeDescription = event => {
            this.setState({ description: event.target.value });
        }

        this.handleSubmit = event => {
            event.preventDefault();
            
            axios.put(`http://localhost:85/api/storage/${this.state.id}`, { 
              name: this.state.name,
              description: this.state.description
             })
            .then(res => {
              console.log(res);
              console.log(res.data);
              this.handleClose();
            })
          }
    
        return (
        <>
            <Button className="m-1" variant="light" onClick={this.handleShow}>
                Update
            </Button>
            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update book</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                        onChange={this.handleChangeName}
                        placeholder="The title of the book"
                        value={this.state.name}
                        autoFocus
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                        onChange={this.handleChangeDescription}
                        as="textarea" rows={3}
                        placeholder="Describe the book (optional)"
                        value={this.state.description}
                        />
                    </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                    Close
                    </Button>
                    <Button variant="primary" onClick={this.handleSubmit}>
                    Update
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
        )
    }
}