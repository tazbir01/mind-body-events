import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../../../Provider/AuthProvder";


const Navbar = () => {
    const {user, userLogOut} = useContext(authContext)

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
    </>

    const handleLogOut = e =>{
        e.preventDefault()
        userLogOut()
    }

    return (
        <div className="navbar bg-base-100 max-w-6xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="py-2 px-5 rounded-lg normal-case text-xl font-semibold bg-slate-500 text-white">MindBodyEvents</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user 
                    ?  <a onClick={handleLogOut} className="btn">Logout</a>
                    : <Link className="btn" to="/login">Login</Link>
                }
               
            </div>
        </div>
    );
};

export default Navbar;