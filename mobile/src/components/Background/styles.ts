import { StyleSheet, Dimensions } from 'react-native';

import { THEME } from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND_800,
    width: Dimensions.get('screen').width,
  },
});

export default styles;
