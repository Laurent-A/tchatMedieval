const initialState = {
    settingsOpened: false,
    settingsInput:'',
    messages: [],
    messageInput: '',

}
// TYPES

const TOGGLE_SETTINGS = 'TOGGLE_SETTINGS';
const CHANGE_SETTINGS = 'CHANGE_SETTINGS';
const SUBMIT_SETTINGS = 'SUBMIT_SETTINGS'

// REDUCER
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
        default:
        return state;
    }
}

// ACTION CREATORS
// ces actions sont envoyé aux composants via le container settings
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

export default reducer;