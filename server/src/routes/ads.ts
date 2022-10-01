import cors from 'cors';
import express from 'express';

import { RequestType } from '../types';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  const ads = await prisma.ad.findMany();

  if (!ads.length) return res.status(204).json('Não há conteúdo');

  return res.status(200).json(ads);
});

router.post('/game/:gameId/create-ad', cors(), async (req: RequestType<{ gameId: string }>, res) => {
  const formData = req.body;
  const { gameId } = req.params;

  try {
    const newAd = await prisma.ad.create({
      data: {
        gameId,
        name: formData.name,
        dailyHrs: formData.dailyHrs,
        discordName: formData.discordName,
        hasMic: formData.hasMic,
        gameTime: formData.gameTime,
        gameYears: Number(formData.gameYears),
        gamename: formData.gamename,
        whenYouPlay: formData.whenYouPlay,
      }
    });

    return res.status(200).json(newAd);
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.get('/ad-per-game/:game', cors(), (req, res) => {
  const { game } = req.params;

  return res.send(game);
});

router.get('/:id/discord', cors(), async (req, res) => {
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
