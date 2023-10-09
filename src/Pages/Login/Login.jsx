import { useContext } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { authContext } from "../../Provider/AuthProvder";

const Login = () => {
    const {logInUser} = useContext(authContext)
    const handleLoginForm = e =>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password)

        logInUser(email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log(error.message)
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className=" min-h-screen bg-base-200">
                <div className=" flex-col ">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold pt-14 mb-10">Login now!</h1>
                    </div>
                    <div className="md:card flex-shrink-0 md:max-w-2xl mx-auto md:shadow-2xl bg-base-100">
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
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;