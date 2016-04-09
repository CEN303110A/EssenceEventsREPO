'use strict';

import {Router} from 'express';
import * as controller from './event.controller';
import * as auth from '../../auth/auth.service';

var router = new Router();

router.get('/', auth.hasRole('admin'), controller.findAll);
router.get('/user/:userId', auth.isAuthenticated(), controller.findAllByUser);
router.get('/:id', auth.isAuthenticated(), controller.findOneById);
router.post('/', auth.hasRole('admin'), controller.create);
router.post('/:id', auth.isAuthenticated(), controller.toggleTodo);
router.put('/', auth.hasRole('admin'), controller.update);
router.put('/:plainId', auth.hasRole('admin'), controller.removeSubcon);
router.delete('/:id', auth.hasRole('admin'), controller.remove);
router.delete('/user/:userId', auth.hasRole('admin'), controller.removeUser);

router.param('id', controller.eventById);
router.param('userId', controller.eventsByUserId);

export default router;