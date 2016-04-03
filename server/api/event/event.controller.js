'use strict';

import Event from './event.model';
import passport from 'passport';
import config from '../../config/environment';
import jwt from 'jsonwebtoken';

export function findAll(req, res) {
  Event.find({}, function(err, events) {
    if (err)
      res.status(400).send(err);
    else
      res.send(events);
  });
}

export function findAllByUser(req, res) {
  res.send(req.events);
}

export function findOneById(req, res) {
  res.send(req.event);
}

export function create(req, res) {
  var event = new Event(req.body);
  event.save(function(err, event) {
    if (err) {
      res.status(400).send(err);
      throw err;
    }
    else {
      res.send(event._id);
    }
  });
}

export function toggleTodo(req, res) {
  Event.findOne({_id: req.event._id}, function(err, event) {
    if (err) {
      throw err;
      res.status(400).send(err);
    }
    else {
      event.toDoList[req.body.index].done = req.body.bool;
      event.save(function(err) {
        if (err) {
	  throw err;
	  res.status(400).send(err);
	}
	else
	  res.send('Todo change successful');
      });
    }
  });
}

export function update(req, res) {
  var event = new Event(req.body);
  Event.update({_id: req.body._id}, req.body, function(err, event) {
    if (err) {
      res.status(400).send(err);
      throw err;
    }
    else {
      res.send('Update successful');
    }
  });
}

export function remove(req, res) {
  Event.remove({_id: req.event._id}, function(err) {
    if (err) {
      res.status(400).send(err);
      throw err;
    }
    else
      res.send('Deletion successful');
  });
}

export function removeUser(req, res) {
  if (req.events.length > 0)
    Event.find({userId: req.events[0].userId})
      .remove(function (err) {
	if (err) {
	  throw err;
	  res.status(400).end();
	}
	else
	  res.send('did it');
    });
  else
    res.status(400).end();
}

export function eventById(req, res, next, id) {
  Event.findById(id, function(err, event) {
    if (err) {
      res.status(400).send(err);
      throw err;
    }
    else {
      req.event = event;
      next();
    }
  });
}

export function eventsByUserId(req, res, next, userId) {
  Event.find({userId: userId}, function(err, events) {
    if (err) {
      res.status(400).send(err);
      throw err;
    }
    else {
      req.events = events;
      next();
    }
  });
}
