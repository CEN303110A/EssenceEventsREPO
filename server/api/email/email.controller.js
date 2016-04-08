'use strict';

import config from '../../config/environment';

export function email(req, res) {
  var email = req.body;
  //use nodemailer here and call res.send('message here') if it succeeds and res.status(400).end() if it fails
}
