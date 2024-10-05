import { useState } from "react"
import { useMutation } from "@apollo/client"
import { TRANSLATE_TEXT } from "../utils/mutations"
import FormComponent from "../components/FormComponent"
import Navbar from "../components/Navbar"

const DashboardPage = () => {
    const [formData, setFormData] = useState({
        translate: '',
        language: ''
    })
    const [translateText, { error, data }] = useMutation(TRANSLATE_TEXT)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        try {
            const { data } = await translateText({
                variables: {
                    text: formData.translate,
                    language: formData.language
                }
            })
            console.log(data)
        } catch (error) {
            console.error('Form submit error: ', error)
        }
    }
    const fields = [
        { name: 'translate', type: 'text', label: 'Translate Text', placeholder: 'Start typing ...' },
        { name: 'language', type: 'radio', label: 'French', placeholder: 'Start typing ...', value: 'French' },
        { name: 'language', type: 'radio', label: 'Spanish', placeholder: 'Start typing ...', value: 'Spanish' },
        { name: 'language', type: 'radio', label: 'Japanese', placeholder: 'Start typing ...', value: 'Japanese' }
    ]
    return (
        <>
            <Navbar />
            <section className="h-[90vh] flex justify-center items-center">
                <FormComponent
                    formTitle='Language Translation'
                    fields={fields}
                    submitButtonText="Translate"
                    formData={formData}
                    handleChange={handleChange}
                    handleFormSubmit={handleFormSubmit}
                />
            </section>

        </>
    )
}

export default DashboardPage

