'use strict';

import {Router} from 'express';
import * as controller from './subcontractor.controller';
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

router.get('/', auth.isAuthenticated() , controller.index);
router.post('/', auth.hasRole('admin'), controller.create);

export default router;
