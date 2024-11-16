import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import HomeLayout from '../Layout/HomeLayout';

const Router= createBrowserRouter([
    {
        path:'/',
        element: <HomeLayout></HomeLayout>
    },
    {
        path:'/news',
        element: <h2>News Details Layouts</h2>
    },
    {
        path:'/auth',
        element: <h1>Login Layout</h1>
    },
    {
        path:'*',
        element: <h1>Error</h1>
    }
])
 
export default Router;
