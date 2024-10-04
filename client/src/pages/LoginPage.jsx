import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import FormComponent from "../components/FormComponent"
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
        { name: 'email', type: 'email', label: 'Email', placeholder: 'Enter yor email' },
        { name: 'password', type: 'password', label: 'Password', placeholder: 'Enter your password' }
    ]


    return (
        <section className='min-h-screen flex justify-center items-center'>
            <FormComponent
                formTitle="Login"
                fields={fields}
                submitButtonText="Login"
                formData={formState}
                handleChange={handleChange}
                handleFormSubmit={handleFormSubmit}
            />
        </section>
    )
}

export default Login

