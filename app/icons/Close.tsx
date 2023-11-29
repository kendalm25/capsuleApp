import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M5.152 5.152a1.2 1.2 0 0 1 1.696 0L12 10.303l5.152-5.152a1.2 1.2 0 1 1 1.696 1.697L13.697 12l5.151 5.151a1.2 1.2 0 0 1-1.696 1.697L12 13.697l-5.152 5.151a1.2 1.2 0 0 1-1.696-1.697L10.303 12 5.152 6.848a1.2 1.2 0 0 1 0-1.696Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
