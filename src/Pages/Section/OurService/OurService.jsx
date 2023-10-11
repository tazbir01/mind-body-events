import { Link } from "react-router-dom";

const OurService = ({service}) => {

    const {name, image, location, cost, id} = service

    return (
        <div className="border p-3 space-y-2 bg-slate-200 rounded-lg" data-aos="flip-up"
        >
            <img src={image} alt="" />
            <h4 className="text-xl font-bold">{name}</h4>
            {/* <p className="text-slate-500">{description}</p> */}
            <p className="text-lg"><span className="font-semibold">Location:</span> {location}</p>
            <p className="text-lg font-semibold">Price: {cost}</p>
            <button className="btn btn-accent"><Link to={`/details/${id}`}>Details</Link></button>
        </div>
    );
};

export default OurService;