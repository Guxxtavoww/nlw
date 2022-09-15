import { ImageSourcePropType } from 'react-native';

export interface IGame {
  id: string;
  cover: ImageSourcePropType;
  name: string;
  ads: string;
}
