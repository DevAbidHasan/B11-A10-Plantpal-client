import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import TermsOfServices from "../Pages/TermsOfServices";
import Privacy from "../Pages/Privacy";
import DeveloperResources from "../Pages/DeveloperResources";
import CookiesPolicy from "../Pages/CookiesPolicy";
import ErrorPage from "../Pages/ErrorPage";
import AuthLayout from "../Layouts/AuthLayout/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

 export const router = createBrowserRouter([
    {
        path : "/",
        Component : MainLayout,
        
        children:[
            {
                index:true,
                element :<h2>this is root page</h2>
            },
            {
                path :"/blogs",
                element :<h2>this is blogs</h2>
            },
            {
                path :"/about",
                element :<h2>this is about</h2>
            },
        ]
    },
    {
        path :"/terms-of-services",
        Component : TermsOfServices
    },
    {
        path:"/privacy",
        Component : Privacy
    },
    {
        path: "/developer-resources",
        Component : DeveloperResources
    },
    {
        path :"/cookies-policy",
        Component: CookiesPolicy
    },
    {
        path:"/auth",
        Component : AuthLayout,
        children : [
            
            {
               path :"/auth/login",
               Component : Login
            },
            {
                path :"/auth/registration",
                Component : Register
            }
        ]
    },
    
    {
        path :"*",
        Component : ErrorPage
    }
])