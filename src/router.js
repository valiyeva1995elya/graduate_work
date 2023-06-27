import { createBrowserRouter } from "react-router-dom"
import University from "./components/university";
import ErrorPage from "./routes/ErrorPage";
import Main from "./routes/Main";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/university",
                element: < University /> ,
            },
        ]
    }
])
export default router;