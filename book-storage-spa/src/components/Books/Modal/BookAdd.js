import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function BookAdd(props) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [show, setShow] = useState(false);

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

    function handleSubmit() {
            props.onAdd(name, description);
            handleClose();
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add book
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add book</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                        onChange={handleChangeName}
                        placeholder="The title of the book"
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
                        />
                    </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                    Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                    Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
        )
}