import PropTypes from 'prop-types';
import { Contact } from '../Contact/Contact';
import { Contacts } from './ContactList.styled';

export const ContactList = ({ contacts }) => {
  return (
    <Contacts>
      {contacts.map(({ name, number, id }) => (
        <li key={id}>
          <Contact name={name} number={number} id={id} />
        </li>
      ))}
    </Contacts>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ),
};
