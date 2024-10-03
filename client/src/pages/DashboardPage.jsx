import { useState } from "react"
import { useMutation } from "@apollo/client"
import { TRANSLATE_TEXT } from "../utils/mutations"

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
    return (
        <section className="h-[50vh] flex justify-center items-center">
            <form onSubmit={handleFormSubmit}>
                <h1 className='text-2xl font-bold text-gray-900 mb-4 text-center'>Language Translation</h1>
                <label className="text-xl font-bold text-gray-900 mb-4 text-clip" htmlFor="translate">Translate Text</label>
                <input className='border border-gray-300 p-2 w-full rounded mb-4'
                    type="text"
                    name="translate"
                    placeholder="Start typing ..."
                    required
                    onChange={handleChange}
                    value={formData.translate}
                />
                <label className="text-xl font-bold text-gray-900 mb-4 text-clip" htmlFor="language">French</label>
                <input className='border border-gray-300 p-2 w-full rounded mb-4'
                    type="radio"
                    name="language"
                    onChange={handleChange}
                    value="French"
                />

                <label className="text-xl font-bold text-gray-900 mb-4 text-clip" htmlFor="language">Spanish</label>
                <input className='border border-gray-300 p-2 w-full rounded mb-4'
                    type="radio"
                    name="language"
                    onChange={handleChange}
                    value="Spanish"
                />

                <label className="text-xl font-bold text-gray-900 mb-4 text-clip" htmlFor="language">Japanese</label>
                <input className='border border-gray-300 p-2 w-full rounded mb-4'
                    type="radio"
                    name="language"
                    onChange={handleChange}
                    value="Japanese"
                />
                <input type="submit" className='bg-gray-900 text-white w-full p-2 rounded hover:bg-gray-700 cursor-pointer' />
            </form>
        </section>
    )
}

export default DashboardPage