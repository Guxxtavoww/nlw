import cors from 'cors';
import express from 'express';
import { PrismaClient } from '@prisma/client';

import { IGame, RequestType } from '../types';

const router = express.Router();
const prisma = new PrismaClient();

router.get('/', cors(), async (req, res) => {
  const { withOutImg } = req.query;

  const games = await prisma.game.findMany();

  if (!games.length) return res.status(204).json('Não há conteúdo');

  if (withOutImg) {
    const withOutImg = games.map((g) => ({ title: g.title, id: g.id }));

    return res.status(200).json(withOutImg);
  }

  return res.status(200).json(games);
});

router.get('/:gameId/ads', cors(), async (req, res) => {
  const { gameId } = req.params;

  const ads = await prisma.ad.findMany({
    select: {
      id: true,
      name: true,
      whenYouPlay: true,
      hasMic: true,
      gameYears: true,
      gamename: true,
      dailyHrs: true,
      game: true,
    },
    where: {
      gameId,
    },
    orderBy: {
      createdAt: 'desc',
    }
  });

  if (!ads.length) return res.status(204).json('Não há conteúdo');

  return res.status(200).json(ads.map(ad => ({ ...ad, whenYouPlay: ad.whenYouPlay.split(',')  })));
});

router.post('/create-game', cors(), async (req: RequestType<unknown, IGame>, res) => {
  const game = req.body;

  try {
    const newGame = await prisma.game.create({
      data: {
        title: game.title,
        bannerUrl: game.bannerUrl,
      },
    });

    return res.status(200).json(newGame);
  } catch (error) {
    return res.status(500).json(error);
  }
});

export default router;
