import { ScrollView, Image, FlatList } from 'react-native';
import React, { useState, useLayoutEffect, useCallback } from 'react';

import styles from './styles';
import { baseRequest } from '../../api';
import { Loader } from '../../components';
import { IGame } from '../../../src/@types';
import { Header, GameCard } from '../../components';
import logoImg from '../../assets/logo-nlw-esports.png';

const Home: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [games, setGames] = useState<IGame[]>([]);

  const getApiGames = useCallback(() => {
    setLoading(true);
    baseRequest
      .get('/games')
      .then(({ data }) => {
        setLoading(false);
        setGames(data);
      })
      .catch((err) => {
        setGames([]);
        setLoading(false);
        console.log(err.message);
      });
  }, []);

  useLayoutEffect(() => {
    getApiGames();
  }, [getApiGames]);

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
      {loading ? (
        <Loader />
      ) : (
        <FlatList
          horizontal
          data={games}
          ListEmptyComponent={<Loader text="Sem dados" />}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentList}
          renderItem={({ item, index }) => <GameCard data={item} key={index} />}
        />
      )}
    </ScrollView>
  );
};

export default Home;
