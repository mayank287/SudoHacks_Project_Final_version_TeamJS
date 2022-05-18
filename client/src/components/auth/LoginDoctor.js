import React, { useState, Fragment } from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {login} from '../../actions/authDoctor';
import topbar from 'topbar';
import DarkTopLoaderBar from '../../topbar/topbar';
import { Store } from 'react-notifications-component';
const LoginDoctor = ({ login, isDoctorAuthenticated }) => {
    DarkTopLoaderBar();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const {email, password} = formData;
    const onChange = e => setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
    const onSubmit = async e => {
        e.preventDefault();
        login(email,password);
    }

    // Redirect if login
    if(isDoctorAuthenticated) {
     
        
            Store.addNotification({
               
               message: "Login Sucessful",
               type: "success",
               insert: "top",
               container: "bottom-center",
               animationIn: ["animate__animated", "animate__fadeIn"],
               animationOut: ["animate__animated", "animate__fadeOut"],
               dismiss: {
                 duration: 2000,
                 onScreen: true
               }
             });
        return  <Redirect to="/dashboard" />

            
           
           
    }

    return (
        <Fragment>
            {topbar.show()}
            <section id="Login">
                <div className="container">
                    <div className="common-form">
                        <div className="form-side">
                            <div className="heading-common">
                                <h1><strong>Log in Doctor </strong>
                                    <i className="fas fa-sign-in-alt"></i>
                                </h1>
                            </div>
                            <form onSubmit={e => onSubmit(e)}>
                                <div className="form-group">
                                <label className="label" for="exampleInputEmail1">Email address</label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    placeholder="Enter your email address." 
                                    name="email"
                                    value={email}
                                    onChange={e => onChange(e)}
                                    required
                                />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group">
                                <label className="label" for="exampleInputPassword1">Password</label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    placeholder="Enter your password." 
                                    name="password"
                                    minLength="6"
                                    value={password}
                                    onChange={e => onChange(e)}
                                />
                                </div>
                                <input type="submit" className="btn btn-info" value="Log In" />
                                <p>or {' '}
                                <Link to="/">Create a new account</Link></p>
                            </form>
                        </div>
                        <div className="img-side">
                            <img src={require("../../img/doctor8.svg")} alt="" className="register-user" />
                        </div>
                    </div>
                </div>
            </section>  
            {topbar.hide()}  
        </Fragment>
    );
};

LoginDoctor.propTypes ={
    login: PropTypes.func.isRequired,
    isDoctorAuthenticated: PropTypes.bool
};
const mapStateToProps = state => ({
    isDoctorAuthenticated: state.authDoctor.isDoctorAuthenticated
});

export default connect(mapStateToProps, {login})(LoginDoctor);
