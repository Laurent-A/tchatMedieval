import React from 'react';
import './style.scss';


const Message = ({ auteur, message }) => (
    
    <div className="message">
       
        <div className="info">
            <p className="auteur">
            <img src="https://image.flaticon.com/icons/svg/2653/2653276.svg" alt="" className="image"/>
                { auteur }
            </p>
            <p className="message-texte">
                { message }
            </p>
        </div>

    </div>

    
 );

const Messages = ({ messages }) => (
    <div id="bodyMessage">
        
        <div id="messages">
            { messages.map(message => <Message key= { message.message } { ...message }/>)}
        </div>
    </div>    
);

export default Messages;