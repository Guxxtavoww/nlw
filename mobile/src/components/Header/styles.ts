import { StyleSheet } from 'react-native';

import { THEME } from '../../theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 32,
    alignItems: 'flex-start',
  },
  title: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.LG,
    fontFamily: THEME.FONT_FAMILY.BLACK,
    marginBottom: 15,
  },
  subTitle: {
    color: THEME.COLORS.CAPTION_400,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
  },
});

export default styles;
