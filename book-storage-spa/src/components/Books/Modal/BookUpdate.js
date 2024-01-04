import React, { useState, useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { MyBooksContext } from '../BookList';

export default function BookUpdate(props) {
    const [name, setName] = useState(props.name);
    const [description, setDescription] = useState(props.description);
    const [show, setShow] = useState(false);

    const bookContext = useContext(MyBooksContext);

    function handleClose(){
        console.log('handleClose');
        setShow(false);
    }

    function handleShow(){
        console.log('handleShow');
        setShow(true);
    }

    const handleChangeName = (event) => {
        setName(event.target.value);
    }

    const handleChangeDescription = (event) => {
        setDescription(event.target.value);
    }

    function handleUpdateBook(){
        bookContext.handleUpdateBook(props.id, name, description);  
        handleClose();
    }

    return (
        <>
            <Button className="m-1" variant="light" onClick={handleShow}>
                Update
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update book</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                        onChange={handleChangeName}
                        placeholder="The title of the book"
                        value={name}
                        autoFocus
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                        onChange={handleChangeDescription}
                        as="textarea" rows={3}
                        placeholder="Describe the book (optional)"
                        value={description}
                        />
                    </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                    Close
                    </Button>
                    <Button variant="primary" onClick={() => handleUpdateBook()}>
                    Update
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
        )
}