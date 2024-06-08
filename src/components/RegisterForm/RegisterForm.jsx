import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import {
    Button,
    Form,
    Input,
    Label,
    Section,
    Wrapper,
} from './RegisterForm.styled';
export const RegisterForm = () => {
const dispatch = useDispatch();

const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
    register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
    })
    );
    form.reset();
};

return (
    <Section>
    <Wrapper>
        <h2>Registration</h2>
        <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
            UserName
            <Input
            type="text"
            name="name"
            placeholder="name"
            pattern="^[^\d]+$"
            title="The name should contain only letters, apostrophes, hyphens, and indents"
            required
            />
        </Label>
        <Label>
            Email
            <Input
            type="email"
            name="email"
            placeholder="email"
            pattern='pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"'
            title="Please enter a valid email address"
            required
            />
        </Label>
        <Label>
            Password
            <Input
            type="password"
            name="password"
            placeholder="password"
            pattern="^[a-zA-Z0-9!@#$%^&*()-_=+`~[\]{}|:<>/?]+$"
            title="The password should contain only Latin letters (both uppercase and lowercase), numbers and other symbols"
            required
            />
        </Label>
        <Button type="submit"> Register</Button>
        </Form>
    </Wrapper>
    </Section>
);
};