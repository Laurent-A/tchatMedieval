import { WEBSOCKET_CONNECT, MESSAGE_SUBMIT, newMessage } from './reducer';


let socket;

const socketMiddleware = store => next => (action) => {
    
    const state = store.getState();
    switch(action.type){
        case WEBSOCKET_CONNECT:
            socket = window.io('http://localhost:3001');
            socket.on('send_message', (message) => {
                store.dispatch(newMessage(message));
            });
        break;
        case MESSAGE_SUBMIT:
            socket.emit('send_message', {
                auteur: state.settingsInput,
                message: state.messageInput,
            });
            next(action);
        break;
        default:
            next(action);
        break;
    }
}

export default socketMiddleware; 