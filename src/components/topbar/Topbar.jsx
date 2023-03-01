import "./topbar.scss";
// import PersonIcon from '@mui/icons-material/Person';
// import EmailIcon from '@mui/icons-material/Email';
import {Person, Mail } from "@mui/icons-material";

export default function topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Genius.
          </a>
          <div className="itemcontainer">
            <Person className="icon"/>
            <span>+923033020665</span>

          </div>
          <div className="itemcontainer">
            <Mail className="icon"/>
            <span>mmehran056@gmail.com</span>

          </div>
        </div>
        <div className="right">
          <div className="humburger" onClick={()=> setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
