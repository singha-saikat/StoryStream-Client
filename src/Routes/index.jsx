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

import Wishlist from "../Pages/WishList/Wishlist";
import FeatureBlog from "../Pages/FeatureBlog/FeatureBlog";
import PrivateRoutes from "../Pages/PrivateRoutes/PrivateRoutes";

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
            element: <PrivateRoutes><AddBlogs/></PrivateRoutes>,
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
            element: <PrivateRoutes><UpdateBlog/></PrivateRoutes>,
        },
        {
            path:'/wishlist',
            element: <PrivateRoutes><Wishlist/></PrivateRoutes>,
        },
        {
            path:'/featureBlogs',
            element: <PrivateRoutes><FeatureBlog/></PrivateRoutes>,
        },
      ],
    },
  ]);

  export default routes;