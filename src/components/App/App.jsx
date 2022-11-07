// import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { Box } from 'components/Box/Box';
import { getContacts } from 'redux/selectors';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { NewContactForm } from 'components/NewContactForm/NewContactForm';
import { Section } from '../Section/Section';
import { Title } from './App.styled';

// const LOCAL_STORAGE_KEY = {
//   contacts: 'contacts',
// };

export const App = () => {
  const contacts = useSelector(getContacts);

  // !to set new contacts to LocalStorage
  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY.contacts, JSON.stringify(contacts));
  // }, [contacts]);

  // function changeFilter(event) {
  //   setFilter(event.target.value);
  // }

  return (
    <Box as="main" bg="mainBackgroundColor">
      <Title>PhoneBook</Title>
      <Section title="Create new contact">
        <NewContactForm />
      </Section>
      <Section title="Contacts">
        {contacts.length > 0 && <Filter />}
        <ContactList />
      </Section>
      <ToastContainer autoClose={3000} theme="colored" />
    </Box>
  );
};
