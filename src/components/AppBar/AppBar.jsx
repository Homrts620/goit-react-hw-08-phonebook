import { UserAuth } from 'components/UserAuth/UserAuth';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import { Navigation } from '../Navigation/Navigation';
import { Header } from './AppBar.styled';

export const AppBar = () => {
const { isLoggedIn } = useAuth();
return (
    <Header>
    <Navigation />
    {isLoggedIn ? <UserMenu /> : <UserAuth />}{' '}
    {}
    </Header>
);
};