import {Outlet, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {useApp} from "../context/AppContext.tsx";
import {useToast} from "../context/ToastContext.tsx";

const ProtectedRoutes = () => {
    const navigate = useNavigate();
    const {isAuthenticated, isAuthLoading} = useApp();
    const {showToast} = useToast();

    useEffect(() => {
        if (!isAuthLoading) {  // Wait until loading is complete
            if (!isAuthenticated) {
                showToast({type: 'warning', message: 'Please sign in first!'});
                navigate('/signin');
            }
        }
    }, [isAuthenticated, isAuthLoading, navigate, showToast]);

    return !isAuthLoading && isAuthenticated ? <Outlet/> : null;  // Return nothing while loading
}

export default ProtectedRoutes;


