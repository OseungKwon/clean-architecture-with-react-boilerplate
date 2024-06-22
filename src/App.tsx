import './App.css';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignInPage from './pages/sign-in/SignIn.page.tsx';
import SignUpPage from './pages/sign-up/SignUp.page.tsx';

const router = createBrowserRouter([
    {
        path: '/sign_in',
        element: <SignInPage />,
    },
    {
        path: '/sign_up',
        element: <SignUpPage />,
    },
]);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
