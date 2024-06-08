import { ContactForm } from 'components/ContactForm/ContactForm';
import { Loader } from 'components/Loader/Loader';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
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
    <Helmet>
        <title>Your contacts</title>
    </Helmet>
    <ContactForm />
    <div>{isLoading && <Loader />}</div>
    {}
    </>
);
}