import {StyleSheet} from 'react-native';
import COLORS from './src/theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    padding: 15,
  },
  flatListContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    backgroundColor: COLORS.black,
    padding: 15,
  },
  number: {
    color: COLORS.white,
    fontSize: 60,
    padding: 15,
  },
});

export default styles;
