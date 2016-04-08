'use strict';

import config from '../../config/environment';

export function email(req, res) {
  var email = req.body;
  var user;
  var pass;
  var transporter = nodemailer.createTransport('smtps://' + user + '%40gmail.com:' + pass + '@smtp.gmail.com');
    //fill in user and pass
  //use nodemailer here and call res.send('message here') if it succeeds and res.status(400).end() if it fails
}
