import { useContext } from "react";
import { authContext } from "../../Provider/AuthProvder";


const Dashboard = () => {
    const {user} = useContext(authContext)
    return (
        <div className="max-w-6xl mx-auto mt-20">
            <h2 className="text-3xl font-bold"><span>{user.displayName}</span> Wellcome to your dashboard</h2>
            <div className="border">
                <h4>Upcoming events</h4>
            </div>
            <div className="border">
                <h4>Recomended events</h4>
            </div>
        </div>
    );
};

export default Dashboard;