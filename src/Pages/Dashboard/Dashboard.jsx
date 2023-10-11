import { useContext } from "react";
import { authContext } from "../../Provider/AuthProvder";


const Dashboard = () => {
    const { user } = useContext(authContext)
    return (
        <div className="max-w-6xl mx-auto mt-20 p-2">
            <h2 className="text-2xl md:text-3xl font-bold"><span>{user.displayName}</span> Wellcome to your dashboard</h2>
            <div className="border mb-3">
                <h3 className="text-2xl font-semibold">Upcoming events</h3>
                <ul className="md:flex md:justify-around space-y-3 mt-3">
                    <li>
                        <h4 className="text-lg font-medium">WellnessWeekend Retreat</h4>
                        <p>Date: August 10, 2023</p>
                        <p>Time: 9:00 AM</p>
                    </li>
                    <li>
                        <h4 className="text-lg font-medium">MindfulMovement Festival</h4>
                        <p>Date: September 10, 2023</p>
                        <p>Time: 9:00 AM</p>
                    </li>
                    <li>
                        <h4 className="text-lg font-medium">Self-Care Sunda</h4>
                        <p>Date: Octobar 10, 2023</p>
                        <p>Time: 9:00 AM</p>
                    </li>
                    <li>
                        <h4 className="text-lg font-medium">EnergyFlow Yoga</h4>
                        <p>Date: November 10, 2023</p>
                        <p>Time: 9:00 AM</p>
                    </li>
                </ul>
            </div>
            <div className="border mb-3">
                <h3 className="text-2xl font-semibold">Recommended Events</h3>
                <ul className="md:flex md:justify-around space-y-3 mt-3">
                    <li>
                        <h4 className="text-lg font-medium">Healthy Living Expo</h4>
                        <p>Date: August 10, 2023</p>
                        <p>Time: 9:00 AM</p>
                    </li>
                    <li>
                        <h4 className="text-lg font-medium">Mental Wellness Workshop</h4>
                        <p>Date: September 10, 2023</p>
                        <p>Time: 9:00 AM</p>
                    </li>
                    <li>
                        <h4 className="text-lg font-medium">Nutrition Nourish Series</h4>
                        <p>Date: Octobar 10, 2023</p>
                        <p>Time: 9:00 AM</p>
                    </li>
                    <li>
                        <h4 className="text-lg font-medium">EnergyFlow Yoga</h4>
                        <p>Date: November 10, 2023</p>
                        <p>Time: 9:00 AM</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;