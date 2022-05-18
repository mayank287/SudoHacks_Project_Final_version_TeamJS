
const nodeMailer = require("nodemailer");


const sendappointmentmail = async (options) => {
    const transporter = nodeMailer.createTransport({
      host: require('../config/keys').SMPT_HOST,
      port: require('../config/keys').SMPT_PORT,
    //   service:require('../config/keys').SMPT_SERVICE,
      auth: {
        user: require('../config/keys').SMPT_MAIL,
        pass: require('../config/keys').SMPT_PASSWORD,
      },
    });
  
    const mailOptions = {
      from: require('../config/keys').SMPT_MAIL,
      to: options.email,
      subject: options.subject,
      text: options.message,
    };
  
    await transporter.sendMail(mailOptions);
  };
  
  
  
  module.exports = sendappointmentmail;






const sendregisteruser = async (options) => {
    const transporter = nodeMailer.createTransport({
      host: require('../config/keys').SMPT_HOST,
      port: require('../config/keys').SMPT_PORT,
    //   service:require('../config/keys').SMPT_SERVICE,
      auth: {
        user: require('../config/keys').SMPT_MAIL,
        pass: require('../config/keys').SMPT_PASSWORD,
      },
    });
  
    const mailOptions = {
      from: require('../config/keys').SMPT_MAIL,
      to: options.email,
      subject: options.subject,
      text: options.message,
    };
  
    await transporter.sendMail(mailOptions);
  };
  
  
  
  module.exports = sendregisteruser;




const sendregisterdoctor = async (options) => {
    const transporter = nodeMailer.createTransport({
      host: require('../config/keys').SMPT_HOST,
      port: require('../config/keys').SMPT_PORT,
    //   service:require('../config/keys').SMPT_SERVICE,
      auth: {
        user: require('../config/keys').SMPT_MAIL,
        pass: require('../config/keys').SMPT_PASSWORD,
      },
    });
  
    const mailOptions = {
      from: require('../config/keys').SMPT_MAIL,
      to: options.email,
      subject: options.subject,
      text: options.message,
    };
  
    await transporter.sendMail(mailOptions);
  };
  
  
  
  module.exports = sendregisterdoctor;