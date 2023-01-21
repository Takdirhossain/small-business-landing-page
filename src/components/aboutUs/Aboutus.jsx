import "./aboutus.css"
import image from "../../assets/pexels-malte-luk-2244746.jpg";
const Aboutus = () => {
  return (
    <div className="aboutmain">
      
     <div className="aboutus">
     <div className="aboutimg">
      
      <img src={image} alt="" />
     
     </div>
     <div className="aboutdis">
       
       <h2 className="ditales">We are qualified <br /> & of experience <br /> in this field</h2>
     <p className="aboutexplain">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. <br /> <br />the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
     <button className="discover">Get More info</button>
     </div>
     </div>
    </div>
  );
};

export default Aboutus;
