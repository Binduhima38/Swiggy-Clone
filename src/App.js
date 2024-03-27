import React, { Children, lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom"
import Contact from "./components/Contact";
//import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./components/createContext";
const About = lazy(() => import("./components/About"));



const Applayout= ()=> {
    const [userName,setuserName] = useState();

    useEffect(() => {
    const data = {
        name : "Bindu",
    };
    setuserName(data.name);
    }, []);
    return(
    <UserContext.Provider value={{loggedInUser : userName}}>
    <div className = "layout">
    <Header/>
    <Outlet/>
    </div>
    </UserContext.Provider>
    );
};
const routerConfig = createBrowserRouter([
    {
        path: "/",
        element: <Applayout/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/About",
                element: <Suspense fallback = {<h1>Loading</h1>} ><About/></Suspense>
            },
            {
                path: "/Contact",
                element: <Contact/>
            },
            {
                path: "/restaurant",
                element: <RestaurantMenu/>
            }
        ],
        errorElement: <Error/>
    }
])
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {routerConfig} />)