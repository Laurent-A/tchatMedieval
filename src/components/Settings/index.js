import React from 'react';
import { Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import './style.scss';



const SettingsInput = ({ value, changeSettings, submitSettings }) => {
    // J'accepte que mon formulaire recoivent une valeur et j'informe mon state
    const changementAuteur = (event) => {
        changeSettings(event.target.value);
        
    }

    const changementDuFormAuteur = (event) => {
        event.preventDefault();
        submitSettings();
        
    }

    return (

    <Form onSubmit = { changementDuFormAuteur }>
        <Form.Control 
            type="texte" 
            placeholder="Entrée votre pseudo" 
            value={ value }
            onChange= { changementAuteur } />
    </Form>
    )
};

const PlusButton = ({ onClick}) => (

    <div onClick={onClick}>
        <FontAwesomeIcon className="font" icon={ faPlus } />
    </div>

);

const Settings = ({ settingsInput, settingsOpened, toggleSettings, changeSettings, submitSettings}) => (
    // je nourri mes composants de props venant du reducer ou se trouve mon state via mon container
    <div className="settings">
        { settingsOpened && 
            <SettingsInput 
                value= { settingsInput } 
                changeSettings= { changeSettings }
                submitSettings= { submitSettings } 
                /> 
            }
        { !settingsOpened && <PlusButton onClick={ toggleSettings } /> }
    </div>
    
);

export default Settings;