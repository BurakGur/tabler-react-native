import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBoxAlignRightFilled = ({
  size = 24,
  stroke = 2,
  color = "currentColor",
  ...props
}: {
  size: number,
  stroke: number,
  color: string,
}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={stroke}
    className=""
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      stroke="none"
      d="M18.998 3.003h-5a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h5a2 2 0 0 0 2-2v-14a2 2 0 0 0-2-2M9.008 19.003a1 1 0 0 1 .117 1.993l-.127.007a1 1 0 0 1-.117-1.993zM4.008 19.003a1 1 0 0 1 .117 1.993l-.128.007a1 1 0 0 1-.117-1.993zM4.008 14.002a1 1 0 0 1 .117 1.993l-.128.007a1 1 0 0 1-.117-1.993zM4.008 8.002a1 1 0 0 1 .117 1.993l-.128.007a1 1 0 0 1-.117-1.993zM4.008 3.002a1 1 0 0 1 .117 1.993l-.128.007a1 1 0 0 1-.117-1.993zM9.008 3.002a1 1 0 0 1 .117 1.993l-.127.007a1 1 0 0 1-.117-1.993z"
    />
  </Svg>
);
export default SvgBoxAlignRightFilled;
