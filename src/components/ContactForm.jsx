import React, { useState } from 'react';

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addContact({ name, number });
    setName('');
    setNumber('');
  };
  console.log(typeof addContact, addContact);
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        pattern="^[a-zA-Zа-яА-Я]+((['\\s-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <input
        type="tel"
        name="number"
        placeholder="Phone number"
        value={number}
        onChange={e => setNumber(e.target.value)}
        pattern="\\+?\\d{1,4}[-\\s]?\\(?\\d{1,3}\\)?[-\\s]?\\d{1,4}[-\\s]?\\d{1,4}[-\\s]?\\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;