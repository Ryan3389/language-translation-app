const FormComponent = ({ formTitle, fields, submitButtonText, formData, handleChange, handleFormSubmit }) => {

    return (

        <form onSubmit={handleFormSubmit} className='p-8 rounded-lg max-w-md w-full'>
            <h1 className='text-3xl font-bold text-center'>{formTitle}</h1>
            {fields.map((field) => (
                <div key={field.name} className='mb-4'>
                    <label htmlFor={field.name}>{field.label}</label>
                    <input className='border border-gray-300 p-2 w-full rounded'
                        type={field.type}
                        name={field.name}
                        id={field.name}
                        placeholder={field.placeholder}
                        value={formData[field.name]}
                        onChange={handleChange}

                    />
                </div>
            ))}
            <input type="submit" value={submitButtonText} className='mt-4 w-full bg-gray-900 text-white py-2 rounded cursor-pointer' />
        </form>
    )
}

export default FormComponent