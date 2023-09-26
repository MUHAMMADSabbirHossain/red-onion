import React, { useRef, useState } from 'react';
import "./SignIn.css";
import { Button, Card, Checkbox, Input, Typography } from '@material-tailwind/react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);



    if (user) {
        navigation("/");
    }
    const handleEmailInput = event => {
        setEmail(event.target.value);
    }

    const handlePasswordInput = event => {
        setPassword(event.target.value);
    }


    const handleFormSubmit = event => {
        console.log(email, password);
        signInWithEmailAndPassword(email, password)
    }
    return (
        <section>
            sign in

            <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray">
                    Sign In
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Enter your details to login.
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 mx-auto">
                    <div className="mb-4 flex flex-col gap-6">
                        <Input onBlur={handleEmailInput} size="lg" label="Email" />
                        <Input onBlur={handlePasswordInput} type="password" size="lg" label="Password" />
                    </div>


                    <Typography
                        variant="small"
                        color="gray"
                        className="items-center font-normal"
                    >
                        Your have agreed the
                        <a
                            href="#"
                            className="font-medium transition-colors hover:text-gray-900"
                        >
                            &nbsp;Terms and Conditions
                        </a>
                    </Typography>

                    {
                        error && <Typography
                            variant="small"
                            color="gray"
                            className="items-center font-normal"
                        ><p>{error.message}</p></Typography>
                    }


                    <Button onClick={handleFormSubmit} className="mt-6" fullWidth>
                        Sign In
                    </Button>
                    <Typography color="gray" className="mt-4 text-center font-normal">
                        Already have an account?{" "}
                        <a href="#" className="font-medium text-gray-900">
                            <Link to="/signup">Sign Up</Link>
                        </a>
                    </Typography>
                </form>
            </Card>
        </section>
    );
};

export default SignIn;