import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "./UserProvider";
import { useContext } from "react";

// wrap around logged-in user only routes to protect them
function ProtectedRoute({ redirectPath = '/login', children }) {
    const { currentUser } = useContext(UserContext)

    if (!currentUser.email) {
        return <Navigate to={redirectPath} replace />;
    }
    // works for both nested and standalone routes
    return children ? children : <Outlet />;
}
export default ProtectedRoute