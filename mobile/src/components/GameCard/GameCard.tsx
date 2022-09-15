import React from 'react';
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
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground style={styles.cover} source={data.cover}>
        <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.ads}>{data.ads} anúncios</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default GameCard;
