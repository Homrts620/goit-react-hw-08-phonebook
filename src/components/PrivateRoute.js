import { useAuth } from 'hooks';
import { Navigate } from 'react-router';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
const { isLoggedIn, isRefreshing } = useAuth();
const shouldRedirect = !isLoggedIn && !isRefreshing;
    return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};