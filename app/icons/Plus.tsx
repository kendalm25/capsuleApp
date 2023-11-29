import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#3F3F46"
      fillRule="evenodd"
      d="M8 2.4a.8.8 0 0 1 .8.8v4h4a.8.8 0 1 1 0 1.6h-4v4a.8.8 0 1 1-1.6 0v-4h-4a.8.8 0 1 1 0-1.6h4v-4a.8.8 0 0 1 .8-.8Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
