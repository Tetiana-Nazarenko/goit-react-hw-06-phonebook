import { useState } from 'react';

import {
  Form,
  LabelTitle,
  Input,
  ButtonAddContact,
} from './ContactForm.styled';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
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

    onSubmit({
      name: name,
      number: number,
    });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  //*** */
  return (
    <Form onSubmit={handleSubmit}>
      <LabelTitle>
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

      <LabelTitle>
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
