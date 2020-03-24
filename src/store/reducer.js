const initialState = {
    settingsOpened: false,
    settingsInput:'',
    messages: [],
    messageInput: '',

}
// ##############TYPES#############

// Partie formulaire Auteur
const TOGGLE_SETTINGS = 'TOGGLE_SETTINGS';
const CHANGE_SETTINGS = 'CHANGE_SETTINGS';
const SUBMIT_SETTINGS = 'SUBMIT_SETTINGS';

// Partie formulaire message
const MESSAGE_CHANGE = 'MESSAGE_CHANGE';
const MESSAGE_SUBMIT = 'MESSAGE_SUBMIT';


// ##############REDUCER#############
const reducer = (state = initialState, action = {}) => {
    switch(action.type) {
        // si j'appuie sur la croix je fais apparaitre le form
        case TOGGLE_SETTINGS:
            return {
                ...state,
                settingsOpened: !state.settingsOpened
            }
        // j'indique à mon state que j'ai rajouté un nom
        case CHANGE_SETTINGS:
            return {
                ...state,
                settingsInput: action.text,
            }
        // une fois mon form utilisateur remplit et valider je me remet sur la croix    
        case SUBMIT_SETTINGS:
            return {
                ...state,
                settingsOpened : false,
            }
        case MESSAGE_CHANGE:
            return {
                ...state,
                messageInput: action.text,
            }
            
        case MESSAGE_SUBMIT:
            return {
                // le message envoyé nourrit mon tableau des message, il est composé d'un objet avec l'auteur et le message qui se trouve dans le state actuel
                ...state,
                messages: [...state.messages, {
                    auteur: state.settingsInput,
                    message: state.messageInput,
                }],
                messageInput: '',
            }            
        default:
        return state;
    }
}

// ##############ACTION CREATORS#############
// ces actions sont envoyé aux composants via les container
export const toggleSettings = () => ({
    type: TOGGLE_SETTINGS,
});

export const changeSettings = (text) => ({
    type: CHANGE_SETTINGS,
    text
});

export const submitSettings = () => ({
    type: SUBMIT_SETTINGS,   
});

export const messageSubmit = () => ({
    type: MESSAGE_SUBMIT,   
});

export const messageChange = (text) => ({
    type: MESSAGE_CHANGE,
    text
});

export default reducer;