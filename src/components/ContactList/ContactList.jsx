import { useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';
import { Contacts, Text } from './ContactList.styled';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = getFilteredContacts(contacts, filter);

  function getFilteredContacts(contacts, filter) {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }

  return filteredContacts.length ? (
    <Contacts>
      {filteredContacts.map(({ name, number, id }) => (
        <li key={id}>
          <Contact name={name} number={number} id={id} />
        </li>
      ))}
    </Contacts>
  ) : (
    <Text>There are no contacts</Text>
  );
};
