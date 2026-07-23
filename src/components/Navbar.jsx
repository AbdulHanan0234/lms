import "./Navbar.css";
import power from "../assets/power.png";
import d1 from "../assets/d1.png";
import d2 from "../assets/d2.png";
import d3 from "../assets/d3.png";
import d4 from "../assets/d4.png";
import d5 from "../assets/d5.png";
import d6 from "../assets/d6.png";
import d7 from "../assets/d7.png";
import home from "../assets/home.png";
import profile from "../assets/my_profile.png";

import { HomePage } from "./../pages/HomePage";
import { Downloads } from "./../pages/Downloads";
import { Contact } from "./../pages/Contact";
import { Manuals } from "./../pages/Manuals";
import { Software } from "./../pages/Software";
import { Timetable } from "./../pages/Timetable";
import { MyProfile } from "./../pages/MyProfile";

const WebsiteTab = () => (
  <div className="p-3">
    <iframe
      src="https://www.kfueit.edu.pk/"
      style={{ width: "100%", height: "1000px", border: "none" }}
      title="Website"
    />
  </div>
);

const Navbar = ({ openTab }) => {
  return (
    <>
      <div className="container-fluid nav-row-1">
        <div className="row flex-nowrap">
          <div className="col-1">
            <button
              type="button"
              className="nav-menu text-white mb-1 px-3 fw-medium d-inline-flex align-items-center"
              style={{ whiteSpace: "nowrap" }}
            >
              <span>Menu</span>
              <i className="bi bi-caret-down-fill ms-1"></i>
            </button>
          </div>
          <div className="col-1 fw-bold">My KFUEIT</div>
          <div className="col-5 fw-medium">
            <marquee behavior="scroll" direction="left">
              Welcome to MYKFUEIT Dashboard
            </marquee>
          </div>
          <div className="col-3 fw-medium">
            Welcome Abdul Hanan, COSC241101065
          </div>
          <div className="col-2 fw-medium">
            <img src={power} alt="Power" className="img-fluid img-row-1 pe-1" />
            Login
            <span className="text-secondary text-start ps-1">|</span>
          </div>
        </div>
      </div>

      <div className="container-fluid nav-row-2 my-1">
        <div className="row flex-nowrap">
          <div className="col btn-row ps-0">
            <button
              type="button"
              onClick={() =>
                window.open(
                  "https://theuselessweb.com/",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
            >
              <img
                src={d1}
                alt="KFUEIT Email"
                className="img-fluid img-row-2"
              />
              <p>KFUEIT Email</p>
            </button>

            <button
              type="button"
              onClick={() => openTab("website", "Website", WebsiteTab)}
            >
              <img src={d2} alt="KFUEIT" className="img-fluid img-row-2" />
              <p>KFUEIT</p>
            </button>

            <button
              type="button"
              onClick={() => openTab("downloads", "Downloads", Downloads)}
            >
              <img src={d3} alt="Downloads" className="img-fluid img-row-2" />
              <p>DOWNLOAD</p>
            </button>

            <button
              type="button"
              onClick={() => openTab("contact", "Contact", Contact)}
            >
              <img src={d4} alt="Contact" className="img-fluid img-row-2" />
              <p>CONTACT</p>
            </button>

            <button
              type="button"
              onClick={() => openTab("manuals", "Manuals", Manuals)}
            >
              <img src={d5} alt="Manuals" className="img-fluid img-row-2" />
              <p>MANUALS</p>
            </button>

            <button
              type="button"
              onClick={() => openTab("software", "Software", Software)}
            >
              <img src={d6} alt="Software" className="img-fluid img-row-2" />
              <p>Software</p>
            </button>

            <button
              type="button"
              onClick={() => openTab("timetable", "Timetable", Timetable)}
            >
              <img src={d7} alt="Timetable" className="img-fluid img-row-2" />
              <p>Timetable</p>
            </button>

            <button
              type="button"
              onClick={() => openTab("home", "Home", HomePage)}
            >
              <img src={home} alt="Home" className="img-fluid img-row-2" />
              <p>Home</p>
            </button>

            <button
              type="button"
              onClick={() => openTab("profile", "My Profile", MyProfile)}
            >
              <img
                src={profile}
                alt="My Profile"
                className="img-fluid img-row-2"
              />
              <p>My Profile</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
