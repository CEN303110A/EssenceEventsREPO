'use strict';

import Subcontractor from './subcontractor.model';
import passport from 'passport';
import config from '../../config/environment';
import jwt from 'jsonwebtoken';

export function index(req, res) {
  Subcontractor.findAsync({}, function(err, subcontractors) {
    if (err) {
      throw err;
      res.status(400).send(err);
      return;
    }
    res.send(subcontractors);
  });
}

export function create(req, res) {
  var newSubcontractor = new Subcontractor(req.body);
  Subcontractor.findAsync({name: req.body.name}, function(err, response) {
    if (response.length === 0) {
      newSubcontractor.saveAsync(function(err) {
        if (err) {
          throw err;
          res.status(400).send(err);
          return;
        }
        res.send('success');
      });
    }
    else
      res.status(400).send(err);
  });
}