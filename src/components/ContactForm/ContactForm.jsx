
import { useState } from "react";
import { Title, Container , Button, Form, Label } from "./ContactForm.styled";
import PropTypes from 'prop-types';

export function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');      
        
      
 const     handleChange = e => { 
       
   switch(e.target.name) {
    case 'name':
        setName(e.target.value);
        break;
        case 'number':
            setNumber(e.target.value);
            break;
            default:
return;
   }    

        };
   

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit({ name, number });
        setName('');
    setNumber('');
    };
    



    
    return (
        <Title>
            Phonebook
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Label>Name</Label>
                <input
  type="text"
  name="name"
  value={name}
  onChange={handleChange}
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
  
/> 
<Label>Number</Label>
<input
  type="tel"
  name="number"
  value={number}
  onChange={handleChange}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
<Button type="submit">Add contact</Button>
                </Form>
           </Container> 
        </Title>
    );
}
ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
