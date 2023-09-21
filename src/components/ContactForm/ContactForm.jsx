import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from 'redux/selectors';

import { addContact } from 'redux/contactSlice';

import {
  Form,
  LabelTitle,
  Input,
  ButtonAddContact,
} from './ContactForm.styled';

const nameInputId = nanoid();
const numberInputId = nanoid();

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  //*** */

  const handleChange = e => {
    const { name, value } = e.target;

    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    // onSubmit({
    //   name: name,
    //   number: number,
    // });
    //reset();

    // const form = event.target;
    // const formName = event.target.elements.name.value;
    // const formNumber = event.target.elements.number.value;

    const isInContacts = contacts.some(
      contact => contact.name.toLowerCase().trim() === name.toLowerCase().trim()
    );

    if (isInContacts) {
      alert(`${name} is already in contacts!`);
      return;
    }

    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  //*** */
  return (
    <Form onSubmit={handleSubmit}>
      <LabelTitle htmlFor={nameInputId}>
        Name:
        <Input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </LabelTitle>

      <LabelTitle htmlFor={numberInputId}>
        Number:
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </LabelTitle>

      <ButtonAddContact type="submit">Add contact </ButtonAddContact>
    </Form>
  );
};
