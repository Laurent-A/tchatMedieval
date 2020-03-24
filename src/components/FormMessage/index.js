import React from 'react';
import { Form } from 'react-bootstrap';
import './style.scss';

const FormMessage = ({ input, messageChange, messageSubmit }) => {
    // je prend en compte ce que je met dans mon message
    const handleInputChange = (event) => {
        messageChange(event.target.value);
    }
    
    const handleMessageSubmit = (event) => {
    // j'enregistre mon message et je ne reload pas la pge
        event.preventDefault();
        messageSubmit(event.target.value);
    } 

    return (
        <div id="formMessage">
            <Form onSubmit={ handleMessageSubmit }>
                <Form.Control
                    value = { input }
                    onChange = { handleInputChange}
                    placeholder="Saisissez votre message" />
            </Form>
        </div>
    );
};


export default FormMessage;