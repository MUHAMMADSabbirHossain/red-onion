import React from 'react';
import "./SignIn.css";
import { Button, Card, Checkbox, Input, Typography } from '@material-tailwind/react';

const SignIn = () => {
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
                        <Input size="lg" label="Email" />
                        <Input type="password" size="lg" label="Password" />
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



                    <Button className="mt-6" fullWidth>
                        Sign In
                    </Button>
                    <Typography color="gray" className="mt-4 text-center font-normal">
                        Already have an account?{" "}
                        <a href="#" className="font-medium text-gray-900">
                            Sign Up
                        </a>
                    </Typography>
                </form>
            </Card>
        </section>
    );
};

export default SignIn;