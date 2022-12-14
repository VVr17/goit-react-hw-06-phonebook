import { useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';
import { Contacts } from './ContactList.styled';
import { getContacts, getFilter } from 'redux/selectors';
import { getFilteredContacts } from 'helpers/getFilteredContacts';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = getFilteredContacts(contacts, filter);

  return (
    <Contacts>
      {filteredContacts.map(({ name, number, id }) => (
        <li key={id}>
          <Contact name={name} number={number} id={id} />
        </li>
      ))}
    </Contacts>
  );
};
