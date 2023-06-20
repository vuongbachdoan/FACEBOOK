import { Outlet } from "react-router-dom";

export const Auth = () => {
    return (
        <>
            {/* go to path /sign-up */}
            <Outlet />
        </>
    );
}