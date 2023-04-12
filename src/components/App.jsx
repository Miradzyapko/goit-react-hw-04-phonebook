import  { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';

import { Container, Title} from './ContactForm/ContactForm.styled';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
export function App()  {

  
    const [contacts, setContacts] = useState(
      
    JSON.parse(window.localStorage.getItem('contacts')) ?? []
      
      
    
  
  
);
     const [filter, setFilter] = useState('');
    

useEffect(() => {
  console.log('useEffect');
  window.localStorage.setItem('contacts', JSON.stringify(contacts));
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
         [contact, ...prevState]
      );
  
    }
  const changeFilter = e => {
   setFilter(e.currentTarget.value)
    e.preventDefault()
  };
  
  
   const visibleContacts = () => {
      const normalized = filter.toLowerCase();
      return contacts.filter(contact => contact.name.toLowerCase().includes(normalized));
    };
  
    const handleDeleteContact = id => {
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


