'use strict';

import Subcontractor from './subcontractor.model';
import passport from 'passport';
import config from '../../config/environment';
import jwt from 'jsonwebtoken';

export function index(req, res) {
  Subcontractor.findAsync({}, 'name')
    .then(subcontractors => {
      res.status(200).json(subcontractors);
    })
    .catch(handleError(res));
}

export function create(req, res) {
  console.log('reached');
  var newSubcontractor = new Subcontractor(req.body);
  newSubcontractor.saveAsync(function(err) {
    if (err) {
      throw err;
      res.status(400).send(err);
      return;
    }
    res.send();
  });
}