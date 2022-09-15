import React from 'react';
import { ImageBackground } from 'react-native';

import styles from './styles';
import bgImg from '../../assets/background-galaxy.png';

interface IBackgroundProps {
  children: React.ReactNode;
}

const Background: React.FC<IBackgroundProps> = ({ children }) => {
  return (
    <ImageBackground
      source={bgImg}
      defaultSource={bgImg}
      style={styles.container}
    >
      {children}
    </ImageBackground>
  );
};

export default Background;
