import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Components/ErrorPage";
import Home from "../Components/Home/Home";
import ProjectDetails from "../Components/ProjectDetails";
import Root from "../Layouts/Root";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        loader: async () => fetch('projects.json'),
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/project-details/:id',
                element: <ProjectDetails />
            }
        ]
    }
])

export default router;