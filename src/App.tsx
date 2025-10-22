import {createBrowserRouter, RouterProvider} from "react-router-dom"; /* not sure if correct way of import*/
import Root from "./components/Root.tsx";

export default function App(){
    const router=createBrowserRouter(
        [
            {path:"*", Component:Root} /*all path*/
        ]
    );
    return (
        <>
            <RouterProvider router={router}></RouterProvider>
        </>
    )
}