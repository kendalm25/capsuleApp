import * as React from 'react';
import Svg, { SvgProps, Rect } from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Rect width={23} height={23} x={0.5} y={0.5} stroke="#D4D4D8" rx={7.5} />
    <Rect width={16} height={16} x={4} y={4} fill="#D4D4D8" rx={4} />
  </Svg>
);
export default SvgComponent;
