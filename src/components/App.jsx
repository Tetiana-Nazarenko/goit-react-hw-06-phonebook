// import { nanoid } from 'nanoid';

import Contacts from './Contacts/Contacts.jsx';

import { ContactForm } from './ContactForm/ContactForm.jsx';

import Filter from './Filter/Filter.jsx';

// Стилизация
import { Layout, HeadTitle, ContactsTitle } from './Layout.js';
import { GlobalStyle } from './GlobaleStyle.js';

export const App = () => {
  //const contacts = useSelector(getContacts);
  //const defaultContacts = useSelector(state => state.tasks);
  // const [contacts, setContacts] = useState(getContacts);
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem(localStorageKey, JSON.stringify(contacts));
  // }, [contacts]);

  // //*** кастомні методи*/
  // const addContact = contact => {
  //   const isInContacts = contacts.some(
  //     ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
  //   );

  //   if (isInContacts) {
  //     alert(`${contact.name} is already in contacts!`);
  //     return;
  //   }

  //   setContacts(prevState => [{ id: nanoid(), ...contact }, ...prevState]);
  // };

  // const handleFilter = event => {
  //   setFilter(event.target.value);
  // };

  // const handleDelete = id => {
  //   setContacts(prevContacts =>
  //     prevContacts.filter(contact => contact.id !== id)
  //   );
  // };

  // const filterContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );
  //*** RENDER */

  return (
    <Layout>
      <HeadTitle>Phonebook</HeadTitle>
      <ContactForm />

      <ContactsTitle>Contacts</ContactsTitle>

      <Filter />
      <Contacts />
      <GlobalStyle />
    </Layout>
  );
};
