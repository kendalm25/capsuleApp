/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

import { ThemeNavigationColors } from '../../@types/theme';

/**
 * Colors
 */
export const Colors = {
  transparent: 'rgba(0,0,0,0)',
  inputBackground: '#FFFFFF',
  white: '#ffffff',
  black: '#000000',
  tabBackground: '#FAFAFA',
  tabActiveBackground: '#E4E4E7',
  //Typography
  text: '#E4E4E7',
  textGray800: '#000000',
  textGray400: '#4D4D4D',
  textGray200: '#A1A1A1',
  primary: '#09090B',
  success: '#28a745',
  error: '#dc3545',
  //ComponentColors
  circleButtonBackground: '#E1E1EF',
  circleButtonColor: '#44427D',
};

export const NavigationColors: Partial<ThemeNavigationColors> = {
  primary: Colors.primary,
  background: '#FFFFFF',
  card: '#EFEFEF',
};

export const FlairColors = {
  Happy: {
    color: '#854D0E',
    backgroundColor: '#FEF9C3',
  },
  Appreciation: {
    color: '#1D4ED8',
    backgroundColor: '#DBEAFE',
  },
  Passionate: {
    color: '#15803D',
    backgroundColor: '#DCFCE7',
  },
  Fear: {
    color: '#B91C1C',
    backgroundColor: '#FECACA',
  },
  Sincere: {
    color: '#BE185D',
    backgroundColor: '#FCE7F3',
  },
  Fun: {
    color: '#C2410C',
    backgroundColor: '#FFEDD5',
  },
  Calm: {
    color: '#7E22CE',
    backgroundColor: '#F3E8FF',
  },
};

/**
 * FontSize
 */
export const FontSize = {
  tiny: 14,
  small: 16,
  regular: 18,
  large: 24,
};

/**
 * Metrics Sizes
 */
const tiny = 10;
const small = tiny * 2; // 20
const regular = tiny * 3; // 30
const large = regular * 2; // 60
export const MetricsSizes = {
  tiny,
  small,
  regular,
  large,
};

export default {
  Colors,
  FlairColors,
  NavigationColors,
  FontSize,
  MetricsSizes,
};
