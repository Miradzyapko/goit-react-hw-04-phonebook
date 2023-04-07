import  { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';

import { Container, Title} from './ContactForm/ContactForm.styled';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
export const App = () => {

  
    const [contacts, setContacts] = useState(
      
    JSON.parse(localStorage.getItem('contacts')) ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  
  
);
     const [filter, setFilter] = useState('');
    

useEffect(() => {
  localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
    const FormSubmitHandler = ({ name, number }) => {
      const contact = {
        id: nanoid(),
        name,
        number,
      };
  
      
      const checkContact = contacts.find((contact) => contact.name.toLowerCase() === name.toLowerCase());
      if (checkContact) {
        alert(`${name} is already in contacts.`);
        return;
      }
  
      setContacts(prevState => 
         [contact, ...prevState],
      )
  
    }
  const changeFilter = e => {
   setFilter(e.currentTarget.value)
    e.preventDefault()
  };
  
  
   const visibleContacts = () => {
      const normalized = filter.toLowerCase();
      return contacts.filter(contact => contact.name.toLowerCase().includes(normalized));
    };
  
    const handleDeleteContact = (id) => {
      setContacts(prevState => 
        prevState.filter(el => el.id !== id),
      );
    };
  
 
  
    return (
      <Container>
        <ContactForm title="Phonebook" onSubmit={FormSubmitHandler} />
         <Title>Contacts</Title>
         <Filter
          onChange={changeFilter}
          value={filter}
 />
         <ContactList title="Contacts" onDelete={handleDeleteContact}
          contacts={visibleContacts()}/>



</Container>
    )
  }


