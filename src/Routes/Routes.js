import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Components/ErrorPage";
import Root from "../Layouts/Root";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [

        ]
    }
])

export default router;