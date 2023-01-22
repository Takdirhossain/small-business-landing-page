import "./location.css"
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
const Location = () => {
  return (
    <div className="location">
    
      <div className="location-wrapper">
        <div className="info">
          <CalendarMonthIcon className="icon"/>
          <div className="dayditls">
            <p>We are open monday-friday</p>
            <h3>7:00 am - 9:00 pm</h3>
          </div>
        </div>
        <div className="info">
          {" "}
          <LocalPhoneIcon className="icon"/>
          <div className="dayditls">
            <p>We are open monday-friday</p>
            <h3>7:00 am - 9:00 pm</h3>
          </div>
        </div>
        <div className="info">
          {" "}
          <FmdGoodIcon className="icon"/>
          <div className="dayditls">
            <p>We are open monday-friday</p>
            <h3>7:00 am - 9:00 pm</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
