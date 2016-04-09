'use strict';

import {Router} from 'express';
import * as controller from './email.controller';

var router = new Router();

router.post('/', controller.email);
router.put('/', controller.resetPass);

export default router;
