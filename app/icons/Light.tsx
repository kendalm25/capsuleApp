import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    width={36}
    height={38}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13.586 28.222h8.826M18 1v1.944m12.02 3.182L28.686 7.5M35 18.5h-1.889m-30.222 0H1m6.315-11L5.979 6.126m5.342 19.25a9.814 9.814 0 0 1-2.584-4.978 9.988 9.988 0 0 1 .538-5.617 9.667 9.667 0 0 1 3.478-4.363A9.254 9.254 0 0 1 18 8.78c1.868 0 3.694.57 5.247 1.638a9.667 9.667 0 0 1 3.478 4.363 9.988 9.988 0 0 1 .538 5.617 9.815 9.815 0 0 1-2.584 4.978l-1.035 1.063a6.577 6.577 0 0 0-1.381 2.129 6.729 6.729 0 0 0-.485 2.51v1.033c0 1.032-.398 2.02-1.107 2.75A3.724 3.724 0 0 1 18 36a3.724 3.724 0 0 1-2.671-1.139 3.948 3.948 0 0 1-1.107-2.75V31.08c0-1.74-.672-3.41-1.866-4.64l-1.035-1.063Z"
    />
  </Svg>
)
export default SvgComponent
