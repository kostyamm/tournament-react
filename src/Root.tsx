import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { AuthBoundary } from './components/AuthBoundary';
import { BaseLayout, ErrorLayout } from './components/Layout';
import { Home } from './pages/home.tsx';
import { Login } from './pages/login.tsx';
import { Registration } from './pages/registration.tsx';
import { User } from './pages/user.tsx';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route errorElement={<ErrorLayout />} element={<BaseLayout />}>
            <Route path={'/'} element={<Home />} />
            <Route path={'/login'} element={<Login />} />
            <Route path={'/logout'} element={<Login />} />
            <Route path={'/registration'} element={<Registration />} />

            <Route
                path={'/'}
                element={<AuthBoundary />}
            >
                <Route path={'/user'} element={<User />} />
            </Route>
        </Route>,
    ),
);