import { connect } from 'react-redux';
import App from '../../components/App/index';
import { contactsFromLocalStorage } from '../actions/appActions';

const mapStateToProps = state => ({
  contacts: state.contactsList.contacts,
});

const mapDispatchToProps = dispatch => ({
  getContacts: contacts => dispatch(contactsFromLocalStorage(contacts)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
