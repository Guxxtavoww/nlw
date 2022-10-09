import { StyleSheet } from 'react-native';

import { THEME } from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  text: {
    color: THEME.COLORS.TEXT,
  }
});

export default styles;
