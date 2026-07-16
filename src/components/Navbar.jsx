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


export const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav-row-1">
        <div className="row">
          <div className="col-1">
            <button className="nav-menu text-white  mb-1  px-3 fw-medium ">
              Menu
              <span>
                <i class="bi bi-caret-down-fill ms-1"></i>
              </span>
            </button>
          </div>
          <div className="col-1 fw-bold">My KFUEIT</div>
          <div className="col-5 fw-medium">
            <marquee behavior="scroll" direction="left">
              Welcome to MYKFUEIT Dashboard
            </marquee>
          </div>
          <div className="col-3 fw-medium ">
            Welcome Abdul Hanan, COSC241101065
          </div>
          <div className="col-2 fw-medium">
            <img src={power} alt="Power" className="img-fluid img-row-1 pe-1" />
            Login
            <span className="text-secondary text-start ps-1">|</span>
          </div>
        </div>
      </div>
      <div className="container-fluid nav-row-2 my-1 ">
        <div className="row">
          <div className="col-7 btn-row ps-0">
            <button className="ms-0">
              <img src={d1} alt="" className="img-fluid img-row-2" />
              <p>KFUEIT Email</p>
            </button>
            <button onClick={() => window.open("https://www.kfueit.edu.pk/", "_blank")}>
              <img src={d2} alt="" className="img-fluid img-row-2" />
              <p>KFUEIT</p>
            </button>
            <button>
              <img src={d3} alt="" className="img-fluid img-row-2" />
              <p>DOWNLOAD</p>
            </button>
            <button>
              <img src={d4} alt="" className="img-fluid img-row-2" />
              <p>CONTACT</p>
            </button>
            <button>
              <img src={d5} alt="" className="img-fluid img-row-2" />
              <p>MANUALS</p>
            </button>
            <button>
              <img src={d6} alt="" className="img-fluid img-row-2" />
              <p>Software</p>
            </button>
            <button>
              <img src={d7} alt="" className="img-fluid img-row-2" />
              <p>Timetable</p>
            </button>
            <button>
              <img src={home} alt="" className="img-fluid img-row-2" />
              <p>Home</p>
            </button>
            <button>
              <img src={profile} alt="" className="img-fluid img-row-2" />
              <p>My Profile</p>
            </button>
          </div>
        </div>
      </div>
      <div className="container-fluid nav-row-3">
        <p className="bg-white fw-bold rounded-1">
          Home <span className="fs-5 fw-lighter">x</span>
        </p>
      </div>
    </>
  );
};
