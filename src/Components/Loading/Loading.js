import { Spinner } from '@material-tailwind/react';
import React from 'react';

const Loading = () => {
    return (

        <div style={{ height: "300px" }} className='w-100 d-flex justify-content-center align-items-center'>
            <Spinner animation="border" variant="primary" />
        </div>
    );
};

export default Loading;