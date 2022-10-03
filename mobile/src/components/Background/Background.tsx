import React from 'react';
import { ImageBackground } from 'react-native';

import styles from './styles';
import bgImg from '../../assets/background-galaxy.png';

const Background: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ImageBackground
    source={bgImg}
    defaultSource={bgImg}
    style={styles.container}
  >
    {children}
  </ImageBackground>
);

export default Background;
