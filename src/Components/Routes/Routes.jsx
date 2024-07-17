import { createBrowserRouter } from "react-router-dom";
import Main from "../Main";
import Players from "../Players";
import Events from "../Events";
import Gallery from "../Gallery";

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Main/>

        },
        {
            path: '/players',
            element: <Players/>

        },
        {
            path: '/events',
            element: <Events/>

        },
        {
            path: '/gallery',
            element: <Gallery/>

        },

    ]
)

export default router;