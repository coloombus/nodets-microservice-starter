import * as dotenv from 'dotenv';
import express from 'express';
import logger from 'morgan';
import router from './routes';

dotenv.config();

const app: express.Application = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/', router);

export default app;
