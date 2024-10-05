// import { Link } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import auth from "../utils/auth";

const AuthComponent = ({ children }) => {
    return auth.loggedIn() ? children : <Navigate to='/' />
}

export default AuthComponent