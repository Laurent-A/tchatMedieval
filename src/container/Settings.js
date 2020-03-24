import { connect } from 'react-redux';
import Settings from '../components/Settings';
import { changeSettings, toggleSettings, submitSettings } from '../store/reducer';

// je relie le settings (react) components à mon store (redux)

const mapStateToProps = (state) => ({
    settingsOpened: state.settingsOpened,
    settingsInput: state.settingsInput
});

const mapDispatchToProps = (dispatch) => ({
    // mon reducer envoi ses fonction directement au composant
    changeSettings: (text) => {
        dispatch(changeSettings(text));
    },
    toggleSettings: () => {
        dispatch(toggleSettings());
    },
    submitSettings: () => {
        dispatch(submitSettings());
    },

});

const SettingsContainer = connect(mapStateToProps,mapDispatchToProps)(Settings);

export default SettingsContainer;