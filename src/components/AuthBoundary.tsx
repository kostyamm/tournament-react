import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const AuthBoundary = () => {
    const token = 'null';

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    return (
        <Suspense fallback={<LoaderPages />}>
            <Outlet />
        </Suspense>
    );
};

const LoaderPages = () => {
    return <div>Loading pages...</div>;
};