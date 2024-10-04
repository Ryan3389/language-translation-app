import { useState } from "react"
import { useMutation } from '@apollo/client';
import { ADD_USER } from "../utils/mutations";
import Auth from '../utils/auth';
import FormComponent from "../components/FormComponent"

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
        { name: 'username', type: 'text', label: 'Username', placeholder: 'Start typing...' },
        { name: 'email', type: 'email', label: 'Email', placeholder: 'name@example.com' },
        { name: 'password', type: 'password', label: 'Password', placeholder: '*****' }
    ]
    return (
        <section className='min-h-screen flex justify-center items-center'>
            <FormComponent
                formTitle="Create Account"
                fields={fields}
                submitButtonText="Create Account"
                formData={formState}
                handleChange={handleChange}
                handleFormSubmit={handleFormSubmit}
            />
        </section>
    )
}

export default SignupPage