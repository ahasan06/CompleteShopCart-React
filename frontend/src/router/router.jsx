

import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/RootLayout";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import About from './../pages/About';
import Cart from "../pages/Cart";



export const RootRouter = createBrowserRouter([
    {
        path:"/",
        element:<RootLayout/>,
        children :[
            {path:"/",index:true,element:<Home/>},
            {path:"/shop",element:<Shop/>},
            {path:"/about",element:<About/>},
            {path:"/cart",element:<Cart/>}
        ]
    }
])
