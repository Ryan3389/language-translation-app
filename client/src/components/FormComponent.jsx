import { Link } from "react-router-dom";

const FormComponent = ({ formTitle, fields, submitButtonText, formData, handleChange, handleFormSubmit, redirectPath, redirectText }) => {
    return (
        <form onSubmit={handleFormSubmit} className='p-8 rounded-lg max-w-md w-full'>
            <h1 className='text-3xl font-bold text-center mb-5 text-secondaryColor'>{formTitle}</h1>
            {fields.map((field, index) => (
                <div key={index} className='mb-4'>

                    {field.type === 'radio' ? (
                        <div className='mt-2'>
                            <input
                                type="radio"
                                name={field.name}
                                value={field.value}
                                checked={formData[field.name] === field.value}
                                onChange={handleChange}
                            />
                            <label className="ml-2 text-secondaryColor">{field.label}</label>
                        </div>
                    ) : (
                        <>
                            <label className="text-secondaryColor" htmlFor={field.name}>{field.label}</label>
                            <input
                                className='border border-gray-300 p-2 w-full rounded'
                                type={field.type}
                                name={field.name}
                                id={field.name}
                                placeholder={field.placeholder}
                                value={formData[field.name] || ''}
                                onChange={handleChange}
                            />
                        </>
                    )}
                </div>
            ))}
            <Link to={redirectPath}>{redirectText}</Link>
            <input type="submit" value={submitButtonText} className='mt-4 w-full bg-secondaryColor hover:bg-btnHover text-white py-2 rounded cursor-pointer' />
        </form>
    );
};

export default FormComponent;
