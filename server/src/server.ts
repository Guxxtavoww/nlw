import cors from 'cors';
import express from 'express';
import { config } from 'dotenv';

import ads from './routes/ads';
import games from './routes/games';
import discord from './routes/discord';

config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use('/server/ads', ads);
app.use('/server/games', games);
app.use('/server/discord', discord);

app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  return res.status(200).json({ msg: 'Olá, Heroku!' });
});

app.listen(PORT, () => console.log('Rodando'));
