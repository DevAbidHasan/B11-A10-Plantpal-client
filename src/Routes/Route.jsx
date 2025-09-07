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
import Home from "../Layouts/MainLayout/Home";
import AddPlant from "../Pages/AddPlant";
import AllPlants from "../Pages/AllPlants";
import PlantDetails from "../Pages/PlantDetails";
import PrivateRoute from "../Provider/PrivateRoute";
import Loading from "../Pages/Loading";
import MyPlants from "../Pages/MyPlants";
import UpdatePlant from "../Pages/UpdatePlant";

 export const router = createBrowserRouter([
    {
        path : "/",
        Component : MainLayout,
        
        children:[
            {
                index:true,
                loader : async ()=>fetch ("http://localhost:3000/plants"),
                Component: Home
            },
            {
                path :"/add-plant",
                element : (
                    <PrivateRoute>
                        <AddPlant></AddPlant>
                    </PrivateRoute>
                ),
                hydrateFallbackElement:<Loading></Loading>
            },
            {
                path :"/all-plants",
                loader : async ()=>fetch ("http://localhost:3000/plants"),
                Component : AllPlants
            },
            {
                path:"/plants/:id",
                loader : async ({params})=> fetch(`http://localhost:3000/plants/${params.id}`),
                element :(
                    <PrivateRoute>
                        <PlantDetails></PlantDetails>
                    </PrivateRoute>
                ),
                hydrateFallbackElement:<Loading></Loading>
            },
            {
                path : "/my-plants/:email",
                loader : async ({params}) => fetch(`http://localhost:3000/my-plants/${params.email}`),
                element : (
                    <PrivateRoute>
                        <MyPlants></MyPlants>
                    </PrivateRoute>
                )
            },
            // update plant route
            {
                path :"/update-plant/:id",
                loader : async ({params}) => fetch(`http://localhost:3000/update-plant/${params.id}`),
                element : (
                    <PrivateRoute>
                        <UpdatePlant></UpdatePlant>
                    </PrivateRoute>
                )

            }
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