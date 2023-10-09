import { useContext } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { authContext } from "../../Provider/AuthProvder";
import { Link } from "react-router-dom";

const Register = () => {
    const {creatUser} = useContext(authContext)
    const handleRegisterForm = (e) => {
        e.preventDefault()
        const email = e.target.email.value 
        const password = e.target.password.value 
        console.log(email, password)

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
            <div className=" min-h-screen bg-base-200">
                <div className=" flex-col ">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold pt-14 mb-10">Register</h1>
                    </div>
                    <div className="md:card flex-shrink-0 md:max-w-2xl mx-auto md:shadow-2xl bg-base-100">
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
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <p className="font-medium text-center">Have An Acount? <Link className="font-bold" to="/login">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;