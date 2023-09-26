import React from 'react';
import { Spinner } from '@material-tailwind/react';

const Loading = () => {
    return (

        <div style={{ height: "300px" }} className='w-100 d-flex justify-content-center align-items-center'>
            <Spinner className="h-16 w-16 text-gray-900/50 mx-auto mt-10  " />
        </div>
    );
};

export default Loading;