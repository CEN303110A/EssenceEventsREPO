'use strict';

import Event from './event.model';
import passport from 'passport';
import config from '../../config/environment';
import jwt from 'jsonwebtoken';

export function index(req, res) {
  console.log('found route');
}

export function create(req, res) {
  console.log('route found');
}