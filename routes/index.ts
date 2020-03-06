'use strict';

import express from 'express';
import v1 from './v1';
import {handler, notFound} from './error';

const router = express.Router();

router.use(`/v1`, v1);
router.all('*', notFound);
router.use(handler);

export default router;
