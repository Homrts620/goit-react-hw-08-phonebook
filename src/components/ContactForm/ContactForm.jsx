import { nanoid } from '@reduxjs/toolkit';

import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';
import {
    Button,
    Form,
    Input,
    Label,
    Section,
    Wrapper,
} from './ContactForm.styled';

const nameInputId = nanoid();
const numberInputId = nanoid();

export const ContactForm = () => {
const [name, setName] = useState('');
const [number, setNumber] = useState('');
const contacts = useSelector(selectContacts);
const dispatch = useDispatch();

const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
    setName(value);
    } else if (name === 'number') {
    setNumber(value);
    }
};

const handleSubmit = e => {
    e.preventDefault();

    if (name.trim() === '' || number.trim() === '') return;

    const isRepeating = contacts.some(contact => contact.name === name);
    if (isRepeating) {
    alert('Contact with this name already exists!');
    return;
    }

    dispatch(addContacts({ name, number }));
    setName('');
    setNumber('');
};

return (
    <>
    <Section>
        <Wrapper>
        <h2> Add contact, please</h2>
        <Form onSubmit={handleSubmit}>
            <Label htmlFor={nameInputId}>
            Name
            <Input
                type="text"
                name="name"
                placeholder="name"
                value={name}
                onChange={handleChange}
                pattern="^[^\d]+$"
                title="The name should contain only letters, apostrophes, hyphens, and indents"
                required
            />
            </Label>
            <Label htmlFor={numberInputId}>
            Number
            <Input
                type="tel"
                name="number"
                placeholder="number"
                value={number}
                onChange={handleChange}
                pattern="\+\d{11}"
                minLength="12"
                maxLength="12"
                title="The phone number should start with + followed by 11 digits"
                required/>
            </Label>
            <Button type="submit">Add contact </Button>
        </Form>
        </Wrapper>
        <Filter />
        <ContactList />
    </Section>
    </>
);
};