import "../css/HomePage.css";

export const HomePage = () => {
  return (
    <div className="homepage ">
      <div className="container-fluid mid-container">
        <div className="row">
          {/* Notice Board - appears first on mobile (top), side by side on desktop */}
          <div className="col-12 col-md-4 order-first">
            <div className="row">
              <h6 className="fs-3 text-center pt-4">
                <i className="fa fa-bell-o pe-2" aria-hidden="true" />
                Notice Board
              </h6>
            </div>
            <div className="row align-items-center justify-content-center">
              <div className="news-panel rounded-1"></div>
            </div>
          </div>

          {/* News Feed - appears second on mobile (bottom), side by side on desktop */}
          <div className="col-12 col-md-8">
            <div className="row heading">
              <h6 className="fs-3 text-center pt-4">
                <i className="fa fa-graduation-cap pe-2" aria-hidden="true" />
                Students News Feed
              </h6>
            </div>

            {/* Row 1 */}
            <div className="row g-2 justify-content-center">
              <div className="col-6 col-md-3 news-col mt-2">
                <div className="box text-center">
                  <div className="box-content pt-3">
                    <i className="fa fa-calendar" aria-hidden="true"></i>
                    <p>View My Roll No Slip</p>
                  </div>
                </div>
              </div>

              <div className="col-6 col-md-3 news-col mt-2">
                <div className="box text-center">
                  <div className="box-content pt-3">
                    <i className="fa fa-newspaper-o" aria-hidden="true"></i>
                    <p>View My Survey</p>
                  </div>
                </div>
              </div>

              <div className="col-6 col-md-3 news-col mt-2">
                <div className="box text-center">
                  <div className="box-content pt-3">
                    <i className="fa fa-address-book-o" aria-hidden="true"></i>
                    <p>View My Transcript</p>
                  </div>
                </div>
              </div>

              <div className="col-6 col-md-3 news-col mt-2">
                <div className="box text-center">
                  <div className="box-content pt-3">
                    <i className="fa fa-list" aria-hidden="true"></i>
                    <p>View My Plan of Study</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="row g-2 justify-content-center">
              <div className="col-6 col-md-3 news-col mt-4">
                <div className="box text-center">
                  <div className="box-content pt-3">
                    <i className="fa fa-book" aria-hidden="true"></i>
                    <p>View My Current Enrollments</p>
                  </div>
                </div>
              </div>

              <div className="col-6 col-md-3 news-col mt-4">
                <div className="box text-center">
                  <div className="box-content pt-3">
                    <i className="fa fa-money" aria-hidden="true"></i>
                    <p>Semester Fee Voucher</p>
                  </div>
                </div>
              </div>

              <div className="col-6 col-md-3 news-col mt-4">
                <div className="box text-center">
                  <div className="box-content pt-3">
                    <i className="fa fa-building" aria-hidden="true"></i>
                    <p>My Hostel</p>
                  </div>
                </div>
              </div>

              <div className="col-6 col-md-3 news-col mt-4">
                <div className="box text-center">
                  <div className="box-content pt-3">
                    <i className="fa fa-book" aria-hidden="true"></i>
                    <p>Course Registration</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 3 */}
            <div className="row g-2 justify-content-center">
              <div className="col-6 col-md-3 news-col mt-4">
                <div className="box text-center">
                  <div className="box-content pt-3">
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <p>My Clearance</p>
                  </div>
                </div>
              </div>

              <div className="col-6 col-md-3 news-col mt-4">
                <div className="box text-center">
                  <div className="box-content pt-3">
                    <i className="fa fa-money" aria-hidden="true"></i>
                    <p>Generate Chalan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

