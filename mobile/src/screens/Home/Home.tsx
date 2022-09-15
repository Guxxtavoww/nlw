import { ScrollView, Image, FlatList } from 'react-native';
import React, { useState, useLayoutEffect } from 'react';

import styles from './styles';
import { IGame } from '../../../src/@types';
import { Header, GameCard } from '../../components';
import logoImg from '../../assets/logo-nlw-esports.png';

import { GAMES } from '../../utils/games';

const Home: React.FC = () => {
  const [games, setGames] = useState<IGame[]>(GAMES);

  useLayoutEffect(() => {
    console.log('Rodou');
  }, []);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollAlign}
    >
      <Image source={logoImg} defaultSource={logoImg} style={styles.logo} />
      <Header
        title="Encontre seu duo!"
        subTitle="Selecione o game que deseja jogar..."
      />
      <FlatList
        horizontal
        data={games}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentList}
        renderItem={({ item, index }) => <GameCard data={item} key={index} />}
      />
    </ScrollView>
  );
};

export default Home;
