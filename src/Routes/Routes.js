import Main from "../layout/Main";
import {createBrowserRouter} from 'react-router-dom';
import Home from "../pages/Home/Home/Home";
import Courses from "../pages/Courses/Courses/Courses";
import About from "../pages/About/About/About";
import Contacts from "../pages/Contacts/Contacts/Contacts";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contacts',
                element: <Contacts></Contacts>
            },
        ]
    }
])