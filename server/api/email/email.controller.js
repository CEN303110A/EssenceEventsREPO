'use strict';

import config from '../../config/environment';
var nodemailer = require('nodemailer');

export function email(req, res) {
  console.log('here');
  var email = req.body;
  var user = config.essEventsEmail.user;  //truncated email
  var pass = config.essEventsEmail.password;
  console.log('user: ', user, ' pass: ', pass);
  var transporter = nodemailer.createTransport('smtps://' + user + '%40gmail.com:' + pass + '@smtp.gmail.com');
    //fill in user and pass
  //use nodemailer here and call res.send('message here') if it succeeds and res.status(400).end() if it fails
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
