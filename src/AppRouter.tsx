import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { BaseLayout, ErrorLayout } from './layouts';
import { routeGroups } from './routes.tsx';
import { AuthBoundary } from './components/AuthBoundary.tsx';

export const AppRouter = () => {
    return (
        <RouterProvider router={router} />
    );
};

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            errorElement={<ErrorLayout />}
            element={<BaseLayout />}
        >
            {routeGroups.common.map(({ path, Element }) => (
                <Route key={path} path={path} element={<Element />} />
            ))}

            <Route
                path={'/'}
                element={<AuthBoundary />}
            >
                {routeGroups.auth.map(({ path, Element }) => (
                    <Route key={path} path={path} element={<Element />} />
                ))}
            </Route>
        </Route>,
    ),
);