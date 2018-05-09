// Create a Transport instance using nodemailer
var nodemailer = require('nodemailer');
// require and configure dotenv, will load vars in .env in process.env
require('dotenv').config()

var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  auth: {
    type: "OAuth2",
    user: process.env.EMAIL,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SERECT,
    refreshToken: process.env.REFLESH_TOKEN
  }
});
// Setup mail configuration
var mailOptions = {
  from: `Quapni-康迪薾戶外 <${process.env.EMAIL}>`,
  to: process.env.MAILTO,
  subject: 'Quapni測試信件',
  text: '信件測試寄送! 謝謝=)'
};
// send mail
transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
