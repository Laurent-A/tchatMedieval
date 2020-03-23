import React from 'react';
import { Form } from 'react-bootstrap';
import './style.scss';

const FormMessage = () => (
    <div id="formMessage">
        <Form>
            <Form.Control type="texte" placeholder="Saisissez votre message" />
        </Form>
    </div>
);

export default FormMessage;