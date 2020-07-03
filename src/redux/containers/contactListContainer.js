import { connect } from 'react-redux';
import ContactList from '../../components/ContactList/index';
import { deleteContact } from '../actions/appActions';

const mapStateToProps = state => ({
  contacts: state.contactsList.contacts,
  filter: state.contactsList.filter,
});

const mapDispatchToProps = dispatch => ({
  handleDeleteContact: (id) => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
