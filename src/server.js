import express from 'express';
import cors from 'cors';
import { router as trainsRouter } from './routes/trains.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const { DB_HOST, PORT = 8080 } = process.env;
const app = express();

app.use(cors());
app.use('/trains', express.json(), trainsRouter);

mongoose
  .connect(DB_HOST)
  .then(() => console.log('DB conected successfully'))
  .then(() =>
    app.listen(PORT, () => {
      console.log(`project start at http://localhost:${PORT}`);
    }))
  .catch((error) => console.log(error.message));
