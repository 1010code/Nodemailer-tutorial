// Create a Transport instance using nodemailer
const nodemailer = require('nodemailer');
// require and configure dotenv, will load vars in .env in process.env
require('dotenv').config()

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});
const mailOptions = {
  from: `Quapni-康迪薾戶外 <${process.env.EMAIL}>`,
  to: process.env.MAILTO,
  subject: 'Quapni測試信件',
  text: '此封為測試信件！',
  // html: '<h1>Hello</h1><p>Nice to meet you.</p>'
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
