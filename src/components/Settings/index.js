import React from 'react';
import { Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './style.scss';

const SettingsInput = () => (

    <Form>
        <Form.Control type="texte" placeholder="Entrée votre pseudo" />
    </Form>

);

const PlusButton = () => (

    <div>
        <FontAwesomeIcon className="font" icon={ faPlus } />
    </div>

);

const Settings = ({ open }) => (

    <div className="settings">
        { open && <SettingsInput /> }
        { !open && <PlusButton /> }
    </div>
    
);

export default Settings;