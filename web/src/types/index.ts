export interface IApiResponse {
  msg: string;
}

export interface IApiGame {
  id: string;
  title: string;
  bannerUrl?: string;
}

export interface IFormData {
  gamename: string;
  name: string;
  gameYears: string;
  discordName: string;
  dailyHrs: string;
}
