import React from 'react';
import "./UserProfile.css";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Typography } from '@material-tailwind/react';

const UserProfile = () => {

    const [user, loading, error] = useAuthState(auth);
    console.log(user);

    return (
        <div>
            user profile
            {
                user && <Typography color="gray" className="text-5xl mt-4 text-center font-normal">{user.email}
                    <br />
                    <p>{user.displayName}</p>
                    <br />
                    <p>Last Refresh At: {user.reloadUserInfo.lastRefreshAt}</p></Typography>
            }
        </div>
    );
};

export default UserProfile;