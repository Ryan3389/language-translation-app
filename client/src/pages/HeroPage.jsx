import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
const HeroPage = () => {
    return (
        <>
            <Navbar />
            <section className=' h-[90vh] flex justify-center items-center flex-col w-[80%] m-auto text-secondaryColor'>
                <article className='text-center mb-5'>
                    <h1 className='text-3xl font-bold tracking-tight mb-5 sm:text-5xl'>Breaking Language Barriers, Connecting the World</h1>
                    <p>Welcome to SpeakEasy, the next-generation language translation app powered by AI. Instantly translate text into multiple languages with unparalleled accuracy. Whether you're traveling, learning a new language, or connecting with friends across the globe, we've got you covered.

                        No more misunderstandings—experience seamless communication, anywhere, anytime.</p>
                </article>
                <article>
                    <Link to='/login' className='m-1 rounded-md  px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm bg-secondaryColor hover:bg-btnHover'>Login</Link>
                    <Link to='/signup' className='m-1 rounded-md  px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm bg-secondaryColor hover:bg-btnHover'>Signup</Link>
                </article>
            </section>
        </>
    )
}

export default HeroPage