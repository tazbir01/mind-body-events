import { useLoaderData, useParams } from "react-router-dom";
import { BiTime, BiMap } from "react-icons/bi";

const ServiceDetails = () => {
    const { id } = useParams()
    const idInt = parseInt(id)
    console.log(idInt)
    const services = useLoaderData()
    console.log(services)

    const serviceDetails = services.find(service => service.id === idInt)
    console.log(serviceDetails)
    const { name, description, image, what_to_expect, location, organize_date } = serviceDetails;

    return (
        <div className="grid md:grid-cols-4 gap-5 max-w-6xl mx-auto">
            <div className="col-span-3 p-10">
                <div className="flex justify-center">
                    <img className="lg:max-w-2xl" src={image} alt="" />
                </div>
                <h2 className="text-xl font-bold mt-5">{name}</h2>
                <p className="text-slate-500">{description}</p>
                <br />
                <p className="text-slate-500 font-semibold">{what_to_expect}</p>
            </div>
            <div>
                <div className="border p-3">
                    <h2 className="text-lg font-semibold">Date & Time</h2>
                    <div className="flex">
                        <BiTime className="text-3xl mr-2"></BiTime>
                        <p className="text-slate-500"><span>{organize_date}</span></p>
                    </div>
                    <br />
                    <h2 className="text-lg font-semibold">Location</h2>
                    <div className="flex">
                        <BiMap className="text-3xl mr-2"></BiMap>
                        <p className="text-slate-500">{location}</p>
                    </div>
                </div>
                <div className="border p-3 mt-5">
                    <h2 className="text-xl font-bold">Discover more events</h2>
                    <ul className="font-semibold text-slate-500 p-3 space-y-3">
                        <li>This Weekend Events</li>
                        <li>October Events</li>
                        <li>Meditation Events</li>
                        <li>Workshops Events</li>
                        <li>Health Wellness Events</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;