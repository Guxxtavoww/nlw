import React from 'react';
import { View, Image } from 'react-native';

import styles from './styles';
import { Header } from '../../components';
import logoImg from '../../assets/logo-nlw-esports.png';

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={logoImg} defaultSource={logoImg} style={styles.logo} />
      <Header title="CS GO" subTitle="Conecte-se e comece a jogar!" />
    </View>
  );
};

export default Home;
