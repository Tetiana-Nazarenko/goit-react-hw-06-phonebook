import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import { Contacts } from './Contacts/Contacts.jsx';

import { ContactForm } from './ContactForm/ContactForm.jsx';

import { Filter } from './Filter/Filter.jsx';

// Стилизация
import { Layout, HeadTitle, ContactsTitle } from './Layout.js';
import { GlobalStyle } from './GlobaleStyle.js';

const localStorageKey = 'add-contacts';

const defaulContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
const getContacts = () => {
  const savedAddedContacts = localStorage.getItem(localStorageKey);
  if (savedAddedContacts !== null) {
    return JSON.parse(savedAddedContacts);
  }
  return defaulContacts;
};
export const App = () => {
  const [contacts, setContacts] = useState(getContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(contacts));
  }, [contacts]);

  //*** кастомні методи*/
  const addContact = contact => {
    const isInContacts = contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isInContacts) {
      alert(`${contact.name} is already in contacts!`);
      return;
    }

    setContacts(prevState => [{ id: nanoid(), ...contact }, ...prevState]);
  };

  const handleFilter = event => {
    setFilter(event.target.value);
  };

  const handleDelete = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  //*** RENDER */

  return (
    <Layout>
      <HeadTitle>Phonebook</HeadTitle>
      <ContactForm onSubmit={addContact} />

      <ContactsTitle>Contacts</ContactsTitle>
      <Filter value={filter} onChangeFilter={handleFilter} />

      <Contacts contacts={filterContacts} onDelete={handleDelete}></Contacts>
      <GlobalStyle />
    </Layout>
  );
};
