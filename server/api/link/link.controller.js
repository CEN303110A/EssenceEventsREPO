'use strict';

import Link from './link.model';
import passport from 'passport';
import config from '../../config/environment';
import jwt from 'jsonwebtoken';

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