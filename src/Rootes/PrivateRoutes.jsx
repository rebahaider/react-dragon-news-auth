
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const PrivateRoutes = ({ childern }) => {
    const { user } = useContext(AuthContext);

    if (user) {
        return childern;
    }
    return <Navigate to={'/login'}></Navigate>
    
};

export default PrivateRoutes;