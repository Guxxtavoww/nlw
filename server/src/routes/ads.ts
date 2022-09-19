import express, { Request } from 'express';

import { IAd } from '../types';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

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

router.get('/:id/discord', async (req, res) => {
  const { id } = req.params;

  const discord = prisma.ad.findUnique({
    select: {
      discordName: true,
    },
    where: {
      id,
    },
  });

  if (!discord) return res.status(204).json('Não há conteúdo');

  return res.status(200).json({ discord });
});

export default router;
