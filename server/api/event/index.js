'use strict';

import {Router} from 'express';
import * as controller from './event.controller';
import * as auth from '../../auth/auth.service';

var router = new Router();

/*
router.get('/', auth.hasRole('admin'), controller.index);
router.delete('/:id', auth.hasRole('admin'), controller.destroy);
router.get('/me', auth.isAuthenticated(), controller.me);
router.put('/:id/password', auth.isAuthenticated(), controller.changePassword);
router.get('/:id', auth.isAuthenticated(), controller.show);
router.post('/', auth.hasRole('admin'), controller.create);
*/

router.get('/', controller.findAll);
router.get('/user/:userId', controller.findAllByUser);
router.get('/:id', controller.findOneById);
router.post('/', controller.create);
router.put('/', controller.update);
router.delete('/:id', controller.remove);

router.param('id', controller.eventById);
router.param('userId', controller.eventsByUserId);

export default router;
