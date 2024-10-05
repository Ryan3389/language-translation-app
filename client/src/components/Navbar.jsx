import { Link } from "react-router-dom";
import Auth from '../utils/auth'
// const Navbar = () => {
//     return (
//         <header className="fixed top-0 left-0 w-screen h-[10vh] bg-navbar">
//             <nav className="flex justify-between w-[80%] m-auto mt-5">
//                 <h1 className="text-navText">Translator App</h1>
//                 <span>
//                     <Link className="text-navText" to="/">Home</Link>
//                     <Link className="mx-5 text-navText" to="/login">Login</Link>
//                     <Link className="text-navText" to="/signup">Signup</Link>
//                 </span>
//             </nav>
//         </header>
//     )
// }
const Navbar = () => {
    const handleLogout = () => {
        Auth.logout()
    }
    return (
        <header className="fixed top-0 left-0 w-screen h-[10vh] bg-navbar">
            {Auth.loggedIn() ? (
                <nav className="flex justify-between w-[80%] m-auto mt-5">
                    <h1 className="text-navText">Translator App</h1>
                    <span>
                        <Link onClick={handleLogout} className="mx-5 text-navText">Logout</Link>
                    </span>
                </nav>
            ) : (
                <nav className="flex justify-between w-[80%] m-auto mt-5">
                    <h1 className="text-navText">Translator App</h1>
                    <span>
                        <Link className="text-navText" to="/">Home</Link>
                        <Link className="mx-5 text-navText" to="/login">Login</Link>
                        <Link className="text-navText" to="/signup">Signup</Link>
                    </span>
                </nav>
            )}
        </header>

    )
}

export default Navbar