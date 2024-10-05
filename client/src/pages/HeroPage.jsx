import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
const HeroPage = () => {
    return (
        <>
            <Navbar />
            <section className=' h-[90vh] flex justify-center items-center flex-col w-[80%] m-auto text-secondaryColor'>
                <article className='text-center mb-5'>
                    <h1 className='text-3xl font-bold tracking-tight mb-5 sm:text-5xl'>Welcome to ENTER NAME HERE</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet laudantium omnis rem voluptatum ipsa perspiciatis totam molestiae incidunt ad hic.</p>
                </article>
                <article>
                    <Link to='/login' className='m-1 rounded-md  px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm bg-secondaryColor hover:bg-gray-500'>Login</Link>
                    <Link to='/signup' className='m-1 rounded-md  px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm bg-secondaryColor hover:bg-gray-500'>Signup</Link>
                </article>
            </section>
        </>
    )
}

export default HeroPage