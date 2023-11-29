import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.651 6.318a4.5 4.5 0 0 0 0 6.364l7.682 7.682 7.682-7.682a4.5 4.5 0 0 0-6.364-6.364l-1.318 1.318-1.318-1.318a4.5 4.5 0 0 0-6.364 0Z"
    />
  </Svg>
);
export default SvgComponent;
