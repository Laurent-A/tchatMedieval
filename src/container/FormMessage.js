import { connect } from 'react-redux';
import FormMessage from '../components/FormMessage';
import { messageSubmit, messageChange } from '../store/reducer';

// je relie le settings (react) components à mon store (redux)

const mapStateToProps = (state) => ({
    input: state.messageInput,
});

const mapDispatchToProps = (dispatch) => ({
    // mon reducer envoi ses fonction directement au composant
    messageSubmit: ()=> {
        dispatch(messageSubmit());
    },

    messageChange: (text)=> {
        dispatch(messageChange(text));
    }

});

const FormMessageContainer = connect(mapStateToProps,mapDispatchToProps)(FormMessage);

export default FormMessageContainer;