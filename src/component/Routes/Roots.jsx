import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../pages/Home";
import AboutMe from "../pages/AboutMe";
import Skill from "../pages/Skill";
import Education from "../pages/Education";
import Projects from "../pages/Projects";
import Experience from "../pages/Experience";


const router= createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout></HomeLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/about',
                element: <AboutMe></AboutMe>
            },
            {
                path:'/skill',
                element:<Skill></Skill>
            },
            {
                path:'/education',
                element:<Education></Education>
            },
            {
                path:'/projects',
                element:<Projects></Projects>
            },
            {
                path:'/experience',
                element:<Experience></Experience>
            }
        ]
}
      
   
    ]);
    export default router;