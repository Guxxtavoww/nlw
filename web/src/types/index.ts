export interface IApiResponse {
  msg: string;
}

export interface IFormData {
  gamename: string;
  name: string;
  gameYears: string;
  discordName: string;
  whenYouPlay: string[];
  gameTime: string;
  dailyHrs: string;
  hasMic: 'on' | 'off';
}
