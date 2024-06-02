import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { AppBar } from '../AppBar/AppBar';
import { Loader } from '../Loader/Loader';


export const Layout = () => {
return (
    <div>
    <AppBar />{' '}
    <Suspense fallback={<Loader />}>
        {}
        <Outlet />
    </Suspense>
    </div>
);
};