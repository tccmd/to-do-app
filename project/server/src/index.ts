import dotenv from 'dotenv';
import express from 'express';
import 'reflect-metadata';
import { createDB } from './db/db-client';

async function main() {
  dotenv.config();
  await createDB();
  const app = express();
  const port = 3000;

  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

main().catch((err) => console.error(err));
