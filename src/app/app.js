import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import router from './routes/router';
import database from '../database/mongo';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

database.connect();

export default app;

