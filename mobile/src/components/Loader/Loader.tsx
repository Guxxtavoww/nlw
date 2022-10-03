import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';

import styles from './styles';
import { THEME } from '../../theme';

interface ILoaderProps {
  text?: string;
}

const Loader: React.FC<ILoaderProps> = ({ text }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={THEME.COLORS.PRIMARY} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default Loader;
