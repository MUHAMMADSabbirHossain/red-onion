import React from 'react';
import "./RequireAuth.css";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';

const RequireAuth = ({ children }) => {

    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);
    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        return navigate("/signin");
    }
    return children;
};

export default RequireAuth;