import { v4 as uuidv4 } from 'uuid';

import { SET_ALERT, REMOVE_ALERT } from './types';
import { Store } from 'react-notifications-component';

export const setAlert = (msg, alertType, timeOut=5000) => dispatch => {



    Store.addNotification({
        // title: `${msg}`,
       message: `${msg}`,
       type: `${alertType}`,
       insert: "top",
       container: "top-right",
       animationIn: ["animate__animated", "animate__fadeIn"],
       animationOut: ["animate__animated", "animate__fadeOut"],
       dismiss: {
         duration: 2000,
         onScreen: true
       }
     });
    
};


