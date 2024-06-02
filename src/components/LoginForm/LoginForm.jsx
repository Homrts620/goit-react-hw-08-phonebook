import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';

export const LoginForm = () => {
const dispatch = useDispatch();

const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
    login({
        email: form.elements.email.value,
        password: form.elements.password.value,
    })
    );
    form.reset();
};

return (
    <form onSubmit={handleSubmit}>
    <label>
        Email
        <input
        type="email"
        name="email"
        placeholder="email"
        pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
        title="Please enter a valid email address"
        required
        />
    </label>
    <label>
        Password
        <input
        type="password"
        name="password"
        placeholder="password"
        pattern="^[a-zA-Z0-9!@#$%^&*()-_=+`~[\]{}|:<>/?]+$"
        title="The password should contain only Latin letters (both uppercase and lowercase), numbers and other symbols"
        required
        />
    </label>
    <button type="submit"> Log In</button>
    </form>
);
};