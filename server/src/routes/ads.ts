import express, { Request } from 'express';

import { IAd } from '../types';

const router = express.Router();

router.get('/', async (req, res) => {
  return;
});

router.post('/create-ad', async (req: Request<unknown, unknown, IAd>, res) => {
  const formData = req.body;

  return;
});

router.get('/ad-per-game/:game', (req, res) => {
  const { game } = req.params;

  return game;
});

export default router;
