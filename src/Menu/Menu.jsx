import { createBrowserRouter } from "react-router-dom";
import About from "../Components/About";
import Card from "../Components/Card";
import Contact from "../Components/Contact";
import App from "../App";
import Foods from "../Components/Foods";
import Lavash from "../Components/Lavash";
import Desert from "../Components/Desert";
import Set from "../Components/Set";
import Xaggi from "../Components/Xaggi";
import Burger from "../Components/Burger";
import Pizza from "../Components/Pizza";
import Sendvich from "../Components/Sendvich";
import Donor from "../Components/Donor";
import Xotdog from "../Components/Xotdog";
import Free from "../Components/Free";
import Salat from "../Components/Salat";
import Bread from "../Components/Bread";
const router = createBrowserRouter([


    {
        path: "/",
        element: <App />,

        children: [

            {
                path: "/",
                element: <Foods />,
                children:[
                    {
                        path : "/",
                        element : <Lavash/>
                    },
                    {
                        path : "/desert",
                        element : <Desert/>
                    },
                    {
                        path : "/set",
                        element : <Set/>
                    },
                    {
                        path : "/Xaggi",
                        element : <Xaggi/>
                    },
                    {
                        path : "/Burger",
                        element : <Burger/>
                    },
                    {
                        path : "/pizza",
                        element : <Pizza/>
                    },
                    
                    {
                        path : "/Sendvich",
                        element : <Sendvich/>
                    },
                    
                    {
                        path : "/pizza",
                        element : <Pizza/>
                    },
                    
                    {
                        path : "/Sendvich",
                        element : <Sendvich/>
                    },
                    {
                        path : "/donor",
                        element : <Donor/>
                    },
                    {
                        path : "/Xot-dog",
                        element : <Xotdog/>
                    },
                    {
                        path : "/free",
                        element : <Free/>
                    },
                    {
                        path : "/Salat",
                        element : <Salat/>
                    },
                    // {
                    //     path : "/Bread",
                    //     element : <Bread/>
                    // },
                   
                  
                   
                ]
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/card",
                element: <Card />
            },
            {
                path: "/contact",
                element: <Contact />
            }
        ]

    },


])


export default router
