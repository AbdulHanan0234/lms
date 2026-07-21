import "../css/HomePage.css";

export const HomePage = () => {
  return (
    <div className="homepage">
      <div className="container-fluid mid-container">
        <div className="row">
          <div className="col-4 col-sm-12">
            <div className="row">
              <h6 className="fs-3 text-center pt-4 ">
                <i className="fa fa-bell-o pe-2" aria-hidden="true" />
                Notice Board
              </h6>
              <div className="news-panel  rounded-1"></div>
            </div>
          </div>
          <div className="col-8 col-sm-12">
            <div className="row heading">
              <h6 className="fs-3 text-center pt-4">
                <i className="fa fa-graduation-cap" aria-hidden="true" />
                <p>Students News Feed</p>
              </h6>
            </div>
            <div className="row">
              <div className="col-3 box text-center pt-3 mt-2 me-2">
                <i className="fa fa-calendar" aria-hidden="true"></i>
                <p>View My Roll No Slip</p>
              </div>
              <div className="col-3 box text-center pt-3 mt-2 me-2">
                <i class="fa fa-newspaper-o" aria-hidden="true"></i>
                <p>View My Survey</p>
              </div>
              <div className="col-3 box text-center pt-3 mt-2 me-2">
                <i class="fa fa-address-book-o" aria-hidden="true"></i>
                <p>View My Transcript</p>
              </div>
              <div className="col-3 box text-center pt-3 mt-2">
                <i class="fa fa-list" aria-hidden="true"></i>
                <p>View My Plan of Study</p>
              </div>
            </div>
            <div className="row">
              <div className="col-3 box text-center pt-3 mt-4 me-2">
                <i class="fa fa-book" aria-hidden="true"></i>
                <p>View My Current Enrollments</p>
              </div>
              <div className="col-3 box text-center pt-3 mt-4 me-2">
                <i class="fa fa-money" aria-hidden="true"></i>
                <p>Semester Fee Voucher</p>
              </div>
              <div className="col-3 box text-center pt-3 mt-4 me-2">
                <i class="fa fa-building" aria-hidden="true"></i>
                <p>My Hostel</p>
              </div>
              <div className="col-3 box text-center pt-3 mt-4">
                <i class="fa fa-book" aria-hidden="true"></i>
                <p>Course Registration</p>
              </div>
            </div>
            <div className="row">
              <div className="col-3 box text-center pt-3 mt-4 me-2">
                <i class="fa fa-check" aria-hidden="true"></i>
                <p>My Clearance</p>
              </div>
              <div className="col-3 box text-center pt-3 mt-4">
                <i class="fa fa-money" aria-hidden="true"></i>
                <p>Generate Chalan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

