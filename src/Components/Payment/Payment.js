import React from 'react';
import "./Payment.css";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Payment = () => {
    const [user, loading, error] = useAuthState(auth);
    if (user) {

        return (
            <div>
                payment
            </div>
        );
    }
    return;
};

export default Payment;