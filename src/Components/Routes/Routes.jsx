import { createBrowserRouter } from "react-router-dom";
import Main from "../Main";
import Players from "../Players";

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

    ]
)

export default router;