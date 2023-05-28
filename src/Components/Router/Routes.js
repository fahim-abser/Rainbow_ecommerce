import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import Categories from "../Pages/Categories/Categories";
import ErrorPage from "../ErrorPage/ErrorPage";
import Cart from "../Pages/Cart/Cart";

const router = createBrowserRouter([
    {path:'/',
    element:<Main></Main>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/about',
            element:<About></About>
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        },
        {
            path:'/category',
            element:<Categories></Categories>
        },
        {
            path:'/cart',
            element:<Cart></Cart>
        },
        {
            path: '/*',
            element: <ErrorPage></ErrorPage>
          }
    ]

},
])
export default router;