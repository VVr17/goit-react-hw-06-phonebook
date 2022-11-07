import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { Box } from 'components/Box/Box';
import { getContacts, getFilter } from 'redux/selectors';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { NewContactForm } from 'components/NewContactForm/NewContactForm';
import { Section } from '../Section/Section';
import { Text, Title } from './App.styled';

export const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = getFilteredContacts(contacts, filter);

  function getFilteredContacts(contacts, filter) {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }

  return (
    <Box as="main" bg="mainBackgroundColor">
      <Title>PhoneBook</Title>
      <Section title="Create new contact">
        <NewContactForm />
      </Section>
      <Section title="Contacts">
        {contacts.length > 0 && <Filter />}
        {filteredContacts.length > 0 ? (
          <ContactList contacts={filteredContacts} />
        ) : (
          <Text>There are no contacts</Text>
        )}
      </Section>
      <ToastContainer autoClose={3000} theme="colored" />
    </Box>
  );
};
