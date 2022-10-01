import React, { useCallback } from 'react';
import {
  Text,
  TouchableOpacity,
  ImageBackground,
  TouchableOpacityProps,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import styles from './styles';
import { THEME } from '../../theme';
import { IGame } from '../../@types';

interface IGameCardProps extends TouchableOpacityProps {
  data: IGame;
}

const GameCard: React.FC<IGameCardProps> = ({ data, ...rest }) => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const handlePress = useCallback(() => {}, []);

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress} {...rest}>
      <ImageBackground style={styles.cover} source={data.bannerUrl}>
        <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
          <Text style={styles.name}>{data.title}</Text>
          <Text style={styles.ads}>{data.ads} anúncios</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default GameCard;
