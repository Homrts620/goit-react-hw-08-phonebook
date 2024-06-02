import { Link, Wrapper } from './UserAuth.styled';

export const UserAuth = () => {
return (
    <Wrapper>
    <Link to="/register">Register</Link> <Link to="/login">Log In</Link>{' '}
    </Wrapper>
);
};