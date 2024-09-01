import {Outlet, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {useApp} from "../context/AppContext.tsx";
import {useToast} from "../context/ToastContext.tsx";

const ProtectedRoutes = () => {
    const navigate = useNavigate();
    const {isAuthenticated} = useApp();
    const {showToast} = useToast();

    useEffect(() => {
        if (!isAuthenticated) {
            showToast({type: 'warning', message: 'Please sign in first!'});
            navigate('/signin');
        }
    }, [isAuthenticated, navigate, showToast]);

    return isAuthenticated ? <Outlet/> : null;
}

export default ProtectedRoutes;

