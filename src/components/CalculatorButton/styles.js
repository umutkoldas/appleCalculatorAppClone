import {StyleSheet, Dimensions} from 'react-native';
import COLORS from '../../theme/colors';
const {width} = Dimensions.get('screen');
const viewWidth = width / 4 - 17.5;

const defaultButtonView = {
  justifyContent: 'center',
  alignItems: 'center',
  width: viewWidth,
  height: viewWidth,
  borderRadius: viewWidth / 2,
  margin: 5,
};

const defaultButtonText = {
  fontSize: 30,
  fontWeight: '600',
};

const styles = StyleSheet.create({
  operator: {
    ...defaultButtonView,
    backgroundColor: COLORS.orange,
  },
  operatorText: {
    ...defaultButtonText,
    color: COLORS.white,
  },
  number: {
    ...defaultButtonView,
    backgroundColor: COLORS.darkGrey,
  },
  numberText: {
    ...defaultButtonText,
    color: COLORS.white,
  },
  functional: {
    ...defaultButtonView,
    backgroundColor: COLORS.ligthGrey,
  },
  functionalText: {
    ...defaultButtonText,
    color: COLORS.black,
  },
  zeroNumber: {
    ...defaultButtonView,
    width: viewWidth * 2,
    backgroundColor: COLORS.darkGrey,
    alignItems: 'flex-start',
  },
  zeroNumberText: {
    ...defaultButtonText,
    color: COLORS.white,
    marginHorizontal: 33,
  },
});
export default styles;
