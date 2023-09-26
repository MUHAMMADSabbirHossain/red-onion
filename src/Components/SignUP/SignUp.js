import React, { useState } from 'react';
import "./SignUp.css";
import { Button, Card, Checkbox, Input, Typography } from '@material-tailwind/react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";

const SignUp = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    const handleNameInput = event => {
        console.log(event.target.value);
        setName(event.target.value);
    };

    const handleEmailInput = event => {
        console.log(event.target.value);
        setEmail(event.target.value);
    };

    const handlePasswordInput = event => {
        setPassword(event.target.value);
    };

    if (user) {
        navigate("/");
    }

    const handleFormSubmit = event => {
        console.log(name, email, password);
        if (email === "" || password === "") {

        }

        createUserWithEmailAndPassword(email, password);
    };


    return (

        <section>

            sign up

            <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray">
                    Sign Up
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Enter your details to register.
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 mx-auto">
                    <div className="mb-4 flex flex-col gap-6">
                        <Input onBlur={handleNameInput} size="lg" label="Name" />
                        <Input onBlur={handleEmailInput} size="lg" label="Email" required />
                        <Input onBlur={handlePasswordInput} type="password" size="lg" label="Password" required />
                    </div>
                    <Checkbox
                        label={
                            <Typography
                                variant="small"
                                color="gray"
                                className="flex items-center font-normal"
                            >
                                I agree the
                                <a
                                    href="#"
                                    className="font-medium transition-colors hover:text-gray-900"
                                >
                                    &nbsp;Terms and Conditions
                                </a>
                            </Typography>
                        }
                        containerProps={{ className: "-ml-2.5" }}
                    />

                    {
                        error && <p className=' text-red'>{error.message}</p>
                    }

                    <Button onClick={handleFormSubmit} className="mt-6" fullWidth>
                        Register
                    </Button>
                    <Typography color="gray" className="mt-4 text-center font-normal">
                        Already have an account?{" "}
                        <a href="#" className="font-medium text-gray-900">
                            <Link to="/signin">Sign In</Link>
                        </a>
                    </Typography>
                </form>
            </Card>

        </section>
    );
};

export default SignUp;