import { Request } from 'express';

export interface IAd {
  gamename: string;
  name: string;
  gameYears: string;
  discordName: string;
  gameTime: string;
  dailyHrs: string;
  hasMic: boolean;
  whenYouPlay: string;
  createdAt?: Date;
}

export type RequestType<T> = Request<T, unknown, IAd>;
