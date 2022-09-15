import { ImageSourcePropType } from 'react-native';

export interface IGame {
    id: string | number;
    cover: ImageSourcePropType;
    name: string;
    ads: string;
}