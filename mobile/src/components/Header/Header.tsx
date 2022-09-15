import React from 'react';
import { View, Text, ViewProps } from 'react-native';

import styles from './styles';

interface IHeaderProps extends ViewProps {
  title: string;
  subTitle?: string;
}

const Header: React.FC<IHeaderProps> = ({ title, subTitle, ...rest }) => {
  return (
    <View style={styles.container} {...rest}>
      <Text style={styles.title}>{title}</Text>
      {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
    </View>
  );
};

export default Header;
