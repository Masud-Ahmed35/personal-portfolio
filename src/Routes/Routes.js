import { createBrowserRouter } from "react-router-dom";
import AboutMe from "../Components/AboutMe";
import Blog from "../Components/Blog";
import DetailContact from "../Components/DetailContact";
import DetailSkill from "../Components/DetailSkill";
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
                element: <ProjectDetails />,
            },
            {
                path: '/detailSkill',
                element: <DetailSkill />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/detailContact',
                element: <DetailContact />
            },
            {
                path: '/aboutMe',
                element: <AboutMe />
            },
        ]
    }
])

export default router;