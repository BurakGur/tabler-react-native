import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDirectionSignOff = ({
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
    <Path d="m18.73 14.724 1.949-1.95a1.095 1.095 0 0 0 0-1.548l-7.905-7.905a1.095 1.095 0 0 0-1.548 0l-1.95 1.95m-2.01 2.01-3.945 3.945a1.095 1.095 0 0 0 0 1.548l7.905 7.905c.427.428 1.12.428 1.548 0l3.95-3.95M8 12h4M13.748 13.752 12 15.5M3 3l18 18" />
  </Svg>
);
export default SvgDirectionSignOff;
