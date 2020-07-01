import { connect } from 'react-redux';
import Filter from '../../components/Filter/index';
import { filterContacts } from '../actions/appActions';

const mapStateToProps = state => ({
  contacts: state.contactsList.contacts,
});

const mapDispatchToProps = dispatch => ({
  findContactByName: value => dispatch(filterContacts(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
