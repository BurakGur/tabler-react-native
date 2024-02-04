import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgNetwork = ({
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
    <Path d="M6 9a6 6 0 1 0 12 0A6 6 0 0 0 6 9" />
    <Path d="M12 3q2 .5 2 6c0 5.5-.667 5.667-2 6M12 3q-2 .5-2 6c0 5.5.667 5.667 2 6M6 9h12M3 20h7M14 20h7M10 20a2 2 0 1 0 4 0 2 2 0 0 0-4 0M12 15v3" />
  </Svg>
);
export default SvgNetwork;
