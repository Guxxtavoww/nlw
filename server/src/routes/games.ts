import cors from 'cors';
import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

router.get('/', cors(), async (_req, res) => {
  const games = await prisma.game.findMany();

  if (!games.length) {
    return res.status(204).json('Não há conteúdo');
  }

  return res.status(200).json(games);
});

router.get('/:id/ads', cors(), async (req, res) => {
  const { id } = req.params;

  return;
});

export default router;
