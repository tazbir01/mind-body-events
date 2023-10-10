import { useContext } from "react";
import { authContext } from "../../Provider/AuthProvder";
import { BiEdit } from "react-icons/bi";

const Profile = () => {
    const { user } = useContext(authContext)
    return (
        <div className=" max-w-6xl mx-auto mt-20 border">
            <h2 className="text-3xl font-bold">Profile information</h2>
            <div className="mt-10 border p-5 flex gap-10">
                <img className="w-32 h-32 rounded-full" src={user.photoURL} alt="" />
                <div>
                    <p className=" font-bold">Name: </p>
                    <p className="text-2xl font-semibold">{user.displayName ? user.displayName : "N/A"}</p>
                    <p className="font-bold">Email: </p>
                    <p className="text-2xl font-semibold">{user.email ? user.email : "N/A"}</p>
                    <p className="font-bold">Phone:</p>
                    <p className="text-2xl font-semibold">{user.phoneNumber ? user.phoneNumber : "N/A"}</p>
                </div>
            </div>
            <button className="text-xl"><BiEdit className="inline-block"></BiEdit> Edit Profile</button>
        </div>
    );
};

export default Profile;