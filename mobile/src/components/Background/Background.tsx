import React from 'react';
import { ImageBackground } from 'react-native';

import styles from './styles';

interface IBackgroundProps {
  children: React.ReactNode;
}

const Background: React.FC<IBackgroundProps> = ({ children }) => {
  return (
    <ImageBackground
      style={styles.container}
      source={require('../../background-galaxy.png')}
    >
      {children}
    </ImageBackground>
  );
};

export default Background;
