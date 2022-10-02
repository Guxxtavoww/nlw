import { Request } from 'express';

export interface IAd {
  gamename: string;
  name: string;
  gameYears: string;
  discordName: string;
  dailyHrs: string;
  hasMic: boolean;
  whenYouPlay: string;
  createdAt?: Date;
}

export interface IGame {
  id?: string;
  title: string;
  bannerUrl: string;
}

export type RequestType<T, P> = Request<T, unknown, P>;
