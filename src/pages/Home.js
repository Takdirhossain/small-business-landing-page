import Overview from "../components/overview/Overview";
import Navbar from "../components/navbar/Navbar"
import About from "../components/aboutUs/Aboutus"
import Service from "../components/service/Service"
import Location from "../components/location/Location"
import Testiminial from "../components/testimonial/Testimonial"
import "./home.css"
const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Overview></Overview>
            <h3 className="section-title"> About Us</h3>
            <About></About>
            <h3 className="section-title">Services</h3>
            <Service></Service>
            <h3 className="section-title">Contact Info</h3>
            <Location></Location>
            <h3 className="section-title">Customer Review</h3>
            <Testiminial></Testiminial>
        </div>
    );
};

export default Home;