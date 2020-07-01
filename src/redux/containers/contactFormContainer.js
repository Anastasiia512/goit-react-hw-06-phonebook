import {connect} from 'react-redux';
import ContactForm from '../../components/ContactForm/index';
import {addContact, warning} from '../actions/appActions';

const mapStateToProps = (state) => ({
contacts: state.contactsList.contacts,
isWarning: state.contactsList.warning,
})


const mapDispatchToProps = (dispatch) =>({
    addContact: (name, number) => dispatch(addContact(name, number)),
    toggleWarning: (bool) => dispatch(warning(bool)),
})



export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);