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
  var newSubcontractor = new Subcontractor(req.body);
  newSubcontractor.saveAsync()
    .then(res.send())
    .catch(validationError(res));
}