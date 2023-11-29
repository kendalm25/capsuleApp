import { ThemeVariables } from '../../@types/theme';

export default function ({}: ThemeVariables) {
  return {
    capsule: {
      text: require('./assets/images/brand_text.png'),
      top: require('./assets/images/capsule_t.png'),
      mid: require('./assets/images/capsule_m.png'),
      bottom: require('./assets/images/capsule_b.png'),
    },
  };
}
