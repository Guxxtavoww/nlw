import React from 'react';
import { Text, TouchableOpacity, ImageBackground, TouchableOpacityProps } from 'react-native';

import styles from './styles';
import { IGame } from '../../@types';

interface IGameCardProps extends TouchableOpacityProps {
    data: IGame;
}

const GameCard: React.FC<IGameCardProps> = ({ data, ...rest }) => {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground style={styles.cover} source={data.cover} />
      <Text style={styles.name}>{data.name}</Text>
      <Text style={styles.ads}>{data.ads} anúncios</Text>  
    </TouchableOpacity>
  );
};

export default GameCard;
