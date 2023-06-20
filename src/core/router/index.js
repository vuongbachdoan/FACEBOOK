import { createBrowserRouter } from "react-router-dom";
import { Auth } from "../../pages/auth";
import { Home } from "../../pages/home";
import { Chat } from "../../pages/home/chat";
import { SignUp } from "../../pages/auth/signUp";
import { SignIn } from "../../pages/auth/signIn";
import { Verify } from "../../pages/auth/verify";
import { ResetPassword } from "../../pages/auth/resetPassword";

export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Auth/>,
        children: [
            {
                path: 'sign-up',
                element: <SignUp/>
            },
            {
                path: 'sign-in',
                element: <SignIn/>
            },
            {
                path: 'verify',
                element: <Verify/>
            },
            {
                path: 'reset-password',
                element: <ResetPassword/>
            },
        ]
    },
    {
        path: '/app',
        element: <Home/>,
        children: [
            {
                path: 'chat',
                element: <Chat/>
            }
        ]
    },
])