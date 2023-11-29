import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg width={40} height={40} fill="none" {...props}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m18.333 25-5-5m0 0 5-5m-5 5h13.334M5 20a15 15 0 1 1 30 0 15 15 0 0 1-30 0Z"
    />
  </Svg>
);
export default SvgComponent;
