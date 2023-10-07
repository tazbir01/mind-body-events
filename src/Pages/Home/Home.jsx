import OurService from "../Section/OurService/OurService";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <OurService></OurService>
        </div>
    );
};

export default Home;