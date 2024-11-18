
import { createBrowserRouter, Navigate } from 'react-router-dom'
import HomeLayout from '../Layout/HomeLayout';
import CategoryById from '../Pages/CategoryById';
import AuthLayout from '../Components/AuthLayout';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import NewsDetails from '../Pages/NewsDetails';
import PrivetRoute from './PrivetRoute';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to={`category/01`}></Navigate>
            },
            {
                path: '/category/:id',
                element: <CategoryById></CategoryById>,
                loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)

            },
        ],
    },
    {
        path: '/news/:id',
        element: <PrivetRoute>
            <NewsDetails></NewsDetails>,
        </PrivetRoute>,
        loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            },
        ]
    },
    {
        path: '*',
        element: <h1>Error</h1>
    }
])

export default Router;
