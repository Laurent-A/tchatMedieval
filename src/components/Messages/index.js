import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './style.scss';


const Message = ({ auteur, message }) => (
    <div className="message">
       
        <div className="info">
            <p className="auteur">
            <FontAwesomeIcon icon={ faUser } />
                { auteur }
            </p>
            <p className="message-texte">
                { message }
            </p>
        </div>

    </div>

    
 );

const Messages = ({ messages }) => (

    <div id="messages">
        { messages.map(message => <Message key= { message.message } { ...message }/>)}
    </div>
    
);

export default Messages;