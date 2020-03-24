import { connect } from 'react-redux';
import Messages from '../components/Messages';


// je relie le settings (react) components à mon store (redux)

const mapStateToProps = (state) => ({
    messages: state.messages,
});

const mapDispatchToProps = {
    // mon reducer envoi ses fonction directement au composant
};

const MessagesContainer = connect(mapStateToProps,mapDispatchToProps)(Messages);

export default MessagesContainer;