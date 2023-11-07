import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import MainLayout from "../Layout/MainLayout";
import LoginPage from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import AddBlogs from "../AddBlogs/AddBlogs";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
            index: true,
            element: <Home />,
        },
        {
            path:'/login',
            element: <LoginPage />,
        },
        {
            path:'/signUp',
            element: <SignUp/>,
        },
        {
            path:'/addBlogs',
            element: <AddBlogs/>,
        },
      ],
    },
  ]);

  export default routes;