import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './style.scss';


const Message = () => (
    <div className="message">
       
        <div className="info">
            <p className="auteur">
            <FontAwesomeIcon icon={ faUser } />
                Laurent
            </p>
            <p className="message-texte">
                Bonjour à tous !
            </p>
        </div>
    </div>
 );

const Messages = () => (

    <div id="messages">
        <Message />
        <Message />
        <Message />
    </div>
    
);

export default Messages;