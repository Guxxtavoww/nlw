import { ImageSourcePropType } from 'react-native';

export interface IGame {
  id: string;
  bannerUrl: ImageSourcePropType;
  title: string;
  ads?: string;
}
