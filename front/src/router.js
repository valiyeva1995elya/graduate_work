import { createBrowserRouter } from "react-router-dom"
import {AuthRootComponent, HomePage, University, Main, ErrorPage, SingleUniversityPage} from "./components"


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/login",
        element: <AuthRootComponent/>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/register",
        element: <AuthRootComponent/>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/home",
        element: <HomePage/>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/university",
        element: <University/>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/university/:id",
        element: <SingleUniversityPage /> ,
        
    },
])
export default router;