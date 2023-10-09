import { useContext, useState } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { authContext } from "../../Provider/AuthProvder";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
    const [errorMessage, setErrorMessage] = useState('')
    const { creatUser, logInWithGoogle} = useContext(authContext)

    const handleGoogleLogIn = () => {
        logInWithGoogle()
            .then(result => {
                console.log(result.message)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const handleRegisterForm = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password)

        setErrorMessage('')

        if (password.length < 6) {
            setErrorMessage("Please give 6 character password or more.")
            return;
        } else if (! /[A-Z]/.test(password)) {
            setErrorMessage("Please add any upperchase character")
            return;
        } else if (! /[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/.test(password)) {
            setErrorMessage("Please add any speacial character")
            return;
        }

        creatUser(email, password)
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
            <div className="flex flex-col bg-base-200">
                <div className=" flex-col ">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold pt-10 mb-6">Register</h1>
                    </div>
                    <div className="md:card flex-shrink-0 md:max-w-2xl mx-auto md:shadow-2xl bg-base-100 mb-10">
                        <form onSubmit={handleRegisterForm} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                            </div>
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
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <p className="font-medium text-center">Have An Acount? <Link className="font-bold" to="/login">Login</Link></p>
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

export default Register;