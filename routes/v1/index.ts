import express from 'express';
import {HelloWorldController} from '../../controllers/helloWorldController';

const router = express.Router();

router.get(`/`, (req, res, next) => (new HelloWorldController(req, res, next)).resolve());

export default router;
