import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import MainLayout from "../Layout/MainLayout";
import LoginPage from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import AddBlogs from "../AddBlogs/AddBlogs";
import AllBlogs from "../Pages/All Blogs/AllBlogs";
import BlogDetails from "../Pages/Blog Details/BlogDetails";
import UpdateBlog from "../Pages/Update Blogs/UpdateBlog";

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
        {
            path:'/allBlogs',
            element: <AllBlogs/>,
        },
        {
            path:'/blogDetails/:_id',
            element: <BlogDetails/>,
        },
        {
            path:'/update-blog/:_id',
            element: <UpdateBlog/>,
        },
      ],
    },
  ]);

  export default routes;