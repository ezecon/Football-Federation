import { createBrowserRouter } from "react-router-dom";
import Main from "../Main";
import Players from "../Players";
import Events from "../Events";

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

    ]
)

export default router;