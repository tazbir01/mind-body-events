import { useContext, useState } from "react";
// import Navbar from "../Shared/Navbar/Navbar";
import { authContext } from "../../Provider/AuthProvder";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const { logInUser, logInWithGoogle } = useContext(authContext)
    const location = useLocation()
    console.log(location)
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState('')

    const handleGoogleLogIn =()=>{
        logInWithGoogle()
        .then(result => {
            console.log(result.message)
        })
        .catch(error => {
            console.log(error.message)
        })
    }

    const handleLoginForm = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password)

        setErrorMessage('')

        logInUser(email, password)
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : "/")
            })
            .catch(error => {
                console.log(error.message)
                setErrorMessage(error.message)
            })
    }
    return (
        <div>
            
            <div className=" min-h-screen flex flex-col bg-base-200 ">
                <div className=" flex-col ">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold pt-14 mb-10">Login now!</h1>
                    </div>
                    <div className="md:card flex-shrink-0 md:max-w-2xl mx-auto md:shadow-2xl bg-base-100 mb-10">
                        <form onSubmit={handleLoginForm} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Your Email Address..." className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            {
                                errorMessage && <p>*{errorMessage}</p>
                            }
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p className="text-center font-medium">Don&#39;t Have An Acount? <Link className="font-bold" to="/register">Register</Link></p>
                        <div className="border-t-2 p-3 my-5">
                            <p className="text-center">Or</p>
                            <button onClick={handleGoogleLogIn} className="btn w-full"><FcGoogle className="text-xl"></FcGoogle>Continue With Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;