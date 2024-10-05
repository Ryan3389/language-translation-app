import { useState } from "react"
import { useMutation } from '@apollo/client';
import { ADD_USER } from "../utils/mutations";
import Auth from '../utils/auth';
import FormComponent from "../components/FormComponent"
import Navbar from '../components/Navbar';

const SignupPage = () => {
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: ''
    })
    const [addUser, { error, data }] = useMutation(ADD_USER)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()

        try {
            const { data } = await addUser({
                variables: { ...formState }
            })

            if (data && data.addUser) {
                Auth.login(data.addUser.token)
            }
        } catch (error) {
            console.error('Error signing up: ', error)
        }
    }
    const fields = [
        { name: 'username', type: 'text', label: 'Username', placeholder: 'John_Doe123' },
        { name: 'email', type: 'email', label: 'Email', placeholder: 'john_doe@example.com' },
        { name: 'password', type: 'password', label: 'Password', placeholder: '*****' }
    ]
    return (
        <>
            <Navbar />
            <section className='h-[90vh] flex justify-center items-center'>
                <FormComponent
                    formTitle="Create Account"
                    fields={fields}
                    submitButtonText="Create Account"
                    formData={formState}
                    handleChange={handleChange}
                    handleFormSubmit={handleFormSubmit}
                    redirectPath="/login"
                    redirectText="Already have an account ? Login"
                />
            </section>

        </>
    )
}

export default SignupPage