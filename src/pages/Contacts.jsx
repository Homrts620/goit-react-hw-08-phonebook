import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Loader } from 'components/Loader/Loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from '../redux/auth/selectors';
import { fetchContacts } from '../redux/contacts/operations';


export default function Contacts() {
const dispatch = useDispatch();
const isLoading = useSelector(selectIsLoading);

useEffect(() => {
    dispatch(fetchContacts());
}, [dispatch]);

return (
    <>
    <title>Your contacts</title>
    <ContactForm />
    <div>{isLoading && <Loader />}</div> <ContactList />
    </>
);
}