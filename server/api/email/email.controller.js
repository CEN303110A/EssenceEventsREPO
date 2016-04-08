'use strict';

import config from '../../config/environment';
var nodemailer = require('nodemailer');

export function email(req, res) {
  var email = req.body;
  var user = config.essEventsEmail.user;
  var pass = config.essEventsEmail.password;
  var transporter = nodemailer.createTransport('smtps://' + user + '%40gmail.com:' + pass + '@smtp.gmail.com');
  var mailOptions = {
    from: email.address,
    to: config.essEventsEmail.address,
    subject: 'Contact Request from ' + email.firstName + ' ' + email.lastName,
    text: email.message + '\n\n' + 'Phone: ' + email.phone
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      res.status(400).end();
      return console.log(error);
    }
    res.send('Message sent: ' + info.response);
    console.log('Message sent: ' + info.response);
  });
}
