import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../../../Provider/AuthProvder";


const Navbar = () => {
    const { user, userLogOut } = useContext(authContext)

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        <li><NavLink to="/profile">Profile</NavLink></li>
    </>

    const handleLogOut = e => {
        e.preventDefault()
        userLogOut()
    }

    return (
        <div className="navbar bg-base-100 max-w-6xl mx-auto" data-aos="fade-down">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                        <li><Link onClick={handleLogOut}>Logout</Link></li>
                    </ul>
                </div>
                <Link to="/" className=" py-2 px-5 rounded-lg normal-case md:text-xl font-semibold bg-slate-500 text-white">MindBodyEvents</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end ">
                {
                    user
                        ? <div className="flex items-center gap-3 bg-slate-300 md:px-4 rounded-full p-2">
                            <img className="md:w-10 md:h-10 w-5 h-5 rounded-full" src={user.photoURL} alt="" />
                            <p className="hidden md:block md:text-xl font-medium">{user.displayName}</p>
                            <a onClick={handleLogOut} className="hidden lg:block border-l-2 pl-2">Logout</a>
                        </div>
                        : <Link className="btn" to="/login">Login</Link>
                }

            </div>
        </div>
    );
};

export default Navbar;