import React from 'react';
import "./RequireAuth.css";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';

const RequireAuth = ({ children }) => {

    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);
    if (!user) {
        return navigate("/signin");
    }
    return children;
};

export default RequireAuth;