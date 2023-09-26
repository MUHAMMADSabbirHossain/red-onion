import React from 'react';
import "./Payment.css";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    if (user) {

        return (
            <div>
                payment
            </div>
        );
    }
    return navigate("/signin");
};

export default Payment;