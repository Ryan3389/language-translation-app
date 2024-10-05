import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import FormComponent from "../components/FormComponent"
import Navbar from '../components/Navbar';
const Login = () => {
    const [formState, setFormState] = useState({
        email: '',
        password: ''
    });

    const [loginUser, { error, data }] = useMutation(LOGIN_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await loginUser({
                variables: { ...formState }
            });

            if (data && data.login) {
                Auth.login(data.login.token);
            }
        } catch (error) {
            console.error(error);
        }
    };
    const fields = [
        { name: 'email', type: 'email', label: 'Email', placeholder: 'john_doe@example.com' },
        { name: 'password', type: 'password', label: 'Password', placeholder: '*****' }
    ]


    return (
        <>
            <Navbar />
            <section className='h-[90vh] flex justify-center items-center'>
                <FormComponent
                    formTitle="Login"
                    fields={fields}
                    submitButtonText="Login"
                    formData={formState}
                    handleChange={handleChange}
                    handleFormSubmit={handleFormSubmit}
                    redirectPath='/signup'
                    redirectText="Don't have an account ? Create Account"
                />
            </section>
        </>
    )
}

export default Login

