import React, { Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import topbar from "topbar";
import DarkTopLoaderBar from "../../topbar/topbar";

import "../../App.css";


const Landing = ({ isDoctorAuthenticated, isUserAuthenticated }) => {
DarkTopLoaderBar();

  if (isDoctorAuthenticated) {
    return <Redirect to="/dashboard" />;
  } else if (isUserAuthenticated) {
    return <Redirect to="/appointment" />;
  }

  return (
    <Fragment>
      {topbar.show()}
      <section id="landing">
        <div className="container">
          <div className="img">
            <div className="img-1">
              <img src={require("../../img/undraw_doctor_kw5l.svg")} />
            </div>
          </div>
          <div className="heading">
            <h1 className="main-heading">Find Your Best Doctor &</h1>
            <h1 className="main-heading">
              Book Your <span className="main-span">Appointment.</span>
            </h1>
          </div>
          <div className="landing-position">
            <div className="signup">
              <div className="doctor-signup">
                <h2 className=" item heading-sub">
                  <strong>For Doctors</strong>
                </h2>
                <p className="item description">
                 Patients Waiting For Your Best Service
                </p>

                <Link
                  to="/registerDoctor"
                  type="button"
                  className="item btn btn-info landing-btn "
                >
                  Sign Up
                </Link>
              </div>
              <div className="user-signup">
                <h2 className="item heading-sub">
                  <strong>For Users</strong>
                </h2>
                <p className="item special description">
               Get yourself treated by Best Doctors 
                </p>
                <Link
                  to="/registerUser"
                  className="item btn btn-outline-info landing-btn"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
          <br />
        </div>
        <br />
      </section>
      {topbar.hide()}
    </Fragment>
  );
};
Landing.propTypes = {
  isDoctorAuthenticated: PropTypes.bool.isRequired,
  isUserAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isDoctorAuthenticated: state.authDoctor.isDoctorAuthenticated,
  isUserAuthenticated: state.authUser.isUserAuthenticated,
});

export default connect(mapStateToProps)(Landing);
