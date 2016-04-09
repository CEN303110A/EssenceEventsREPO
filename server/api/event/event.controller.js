'use strict';

import Event from './event.model';
import passport from 'passport';
import config from '../../config/environment';
import jwt from 'jsonwebtoken';

//Sends back all events with open find call
export function findAll(req, res) {
  Event.find({}, function(err, events) {
    if (err)
      res.status(400).send(err);
    else
      res.send(events);
  });
}

//Uses the findByUser to send all user events back
export function findAllByUser(req, res) {
  res.send(req.events);
}

//Uses the findOneById middleman to send back event by ID
export function findOneById(req, res) {
  res.send(req.event);
}

//Create a new event based on req.body and save it to the database
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

//Find event by ID and then change toDoList array, used for client side interaction
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

//Update event by ID
export function update(req, res) {
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

//Remove subcontractor ID from subcontractor array of all Event documents
export function removeSubcon(req, res) {
  Event.update({}, { $pull: { subcontractors: req.params.plainId } }, {multi: true}, function(err) {
    if (err) {
      throw err;
      res.status(400).send(err);
    }
    else
      res.send('Subcontractor removed');
  });
}

//Remove an event by it's Mongoose ID
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

//Remove all events by a certain user, req.events.length checks if User exists
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

//Middleman to find a particular event by ID
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

//Middleman to find all events by a certain UserId
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
