import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Spinner from '../layout/Spinner';
import {Dots} from 'react-preloaders';
import ProfileItem from './ProfileItem';
import {getProfiles} from '../../actions/profile';
import topbar from 'topbar';
import DarkTopLoaderBar from '../../topbar/topbar';

const Profiles = ({getProfiles, profile: { profiles,loading }}) => {
    DarkTopLoaderBar();
    useEffect(() => {
        getProfiles();
    },[getProfiles]);

    return (
        <Fragment>
            { loading ? 
            <>
            
            
            <Spinner /> 
            </>
             : 
             <Fragment>
                    {topbar.show()}
                <section id="profiles-page">
                    <div className="container">
                        <div className="heading-common">
                            <h1><strong style={{color : "#6C63FF"} }>Doctor Profiles</strong></h1>  
                        </div>
                        <h2 className="welcome-heading"><i className="fas fa-user-md"></i> Book your Appointments</h2>
                        <br />
                        {
                            profiles != null ? (
                                profiles.map(profile => (
                                    <ProfileItem key={profile._id} profile={profile} />
                                ))
                            ) : <h4>No Profiles found..</h4>
                        }
                    </div>
                </section>
                {topbar.hide()}
                </Fragment>
            }
        </Fragment>
    )
};

Profiles.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile
});

export default connect(mapStateToProps, {getProfiles})(Profiles);
