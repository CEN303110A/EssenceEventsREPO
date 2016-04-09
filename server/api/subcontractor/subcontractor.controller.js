'use strict';

import Subcontractor from './subcontractor.model';
import passport from 'passport';
import config from '../../config/environment';
import jwt from 'jsonwebtoken';

//Uses empty find to get all subcontractors from the database
export function getAll(req, res) {
  Subcontractor.findAsync({}, function(err, subcontractors) {
    if (err) {
      res.status(400).send(err);
      throw err;
    }
    res.send(subcontractors);
  });
}

//Uses findId middleman to find subcontractor by ID and return it
export function getOne(req, res) {
  res.send(req.subcontractor);
}

//Checks if subcontractor with name already exists and if a new name, saves to database
export function create(req, res) {
  var newSubcontractor = new Subcontractor(req.body);
  Subcontractor.findAsync({name: req.body.name}, function(err, response) {
    if (response.length === 0) {
      newSubcontractor.saveAsync(function(err) {
        if (err) {
          res.status(400).send(err);
          throw err;
        }
        res.send('success');
      });
    }
    else
      res.status(400).send(err);
  });
}

//Updates subcontractor by id and req.body
export function update(req, res) {
  Subcontractor.update({_id: req.body._id}, req.body, function(err) {
    if (err) {
      res.status(400).send(err);
      throw err;
    }
    else {
      res.send('Update successful');
    }
  });
}

//Removes subcontractor by ID
export function remove(req, res) {
  Subcontractor.remove({_id: req.subcontractor._id}, function(err) {
    if (err) {
      res.status(400).send(err);
      throw err;
    }
    else {
      res.send('Deletion successful');
    }
  });
}

//Middleman function to find subcontractor by ID and save to req.subcontractor
export function findId(req, res, next, id) {
  Subcontractor.findById(id, function(err, subcontractor) {
    if (err) {
      res.status(400).send(err);
      throw err;
    }
    else {
      req.subcontractor = subcontractor;
      next();
    }
  });
}
