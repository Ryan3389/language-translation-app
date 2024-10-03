import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

function Login() {
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

    return (
        <section className='min-h-screen flex justify-center items-center'>
            <form onSubmit={handleFormSubmit} className='p-8 max-w-md w-full'>
                <h1 className='text-3xl font-bold text-gray-900 mb-4 text-center'>Login</h1>
                <label htmlFor='email' className='block text-gray-900 mb-2'>Email</label>
                <input className='border border-gray-300 p-2 w-full rounded mb-4'
                    type="email"
                    name="email"
                    placeholder="email@example.com"
                    required
                    onChange={handleChange}
                    value={formState.email} />

                <label htmlFor='password' className='block text-gray-900 mb-2'>Password</label>
                <input className='border border-gray-300 p-2 w-full rounded mb-4'
                    type="password"
                    name="password"
                    placeholder="******"
                    required
                    onChange={handleChange}
                    value={formState.password}
                />
                <input type="submit" className='bg-gray-900 text-white w-full p-2 rounded hover:bg-gray-700' />
            </form>

        </section>
    )
}

export default Login;
