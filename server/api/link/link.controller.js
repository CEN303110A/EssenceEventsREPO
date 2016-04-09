'use strict';

import Link from './link.model';
import passport from 'passport';
import config from '../../config/environment';
import jwt from 'jsonwebtoken';

//Use empty find to find all links
export function findAll(req, res) {
  Link.find({}, function(err, links) {
    if (err) {
      throw err;
      res.status(400).send(err);
    }
    else
      res.send(links);
  });
}

//Creates now link from req.body and saves it to database
export function create(req, res) {
  var link = new Link(req.body);
  link.save(function(err) {
    if (err) {
      throw err;
      res.status(400).send(err);
    }
    else
      res.send('Creation Successful');
  });
}

//Updates link from req.body._id and saves the information in req.body to the database
export function update(req, res) {
  Link.update({_id: req.body._id}, req.body, function(err) {
    if (err) {
      res.status(400).send(err);
      throw err;
    }
    else
      res.send('Update successful');
  });
}

//Removes a link from the database by route param id
export function remove(req, res) {
  Link.remove({_id: req.params.id}, function(err) {
    if (err) {
      res.status(400).send(err);
      throw err;
    }
    else
      res.send('Deletion successful');
  });
}
