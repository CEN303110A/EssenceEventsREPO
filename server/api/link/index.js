'use strict';

import {Router} from 'express';
import * as controller from './link.controller';
import * as auth from '../../auth/auth.service';

var router = new Router();

router.get('/', controller.findAll);
router.post('/', auth.hasRole('admin'), controller.create);
router.put('/', auth.hasRole('admin'), controller.update);
router.delete('/:id', auth.hasRole('admin'), controller.remove);

export default router;
