import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout/MainLayout";

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
            }
        ]
    }
])