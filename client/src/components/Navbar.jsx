import { Link } from "react-router-dom";
import Auth from '../utils/auth'
const Navbar = () => {
    const handleLogout = () => {
        Auth.logout()
    }
    return (
        <header className="fixed top-0 left-0 w-screen h-[10vh] bg-gradient-to-r from-blue-200 to-zinc-400 flex items-center">
            {Auth.loggedIn() ? (
                <nav className="flex justify-between w-[80%] m-auto mt-5">
                    <h1 className="text-secondaryColor font-semibold">SpeakEasy</h1>
                    <span>
                        <Link onClick={handleLogout} className="mx-5 text-secondaryColor font-semibold">Logout</Link>
                    </span>
                </nav>
            ) : (
                <nav className="flex justify-between w-[80%] m-auto mt-5">
                    <h1 className="text-secondaryColor font-semibold">SpeakEasy</h1>
                    <span>
                        <Link className="text-secondaryColor font-semibold" to="/">Home</Link>
                        <Link className="mx-5 text-secondaryColor font-semibold" to="/login">Login</Link>
                        <Link className="text-secondaryColor font-semibold" to="/signup">Signup</Link>
                    </span>
                </nav>
            )}
        </header>

    )
}

export default Navbar