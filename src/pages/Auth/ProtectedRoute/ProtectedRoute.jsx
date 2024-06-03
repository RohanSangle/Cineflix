import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../../contexts/authContext/index.jsx';

const ProtectedRoute = () => {
    const { userLoggedIn } = useAuth();

    return userLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
}

export default ProtectedRoute