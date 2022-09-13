import cors from 'cors';
import express from 'express';
import { config } from 'dotenv';

config();

const app = express();
const PORT = process.env.PORT || '';

app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  return res.status(200).json({ msg: 'Olá, Heroku!' });
});

app.listen(PORT, () => console.log('Rodando'));
