import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';

import styles from './styles';
import { THEME } from '../../theme';

<<<<<<< HEAD
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
=======
const Loader: React.FC = () => (
  <View style={styles.container}>
    <ActivityIndicator color={THEME.COLORS.PRIMARY} />
  </View>
);
>>>>>>> 858b10b190fee8630602d2d61d405b886a2eada4

export default Loader;
